const DATABASE_NAME = "SearchDB";
const DATABASE_VERSION = 1;
const DATABASE_STORE_NAME = "autoCompletedList";
const KEY_PATH = "keyword";

let database: IDBDatabase;

const openDatabase = () => {
  const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

  request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
    database = (event?.target as IDBRequest).result;
    database.createObjectStore(DATABASE_STORE_NAME, {
      keyPath: KEY_PATH,
    });
  };

  request.onerror = (error) => {
    console.log("failed db open", error);
  };

  request.onsuccess = () => {
    database = request.result;
  };
};

const getObjectStore = (transactionMode: IDBTransactionMode = "readwrite") => {
  const transaction = database.transaction([DATABASE_STORE_NAME], transactionMode);
  const objectStore = transaction.objectStore(DATABASE_STORE_NAME);
  return objectStore;
};

const cacheData = <T>(data: T) =>
  new Promise((resolve, reject) => {
    if (!database) {
      reject(new Error("the database is closed"));
    }

    const objectStore = getObjectStore();
    const cachingRequest = objectStore.add(data);

    cachingRequest.onerror = () => {
      reject(new Error("failed to cache data"));
    };

    cachingRequest.onsuccess = (event) => {
      const result = (event?.target as IDBRequest).result;
      if (!result) reject(new Error("failed to cache data"));
      resolve(result);
    };
  });

const getCacheData = <T>(key: string) =>
  new Promise<{ keyword: string; data: T }>((resolve, reject) => {
    if (!database) {
      reject(new Error("the database is closed"));
    }

    const objectStore = getObjectStore();
    const getCacheRequest = objectStore.get(key);

    getCacheRequest.onerror = () => {
      reject(new Error("failed to get data"));
    };

    getCacheRequest.onsuccess = (event) => {
      const result = (event?.target as IDBRequest).result;
      if (!result) reject(new Error("failed to get data"));
      resolve(result);
    };
  });

openDatabase();
export { cacheData, getCacheData };
