import store from 'store/index';

const findMapByText = text => store
    .textToIdMap
    .where({text})
    .first(match => match)
    .catch(() => null);

const link = (text, lid) => store.textToIdMap.add({ text, lid });

export default {
    findMapByText,
    link
};