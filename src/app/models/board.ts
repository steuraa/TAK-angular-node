import { Player } from "./player";

export class Board {
    id: number;
    players: Array<Player>;
    tiles: Array<Object>;

    constructor(json: Object = {}) {
        Object.assign(this, json);
    }
}
