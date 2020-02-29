import store from 'store/index';

const findMapByText = text => store
    .textToIdMap
    .where({text})
    .first(match => match)
    .catch(() => null);

const link = (text, lid) => store.textToIdMap.add({ text, lid });
const relink = (text, lid) => store.textToIdMap.where({ text }).first(item => store.textToIdMap.update(item.id, { lid }));

export default {
    findMapByText,
    link,
    relink
};