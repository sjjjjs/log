import Dexie from 'dexie';

const db = new Dexie('EfficientDatabase');

db.version(1).stores({
    friends: '++id, name, age'
});

export default db;