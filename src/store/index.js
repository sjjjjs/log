import Dexie from 'dexie';

const db = new Dexie('EfficientDatabase');

db.version(2).stores({
    logMessages: '++id, content, time'
});

export default db;
window.db = db;