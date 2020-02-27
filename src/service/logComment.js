import store from 'store/index';

const get = (id) => store.logCommentMessage.get(Number(id));

const add = (id, logCommentInfo) => store.logCommentMessage.add({...logCommentInfo, lid: id});

const del = (id) => store.logCommentMessage.delete(Number(id));

const upd = (id, logCommentInfo) => store.logCommentMessage.update(Number(id), logCommentInfo);

const all = (id) => store.logCommentMessage.where({ lid: id }).toArray().then(l => l.reverse());

export default {
    get, add, del, upd, all
}