import { deleteToken, getToken } from "./localStorage";

function parseJSON(response: any) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText) as any;
    error.response = response;
    throw error;
}

class Request {
    defaultOptions: {
        headers: {
            Authorization?: string;
        };
    };
    constructor() {
        this.defaultOptions = {
            headers: {},
        };
    }

    public setAuthorizationToken(token: string | null) {
        if (token) {
            this.defaultOptions.headers.Authorization = token;
        }
    }

    public deleteAuthorizationToken() {
        this.defaultOptions.headers = {};
        deleteToken();
    }

    private checkOldToken() {
        const token = getToken();
        const originalToken = this.defaultOptions.headers.Authorization;
        if (!originalToken && !token) return;
        if (originalToken !== `${token}`) {
            this.deleteAuthorizationToken();
            return window.location.reload();
        }
    }

    private normalizeUrl(url: string) {
        if (!url || url.length === 0) return url;
        return url[0] === "/" ? url.slice(1) : url;
    }

    // HTTP methods
    get(url: string, options: any = {}) {
        this.checkOldToken();
        url = this.normalizeUrl(url);
        return fetch(`${process.env.REACT_APP_SERVER_URL}/${url}`, {
            ...options,
            ...this.defaultOptions,
            method: "GET",
        })
            .then(checkStatus)
            .then(parseJSON);
    }
    post(url: string, options: any = {}) {
        this.checkOldToken();
        url = this.normalizeUrl(url);
        return fetch(`${process.env.REACT_APP_SERVER_URL}/${url}`, {
            ...options,
            ...this.defaultOptions,
            method: "POST",
        })
            .then(checkStatus)
            .then(parseJSON);
    }
    put(url: string, options: any = {}) {
        this.checkOldToken();
        url = this.normalizeUrl(url);
        return fetch(`${process.env.REACT_APP_SERVER_URL}/${url}`, {
            ...options,
            ...this.defaultOptions,
            method: "PUT",
        })
            .then(checkStatus)
            .then(parseJSON);
    }
    delete(url: string, options: any = {}) {
        this.checkOldToken();
        url = this.normalizeUrl(url);
        return fetch(`${process.env.REACT_APP_SERVER_URL}/${url}`, {
            ...options,
            ...this.defaultOptions,
            method: "DELETE",
        })
            .then(checkStatus)
            .then(parseJSON);
    }
}

const request = new Request();

export default request;
