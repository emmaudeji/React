export const LocalStorageApi = () => {
  class localStorage {
    constructor() {
      this.store = new Map();
    }

    get length() {
      return this.store.size;
    }

    setItems = (...args) => {
      if (!args.length || args.length < 2) {
        throw new TypeError(`Expected 2 parameters but got ${args.length}`);
      }

      const [key, value] = args;
      this.store.set(String(key), String(value));
    };

    getItem = (...args) => {
      if (!args.length) {
        throw new TypeError(`Expected 1 parameter but got 0`);
      }
      const key = args[0];
      return this.store.get(key);
    };

    removeItem = (key) => {
      this.store.delete(key);
    };

    clear = (key) => {
      this.store.clear(key);
    };
  }

  // testing
  const storage = new localStorage();
  storage.setItems(() => {}, 1);
  const display = storage.getItem(() => {});

  return (
    <>
      <h1>This is the result '{display}'</h1>
    </>
  );
};
