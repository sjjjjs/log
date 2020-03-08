import store from 'store/index';
import impl from './logComment.remote';

const curr = window.localStorage.getItem('HERO_BOOK_SETTING_DATA_SOURCE');

const get = (id) => store.logComments.get(Number(id));

const add = (id, logCommentInfo) => store.logComments.add({...logCommentInfo, lid: Number(id), time: new Date()});

const del = (id) => store.logComments.delete(Number(id));

const upd = (id, logCommentInfo) => store.logComments.update(Number(id), logCommentInfo);

const all = (id) => store.logComments.where({ lid: Number(id) }).toArray();

export default curr === '2' ? impl : {
    get, add, del, upd, all
}