/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

import {redis} from './redis';

export async function hasToken() {
    return redis.exists(`${process.env.APP_NAME}:token`) === 1;
}

export async function setToken(token: string, sec: number) {
    return redis.set(`${process.env.APP_NAME}:token`, token, 'ex', sec);
}

export async function getToken() {
    return redis.get(`${process.env.APP_NAME}:token`);
}

export function forgetToken() {
    return redis.del(`${process.env.APP_NAME}:token`) === 1;
}


export function hasCache(key: string) {
    return redis.exists(`${process.env.APP_NAME}:${key}`) === 1;
}

export function setCache(key: string, data: string, sec: number) {
    return redis.set(`${process.env.APP_NAME}:${key}`, data, 'ex', sec);
}

export function getCache(key: string) {
    return redis.get(`${process.env.APP_NAME}:${key}`);
}

export function forgetCache(key: string) {
    return redis.del(`${process.env.APP_NAME}:${key}`) === 1;
}
