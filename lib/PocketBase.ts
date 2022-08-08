import PocketBase from 'pocketbase';

export const client = new PocketBase(process.env.HOST_BACKEND || 'http://localhost:8090');