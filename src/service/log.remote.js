import request from '../util/request';
import qs from "querystring";

const url = window.localStorage.getItem('HERO_BOOK_SETTING_DATA_REMOTE_URL') || '/';

const get = (id) => request.post(url, qs.stringify({
    action: 'logs.get',
    payload: JSON.stringify({ id })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const add = (logInfo) => request.post(url, qs.stringify({
    action: 'logs.add',
    payload: JSON.stringify({ content: logInfo.content })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const del = (id) => request.post(url, qs.stringify({
    action: 'logs.del',
    payload: JSON.stringify({ id })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const upd = (id, logInfo) => request.post(url, qs.stringify({
    action: 'logs.upd',
    payload: JSON.stringify({ id, content: logInfo.content })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const all = () => request.post(url, qs.stringify({
    action: 'logs.all',
    payload: JSON.stringify({ })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

export default {
    get, add, del, upd, all
};