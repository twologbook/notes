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

// 使用marked.js解析Markdown
function parseMarkdown(markdown) {
    if (!markdown) return '';
    
    // 处理标准Markdown语法
    let html = marked(markdown);
    
    // 处理自定义图片语法【图X】，保留这个特殊语法以兼容现有内容
    html = html.replace(/【图(\d+)】/g, '<img src="picture/图$1.jpg" alt="图$1" class="content-image">');
    
    return html;
}

// 使用marked.js库解析Markdown
function marked(markdown) {
    // 基本的Markdown解析
    let html = markdown
        // 处理标题
        .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
        .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
        .replace(/^### (.*?)$/gm, '<h3>$3</h3>')
        .replace(/^#### (.*?)$/gm, '<h4>$1</h4>')
        
        // 处理粗体和斜体
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        
        // 处理链接 [文本](URL)
        .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        
        // 处理图片 ![alt](URL)
        .replace(/!\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<img src="$2" alt="$1" class="content-image">')
        
        // 处理代码块
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        
        // 处理行内代码
        .replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // 处理列表
    const lines = html.split('\n');
    let inList = false;
    let listType = '';
    
    for (let i = 0; i < lines.length; i++) {
        // 处理无序列表
        if (lines[i].match(/^- (.*?)$/)) {
            if (!inList || listType !== 'ul') {
                lines[i] = (inList ? '</'+listType+'>\n' : '') + '<ul>\n<li>' + lines[i].replace(/^- (.*?)$/, '$1') + '</li>';
                inList = true;
                listType = 'ul';
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
        else if (lines[i].match(/^\d+\. (.*?)$/)) {
            if (!inList || listType !== 'ol') {
                lines[i] = (inList ? '</'+listType+'>\n' : '') + '<ol>\n<li>' + lines[i].replace(/^\d+\. (.*?)$/, '$1') + '</li>';
                inList = true;
                listType = 'ol';
            } else {
                lines[i] = '<li>' + lines[i].replace(/^\d+\. (.*?)$/, '$1') + '</li>';
            }
            
            // 检查下一行是否还是列表项
            if (i === lines.length - 1 || !lines[i + 1].match(/^\d+\. (.*?)$/)) {
                lines[i] += '\n</ol>';
                inList = false;
            }
        }
        
        // 处理段落
        else if (lines[i].trim() && !lines[i].match(/^<\/?[a-z].*>/i)) {
            if (inList) {
                lines[i] += '\n</'+listType+'>';
                inList = false;
            }
            if (!lines[i].match(/^<h[1-6]|<ul|<ol|<li|<blockquote|<pre|<p/)) {
                lines[i] = '<p>' + lines[i] + '</p>';
            }
        }
    }
    
    return lines.join('\n');
}
