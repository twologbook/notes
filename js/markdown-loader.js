// Markdown加载和处理函数
async function loadMarkdownContent(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load markdown file: ${filePath}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Error loading markdown:', error);
        return `加载内容失败: ${error.message}`;
    }
}

// Markdown解析函数
function parseMarkdown(markdown) {
    if (!markdown) return '';
    
    // 处理标题
    markdown = markdown.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    markdown = markdown.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    markdown = markdown.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    
    // 处理段落
    markdown = markdown.replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote|<pre|<table)(.+?)$/gm, '<p>$1</p>');
    
    // 处理列表
    let inList = false;
    const lines = markdown.split('\n');
    for (let i = 0; i < lines.length; i++) {
        // 处理无序列表
        if (lines[i].match(/^- (.*?)$/)) {
            if (!inList) {
                lines[i] = '<ul>\n<li>' + lines[i].replace(/^- (.*?)$/, '$1') + '</li>';
                inList = true;
            } else {
                lines[i] = '<li>' + lines[i].replace(/^- (.*?)$/, '$1') + '</li>';
            }
            
            // 检查下一行是否还是列表项
            if (i === lines.length - 1 || !lines[i + 1].match(/^- (.*?)$/)) {
                lines[i] += '\n</ul>';
                inList = false;
            }
        }
        
        // 处理有序列表
        if (lines[i].match(/^\d+\. (.*?)$/)) {
            if (!inList) {
                lines[i] = '<ol>\n<li>' + lines[i].replace(/^\d+\. (.*?)$/, '$1') + '</li>';
                inList = true;
            } else {
                lines[i] = '<li>' + lines[i].replace(/^\d+\. (.*?)$/, '$1') + '</li>';
            }
            
            // 检查下一行是否还是列表项
            if (i === lines.length - 1 || !lines[i + 1].match(/^\d+\. (.*?)$/)) {
                lines[i] += '\n</ol>';
                inList = false;
            }
        }
    }
    markdown = lines.join('\n');
    
    // 应用formatContent函数处理特殊语法
    return formatContent(markdown);
}

// 保留原有的formatContent函数，处理特殊语法
function formatContent(content) {
    return content
        .replace(/【图(\d+)】/g, '<img src="picture/图$1.jpg">') // 图片简写语法
        .replace(/【(.+?)】\((https?:\/\/[^\s]+)\)/g, '<a href="$2"> $1 </a>') // 超链接简写语法
        .replace(/(\w+)\((https?:\/\/[^\s]+)\)/g, '<a href="$2">$1</a>') // Markdown风格链接
        .replace(/关于(.+?)：\s*((?:标题\d+】\(https?:\/\/[^\s]+\)\s*)+)/g, (match, category, links) => {
            // 解析链接
            const listItems = links.trim().split(/\s+/).map(link => {
                const [text, url] = link.match(/标题(\d+)】\((https?:\/\/[^\s]+)\)/).slice(1);
                return `<li><a href="${url}">${category} 标题${text}</a></li>`;
            }).join('');
            return `<p>关于${category}：</p><ul>${listItems}</ul>`;
        })
        .replace(/\n/g, '<br>'); // 自动转换换行符
}
