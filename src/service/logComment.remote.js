import request from '../util/request';
import qs from "querystring";

const url = window.localStorage.getItem('HERO_BOOK_SETTING_DATA_REMOTE_URL') || '/';

const get = (id) => request.post(url, qs.stringify({
    action: 'logComments.get',
    payload: JSON.stringify({ id })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const add = (id, logCommentInfo) => request.post(url, qs.stringify({
    action: 'logComments.add',
    payload: JSON.stringify({ content: logCommentInfo.content, lid: id })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const del = (id) => request.post(url, qs.stringify({
    action: 'logComments.del',
    payload: JSON.stringify({ id })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const upd = (id, logCommentInfo) => request.post(url, qs.stringify({
    action: 'logComments.upd',
    payload: JSON.stringify({ id, content: logCommentInfo.content })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

const all = (lid) => request.post(url, qs.stringify({
    action: 'logComments.all',
    payload: JSON.stringify({ lid })
  })).then(response => response.data).then(res => {
    if (res.code === 0) return res.data;
    return null;
  }).catch(err => null);

export default {
    get, add, del, upd, all
};