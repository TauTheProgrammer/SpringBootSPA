import { EmotionalRecord } from "../types";
import BaseRestService from "./BaseRestService";

export default class DataRestService extends BaseRestService {
    public async getSomething() {
        const response = await this.get("/test");
        return response;
    }

    public async postSomething(emotionalRecord: EmotionalRecord) {
        const response = await this.post("/journal", emotionalRecord);
        return response;
    }
}
