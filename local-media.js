const DB_NAME = "moonPalaceLocal";
const DB_VERSION = 1;
const PHOTO_STORE = "teamPhotos";

function openLocalDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE);
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}


export async function saveTeamPhoto(teamKey, file) {
  const db = await openLocalDB();

  return new Promise((resolve, reject) => {
    const transaction =
      db.transaction(PHOTO_STORE, "readwrite");

    const store =
      transaction.objectStore(PHOTO_STORE);

    const request =
      store.put(file, teamKey);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}


export async function getTeamPhoto(teamKey) {
  const db = await openLocalDB();

  return new Promise((resolve, reject) => {
    const transaction =
      db.transaction(PHOTO_STORE, "readonly");

    const store =
      transaction.objectStore(PHOTO_STORE);

    const request =
      store.get(teamKey);

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}


export async function removeTeamPhoto(teamKey) {
  const db = await openLocalDB();

  return new Promise((resolve, reject) => {
    const transaction =
      db.transaction(PHOTO_STORE, "readwrite");

    const store =
      transaction.objectStore(PHOTO_STORE);

    const request =
      store.delete(teamKey);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}


export async function clearAllTeamPhotos() {
  const db = await openLocalDB();

  return new Promise((resolve, reject) => {
    const transaction =
      db.transaction(PHOTO_STORE, "readwrite");

    const store =
      transaction.objectStore(PHOTO_STORE);

    const request =
      store.clear();

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}
