// PUBLIC API

import axios, {AxiosInstance, AxiosPromise} from 'axios';
import {TodoItem} from "./types";

/**
 * Базовый класс для API
 */
class API {
    private static instance: API;

    private _axios: AxiosInstance;

    public constructor(jwt: string) {
        this._axios = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            headers: {
                'Authorization': `Bearer ${jwt}`,
            },
        });
    }

    public static getInstance(jwt: string = '') {
        if (!this.instance) {
            this.instance = new this(jwt);
        }

        return this.instance;
    }

    getTodos = (): AxiosPromise<TodoItem[]> => {
        return this._axios.get('/todos');
    }
}

export default API;
