import { writable } from 'svelte/store';

export const myVal = writable(0);

myVal.subscribe(val => {
    console.log(val);
});
