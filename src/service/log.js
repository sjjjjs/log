import store from 'store/index';

const get = (id) => store.logMessages.get(Number(id));

const add = (logInfo) => store.logMessages.add(logInfo);

const del = (id) => store.logMessages.delete(Number(id));

const upd = (id, logInfo) => store.logMessages.update(Number(id), logInfo);

const all = () => store.logMessages.orderBy('time').toArray().then(l => l.reverse());

export default {
    get, add, del, upd, all
}