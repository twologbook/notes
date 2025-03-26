// 笔记数据结构
const noteStructure = {
    'zh': {
        'notesDirectory': '学习笔记目录',
        'notes': {
            'note1': {
                title: '如何从会工作到会赚钱',
                chapters: [
                    { title: '序章：写在最前面', path: 'content/zh/note1/chapter0.md' },
                    { title: '第一章：好学生=好工作=赚大钱？', path: 'content/zh/note1/chapter1.md' },
                    { title: '第二章：', path: 'content/zh/note1/chapter2.md' },
                    { title: '第三章：', path: 'content/zh/note1/chapter3.md' },
                    { title: '第四章：', path: 'content/zh/note1/chapter4.md' },
                    { title: '第五章：', path: 'content/zh/note1/chapter5.md' },
                    { title: '第六章：', path: 'content/zh/note1/chapter6.md' },
                    { title: '第七章：', path: 'content/zh/note1/chapter7.md' },
                    { title: '第八章：', path: 'content/zh/note1/chapter8.md' },
                    { title: '第九章：', path: 'content/zh/note1/chapter9.md' },
                    { title: '第十章：', path: 'content/zh/note1/chapter10.md' },
                    { title: '第十一章：', path: 'content/zh/note1/chapter11.md' },
                    { title: '第十二章：', path: 'content/zh/note1/chapter12.md' },
                    { title: '第十三章：', path: 'content/zh/note1/chapter13.md' },
                    { title: '第十四章：', path: 'content/zh/note1/chapter14.md' },
                    { title: '第十五章：', path: 'content/zh/note1/chapter15.md' },
                    { title: '第十六章：', path: 'content/zh/note1/chapter16.md' },
                    { title: '第十七章：', path: 'content/zh/note1/chapter17.md' },
                    { title: '第十八章：', path: 'content/zh/note1/chapter18.md' },
                    { title: '第十九章：', path: 'content/zh/note1/chapter19.md' },
                    { title: '第二十章：', path: 'content/zh/note1/chapter20.md' },
                    { title: '第二十一章：', path: 'content/zh/note1/chapter21.md' },
                    { title: '第二十二章：', path: 'content/zh/note1/chapter22.md' },
                    { title: '第二十三章：', path: 'content/zh/note1/chapter23.md' }
                ]
            },
            'note2': {
                title: '留给Agentic AI',
                chapters: [
                    { title: '第一章：-', path: 'content/zh/note2/chapter1.md' },
                    { title: '第二章：-', path: 'content/zh/note2/chapter2.md' },
                    { title: '第三章：-', path: 'content/zh/note2/chapter3.md' }
                ]
            },
            'note3': {
                title: '使用Mauns实现工作流程简化',
                chapters: [
                    { title: '第一章：之前的工作流程', path: 'content/zh/note3/chapter1.md' },
                    { title: '第二章：希望改善的流程', path: 'content/zh/note3/chapter2.md' },
                    { title: '第三章：使用Mauns前的任务拆解', path: 'content/zh/note3/chapter3.md' }
                ]
            },
            'note4': {
                title: '从会工作到会赚钱的个人感悟',
                chapters: [
                    { title: '一：警惕客体思维，学会为自己负责', path: 'content/zh/note4/chapter1.md' },
                    { title: '二：警惕打分思维，接纳多样的世界', path: 'content/zh/note4/chapter2.md' },
                    { title: '三：(反思)让自己的大脑注重积累，而不是结果', path: 'content/zh/note4/chapter3.md' }
                ]
            },
            'note5': {
                title: '从会工作到会赚钱扩展视频合集',
                chapters: [
                    { title: '职业发展与晋升', path: 'content/zh/note5/chapter1.md' },
                    { title: '管理技巧与领导力', path: 'content/zh/note5/chapter2.md' },
                    { title: '个人成长与思维方法', path: 'content/zh/note5/chapter3.md' },
                    { title: '数据科学与技术', path: 'content/zh/note5/chapter4.md' },
                    { title: '创业与商业洞察', path: 'content/zh/note5/chapter5.md' }
                ]
            }
        }
    },
    'en': {
        'notesDirectory': 'Learning Notes',
        'notes': {
            'note1': {
                title: 'How to Go from Working to Earning',
                chapters: [
                    { title: 'Chapter 1: -', path: 'content/en/note1/chapter1.md' },
                    { title: 'Chapter 2: -', path: 'content/en/note1/chapter2.md' },
                    { title: 'Chapter 3: -', path: 'content/en/note1/chapter3.md' }
                ]
            },
            'note2': {
                title: 'Updating',
                chapters: [
                    { title: 'Chapter 1: -', path: 'content/en/note2/chapter1.md' },
                    { title: 'Chapter 2: -', path: 'content/en/note2/chapter2.md' },
                    { title: 'Chapter 3: -', path: 'content/en/note2/chapter3.md' }
                ]
            },
            'note3': {
                title: 'Simplifying Workflows with Mauns',
                chapters: [
                    { title: 'Chapter 1: -', path: 'content/en/note3/chapter1.md' },
                    { title: 'Chapter 2: -', path: 'content/en/note3/chapter2.md' },
                    { title: 'Chapter 3: -', path: 'content/en/note3/chapter3.md' }
                ]
            }
        }
    },
    'ja': {
        'notesDirectory': '学習ノート一覧',
        'notes': {
            'note1': {
                title: '更新中',
                chapters: [
                    { title: '第1章：-', path: 'content/ja/note1/chapter1.md' },
                    { title: '第2章：-', path: 'content/ja/note1/chapter2.md' },
                    { title: '第3章：-', path: 'content/ja/note1/chapter3.md' }
                ]
            },
            'note2': {
                title: '-',
                chapters: [
                    { title: '第1章：-', path: 'content/ja/note2/chapter1.md' },
                    { title: '第2章：-', path: 'content/ja/note2/chapter2.md' },
                    { title: '第3章：-', path: 'content/ja/note2/chapter3.md' }
                ]
            },
            'note3': {
                title: 'Maunsによるワークフロー簡素化',
                chapters: [
                    { title: '第1章：以前のワークフロー', path: 'content/ja/note3/chapter1.md' },
                    { title: '第2章：改善したいワークフロー', path: 'content/ja/note3/chapter2.md' },
                    { title: '第3章：Mauns使用前のタスク分解', path: 'content/ja/note3/chapter3.md' }
                ]
            }
        }
    }
};
