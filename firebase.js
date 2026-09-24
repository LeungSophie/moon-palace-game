import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  update,
  get,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHtT5t-X9R346t45sQiqwjgb3-eM7rI-U",
  authDomain: "moon-palace-game.firebaseapp.com",

  databaseURL:
    "https://moon-palace-game-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "moon-palace-game",
  storageBucket: "moon-palace-game.firebasestorage.app",
  messagingSenderId: "754673122220",
  appId: "1:754673122220:web:a878f86d0c0dc638421809"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {
  db,
  ref,
  set,
  update,
  get,
  onValue,
  remove
};
