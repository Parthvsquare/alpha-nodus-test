import { atom } from "jotai";

export const userAuth = atom<boolean>(true);

export const tenantInput = atom<String>(import.meta.env.VITE_TENANT_DEV);
