import store from 'store/index';

const get = (id) => store.logs.get(Number(id));

const add = (logInfo) => store.logs.add(logInfo);

const del = (id) => store.logs.delete(Number(id));

const upd = (id, logInfo) => store.logs.update(Number(id), logInfo);

const all = () => store.logs.orderBy('time').toArray().then(l => l.reverse());

export default {
    get, add, del, upd, all
}