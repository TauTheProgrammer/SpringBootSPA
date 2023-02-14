import axios from "axios";
import { EmotionalRecord } from "../types";

export default class BaseRestService {
    private protocol: string;

    private url: string;

    private port: string;

    get fullUrl(): string {
        return `${this.protocol}://${this.url}:${this.port}`;
    }

    constructor() {
        this.protocol = "http";
        this.url = "localhost";
        this.port = "8080";
    }

    protected async get(path: string) {
        const ret = axios
            .get(this.fullUrl + path, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => {
                return response;
            });
    }

    protected async post(path: string, body: EmotionalRecord) {
        const ret = axios.post(this.fullUrl + path, body, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    }
}
