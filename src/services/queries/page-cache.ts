import {client } from '../redis/client';

const cacheRoutes = ['/about','/privacy','/auth/signin', '/auth/signup'];
export const getCachedPage = (route: string) => {
    if(cacheRoutes.includes(route)){
        return client.get("page_cache#"+route);
    }
    return null;
};


export const setCachedPage = (route: string, page: string) => {
    if(cacheRoutes.includes(route)){
        return client.set("page_cache#"+route, page, {EX: 2});
    }
};
