import { Color } from "./stone";

export class Player {
    id: number;
    color: Color;
    score: number;

    constructor(json: Object = {}) {
        Object.assign(this, json);
    }
}
