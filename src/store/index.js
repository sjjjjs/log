import Dexie from 'dexie';

const db = new Dexie('EfficientDatabase');

db.version(2).stores({
    logMessages: '++id, content, time',
    logCommentMessage: '++id, content, time, lid'
});

export default db;
window.db = db;