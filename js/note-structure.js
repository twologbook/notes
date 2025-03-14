// 笔记数据结构
const noteStructure = {
    'zh': {
        'notesDirectory': '学习笔记目录',
        'notes': {
            'note1': {
                title: '如何从会工作到会赚钱',
                chapters: [
                    { title: '第一章：阅读的艺术', path: 'content/zh/note1/chapter1.md' },
                    { title: '第二章：如何有效记笔记', path: 'content/zh/note1/chapter2.md' },
                    { title: '第三章：时间管理', path: 'content/zh/note1/chapter3.md' }
                ]
            },
            'note2': {
                title: '人类简史',
                chapters: [
                    { title: '第一章：人类的起源', path: 'content/zh/note2/chapter1.md' },
                    { title: '第二章：农业革命', path: 'content/zh/note2/chapter2.md' },
                    { title: '第三章：工业革命', path: 'content/zh/note2/chapter3.md' }
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
                    { title: '二：多维思维', path: 'content/zh/note4/chapter2.md' },
                    { title: '第三章：工业革命', path: 'content/zh/note4/chapter3.md' }
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
                    { title: 'Chapter 1: The Art of Reading', path: 'content/en/note1/chapter1.md' },
                    { title: 'Chapter 2: Effective Note-Taking', path: 'content/en/note1/chapter2.md' },
                    { title: 'Chapter 3: Time Management', path: 'content/en/note1/chapter3.md' }
                ]
            },
            'note2': {
                title: 'Sapiens: A Brief History of Humankind',
                chapters: [
                    { title: 'Chapter 1: The Origin of Humans', path: 'content/en/note2/chapter1.md' },
                    { title: 'Chapter 2: The Agricultural Revolution', path: 'content/en/note2/chapter2.md' },
                    { title: 'Chapter 3: The Industrial Revolution', path: 'content/en/note2/chapter3.md' }
                ]
            },
            'note3': {
                title: 'Simplifying Workflows with Mauns',
                chapters: [
                    { title: 'Chapter 1: Previous Workflow', path: 'content/en/note3/chapter1.md' },
                    { title: 'Chapter 2: Desired Improvements', path: 'content/en/note3/chapter2.md' },
                    { title: 'Chapter 3: Task Breakdown Before Using Mauns', path: 'content/en/note3/chapter3.md' }
                ]
            }
        }
    },
    'ja': {
        'notesDirectory': '学習ノート一覧',
        'notes': {
            'note1': {
                title: '働ける状態から稼げる状態になるまで',
                chapters: [
                    { title: '第1章：読書の技術', path: 'content/ja/note1/chapter1.md' },
                    { title: '第2章：効果的なメモの取り方', path: 'content/ja/note1/chapter2.md' },
                    { title: '第3章：時間管理', path: 'content/ja/note1/chapter3.md' }
                ]
            },
            'note2': {
                title: 'サピエンス全史',
                chapters: [
                    { title: '第1章：人類の起源', path: 'content/ja/note2/chapter1.md' },
                    { title: '第2章：農業革命', path: 'content/ja/note2/chapter2.md' },
                    { title: '第3章：産業革命', path: 'content/ja/note2/chapter3.md' }
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
