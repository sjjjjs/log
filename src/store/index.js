import Dexie from 'dexie';

const db = new Dexie('EfficientDatabase');

db.version(1).stores({
    logs: '++id, content, time'
});

db.version(2).stores({
    logComments: '++id, content, time, lid'
});

db.version(3).stores({
    textToIdMap: '++id, &text, lid'
});

export default db;

// import SyncClient from 'sync-client';
// // SyncClient is a subclass of Dexie

// const databaseName = 'testDB'; // The name for the indexedDB database
// const versions = [
//     {
//         version: 1,
//         stores: {
//           logs: '++id, content, time'
//         }
//     }, {
//         version: 2,
//         stores: {
//             logComments: '++id, content, time, lid'
//         }
//     }, {
//         version: 3,
//         stores: {
//             textToIdMap: '++id, &text, lid'
//         }
//     }
// ];

// const syncClient = new SyncClient(databaseName, versions, {

// });

// export default syncClient;
// window.syncClient = syncClient;

// syncClient.syncable.connect('sync_client_protocol', 'http://127.0.0.1:3000');
// syncClient.syncable.on('statusChanged', function (newStatus, url) {
//     console.log ("Sync Status changed: " + newStatus, url);
// });