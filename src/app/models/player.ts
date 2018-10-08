export class Player {
    id: number;
    color: string;
    score: number;

    constructor(json: Object = {}) {
        Object.assign(this, json);
    }
}
