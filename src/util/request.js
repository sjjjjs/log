import axios from "axios";

const instance = axios.create({
  timeout: 3000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "token": window.localStorage.getItem('HERO_BOOK_SETTING_DATA_REMOTE_TOKEN') || ''
  }
});

export default instance;