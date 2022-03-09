//  Library
import { writable } from "svelte/store";

//  ---------------------------------------
export const highlight = writable<string>()
//  ---------------------------------------

export const setHovering = (language: string) => highlight.set(language);
export const clearHovering = () => highlight.set(null);