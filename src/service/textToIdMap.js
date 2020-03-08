import store from 'store/index';
import impl from './textToIdMap.remote';

const curr = window.localStorage.getItem('HERO_BOOK_SETTING_DATA_SOURCE');

const findMapByText = text => store
    .textToIdMap
    .where({text})
    .first(match => match)
    .catch(() => null);

const link = (text, lid) => store.textToIdMap.add({ text, lid });
const relink = (text, lid) => store.textToIdMap.where({ text }).first(item => store.textToIdMap.update(item.id, { lid }));

export default  curr === '2' ? impl : {
    findMapByText,
    link,
    relink
};