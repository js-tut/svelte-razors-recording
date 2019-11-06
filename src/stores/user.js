import { writable } from "svelte/store";

const user = writable({ username: null, jwt: "1" });

export default user;
