import { writable } from "svelte/store";

const globalStore = writable({
  sidebar: false,
  cart: false,
  alert: false
});

const store = {
  subscribe: globalStore.subscribe
};

export default store;
