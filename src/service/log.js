import store from 'store/index';
import impl from './log.remote';

const curr = window.localStorage.getItem('HERO_BOOK_SETTING_DATA_SOURCE');

const get = (id) => store.logs.get(Number(id));

const add = (logInfo) => store.logs.add({...logInfo, time: new Date()});

const del = (id) => store.logs.delete(Number(id));

const upd = (id, logInfo) => store.logs.update(Number(id), logInfo);

const all = () => store.logs.orderBy('time').toArray().then(l => l.reverse());

export default curr === '2' ? impl : {
    get, add, del, upd, all
}