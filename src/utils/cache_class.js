class CacheDB {
  #DATABASE_NAME;
  #DATABASE_VERSION;
  #DATABASE_STORE_NAME;
  #database;

  constructor(name, version, storeName) {
    this.#DATABASE_NAME = name;
    this.#DATABASE_VERSION = version;
    this.#DATABASE_STORE_NAME = storeName;
    this.#open();
  }

  #open() {
    const request = window.indexedDB.open(this.#DATABASE_NAME, this.#DATABASE_VERSION);

    request.onupgradeneeded = (event) => {
      this.#database = event.currentTarget.result;
      this.#database.createObjectStore(this.#DATABASE_STORE_NAME, {
        keyPath: "keyword",
      });
    };

    request.onerror = (event) => {
      console.log("failed db open", event);
    };

    request.onsuccess = (event) => {
      console.log(event);
      this.#database = request.result;
    };
  }

  #getObjectStore(transactionMode = "readwrite") {
    const transaction = this.#database.transaction([this.#DATABASE_STORE_NAME], transactionMode);
    const objectStore = transaction.objectStore(this.#DATABASE_STORE_NAME);
    return objectStore;
  }

  cache(data) {
    if (!this.#database) return;

    if (!data.data) {
      console.log("data undefined");
    }

    return new Promise((resolve, reject) => {
      const objectStore = this.#getObjectStore();
      const cachingRequest = objectStore.add(data);

      cachingRequest.onerror = () => {
        reject(new Error("failed to cache data"));
      };

      cachingRequest.onsuccess = (event) => {
        const result = event.target.result;
        if (!result) reject(new Error("failed to cache data"));
        resolve(event.target.result);
      };
    });
  }

  getCache(key) {
    if (!this.#database) return;

    return new Promise((resolve, reject) => {
      const objectStore = this.#getObjectStore();
      const getCacheRequest = objectStore.get(key);

      getCacheRequest.onerror = () => {
        reject(new Error("failed to get data"));
      };

      getCacheRequest.onsuccess = (event) => {
        const result = event.target.result;
        if (!result) reject(new Error("failed to get data"));
        resolve(event.target.result);
      };
    });
  }
}

export default CacheDB;
