// Copyright (c) 2019 Shellyl_N and Authors
// license: ISC
// https://github.com/shellyln



export const boardStyle =
`/* per-board customized styles */
/*
.KanbanBoardView-sticky-note {width: 200px}
.KanbanBoardView-header-cell-task-statuses {min-width: 210px}
table.KanbanBoardView-board tbody th {
    padding: 10px;
    white-space: nowrap;
}
*/
table.KanbanBoardView-board thead th.status-backlog {
    background-color: var(--weak-header-bg-color);
}
table.KanbanBoardView-board td.status-backlog {
    background-color: var(--weak-data-bg-color);
}
table.KanbanBoardView-board thead th.status-done {
    background-color: var(--weak-header-bg-color);
}
table.KanbanBoardView-board td.status-done {
    background-color: var(--weak-data-bg-color);
}
.team-or-story-team-b .KanbanBoardView-sticky-note {
    background-color: var(--sticky-blue-color);
}
.status-done .KanbanBoardView-sticky-note {
    background-color: var(--sticky-green-color);
}
.KanbanBoardView-sticky-tags .tag-bug {
    color: white;
    background-color: red;
}
.KanbanBoardView-sticky-tags .tag-ok {
    color: white;
    background-color: green;
}
.KanbanBoardView-sticky-tags .tag-NG {
    color: white;
    background-color: #e91e63;
}
.KanbanBoardView-sticky-tags .tag-PR {
    color: white;
    background-color: purple;
}
.KanbanBoardView-sticky-tags .tag-rejected {
    color: white;
    background-color: #990000;
}
.KanbanBoardView-sticky-tags .tag-pending {
    color: black;
    background-color: #ff9900;
}
.KanbanBoardView-sticky-tags .tag-merged {
    color: white;
    background-color: #006666;
}
.KanbanBoardView-sticky-tags .tag-critical {
    color: white;
    background-color: red;
}
.KanbanBoardView-sticky-tags .tag-high {
    color: white;
    background-color: #ff5522;
}
.KanbanBoardView-sticky-tags .tag-moderate {
    color: black;
    background-color: #ffcc00;
}
.KanbanBoardView-sticky-tags .tag-low {
    color: black;
    background-color: #cc9900;
}
.KanbanBoardView-sticky-tags .tag-star {
    color: inherit;
    background-color: inherit;
}
`;


export const calendarStyle =
`/* per-board customized styles */
div.CalendarView-item-chip.status-done {
    background-color: var(--sticky-green-color);
}
`;


export const boardNote =
`# This is a board note.
* Markdown syntax is available.
* Go [Editor](#/edit/) to edit this note.`;


export const initialData = {
    "boards": [{
        "type": "kanbanBoard",
        "name": "Welcome Board",
        "taskStatuses": [{
            "value": "Backlog",
            "caption": "🛌 Backlog",
            "className": "status-backlog"
        }, {
            "value": "ToDo",
            "caption": "📯 ToDo",
            "className": "status-todo"
        }, {
            "value": "InProgress",
            "caption": "⛏ InProgress",
            "className": "status-inprogress"
        }, {
            "value": "Staging",
            "caption": "📦 Staging",
            "className": "status-staging"
        }, {
            "value": "Done",
            "caption": "🎉 Done",
            "className": "status-done",
            "completed": true
        }],
        "teamOrStories": [{
            "value": "Mert Ünsal",
            "caption": "Mert Ünsal",
            "className": "team-or-story-team-a"
        }, {
            "value": "Teyfik Avkan",
            "caption": "Teyfik Avkan",
            "className": "team-or-story-team-b"
        }, {
            "value": "Gözde Erdoğan",
            "caption": "Gözde Erdoğan",
            "className": "team-or-story-team-c"
        }, {
            "value": "Enes Ağaoğlu",
            "caption": "Enes Ağaoğlu",
            "className": "team-or-story-team-c"
        }, {
            "value": "Ömer Çelik",
            "caption": "Ömer Çelik",
            "className": "team-or-story-team-c"
        }],
        "tags": [],
        "displayBarcode": true,
        "displayTaskName": true,
        "displayFlags": true,
        "displayTags": true,
        "preferArchive": false,
        "boardStyle": boardStyle,
        "calendarStyle": calendarStyle,
        "boardNote": "",
    }],
    "records": [{
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "* Yarışmayı Kazanmamız Gerek!!!",
        "barcode": "",
        "taskName": "Task1",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Mert Ünsal",
        "taskStatus": "Backlog"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*Kesinlikle Yarışmayı Kazanmamız Gerek!!!",
        "barcode": "",
        "taskName": "Task2",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Mert Ünsal",
        "taskStatus": "Done"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*X Tasarımı Yapılacak",
        "barcode": "",
        "taskName": "Task3",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Mert Ünsal",
        "taskStatus": "ToDo"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*X Tasarımı Yapılacak",
        "barcode": "",
        "taskName": "Task4",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Teyfik Avkan",
        "taskStatus": "InProgress"
    }, {
        "type": "kanban",
        "dueDate": "2030-01-01",
        "description":
            "# Örnek bir task!\n" +
            "*Y Tasarımı Yapılacak",
        "barcode": "12345",
        "taskName": "Task5",
        "flags": ["Marked"],
        // "tags": ["PR", "bug", "ok", "NG", "rejected", "pending", "merged", "critical", "high", "moderate", "low", "⭐⭐⭐"],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Teyfik Avkan",
        "taskStatus": "Staging"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*Toplantı Yapılacak",
        "barcode": "",
        "taskName": "Task6",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Gözde Erdoğan",
        "taskStatus": "Backlog"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*Chat eklenecek",
        "barcode": "",
        "taskName": "Task7",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Gözde Erdoğan",
        "taskStatus": "Done"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*Mail eklenecek",
        "barcode": "",
        "taskName": "Task8",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Enes Ağaoğlu",
        "taskStatus": "ToDo"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*Login eklenecek",
        "barcode": "",
        "taskName": "Task10",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Enes Ağaoğlu",
        "taskStatus": "Done"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "*Profil eklenecek",
        "barcode": "",
        "taskName": "Task0",
        "flags": [],
        //"tags": ["ok", "merged", "v0.0.1", "feature-something", "#1", "#2"],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Teyfik Avkan",
        "taskStatus": "Done"
    }, {
        "type": "kanban",
        "dueDate": "2030-01-01",
        "description":
            "# Örnek bir task!\n" +
            "*Exit eklenecek",
        "barcode": "",
        "taskName": "Task9",
        "flags": ["Archived"],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Teyfik Avkan",
        "taskStatus": "Backlog"
    },{
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "* Yarışmayı Kazanmamız Gerek!!!",
        "barcode": "",
        "taskName": "Task13",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Ömer Çelik",
        "taskStatus": "Backlog"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "* Yarışmayı Kazanmamız Gerek!!!",
        "barcode": "",
        "taskName": "Task11",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Ömer Çelik",
        "taskStatus": "InProgress"
    }, {
        "type": "kanban",
        "dueDate": "",
        "description":
            "# Örnek bir task!\n" +
            "* Yarışmayı Kazanmamız Gerek!!!",
        "barcode": "",
        "taskName": "Task12",
        "flags": [],
        "tags": [],
        "boardId": "",
        "teamOrStory": "Ömer Çelik",
        "taskStatus": "ToDo"
    }]
}
