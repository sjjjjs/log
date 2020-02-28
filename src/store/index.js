import Dexie from 'dexie';

const db = new Dexie('EfficientDatabase');

db.version(1).stores({
    logs: '++id, content, time'
});

db.version(2).stores({
    logComments: '++id, content, time, lid'
});

export default db;
window.db = db;