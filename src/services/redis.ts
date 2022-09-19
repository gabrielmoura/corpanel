/*
 *  Copyright (c) Gabriel Moura  2022
 *  Email: gabriel.blx32@gmail.com
 */

const Redis = require("ioredis");

const {REDIS_PORT, REDIS_HOST, REDIS_USERNAME, REDIS_PASS, REDIS_DB} = process.env;
export const redis = new Redis({
    port: REDIS_PORT,
    host: REDIS_HOST ?? "127.0.0.1",
    username: REDIS_USERNAME ?? "default",
    password: REDIS_PASS ?? null,
    db: REDIS_DB ?? 0, // Defaults to 0
});