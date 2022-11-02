import { htmlMinifierHook } from "$lib";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = htmlMinifierHook;