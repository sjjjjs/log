import request from '../util/request';
import qs from "querystring";

const url = window.localStorage.getItem('HERO_BOOK_SETTING_DATA_REMOTE_URL') || '/';

const findMapByText = text => request.post(url, qs.stringify({
    action: 'textToIdMap.findMapByText',
    payload: JSON.stringify({ text })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const link = (text, lid) => request.post(url, qs.stringify({
    action: 'textToIdMap.link',
    payload: JSON.stringify({ text, lid })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const relink = (text, lid) => request.post(url, qs.stringify({
    action: 'textToIdMap.relink',
    payload: JSON.stringify({ text, lid })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

  export default {
    findMapByText,
    link,
    relink
};