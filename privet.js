import { Viacel } from "./viecal.js";

export class Private extends Viacel {
    viacelName;
    constructor(numberOfWheels, volume, color, viacelName) {
        super(numberOfWheels, volume, color);
        this.viacelName = viacelName;
    }

    newFunc() {
        return `${super.stringViacel()} and the viacel name are ${this.viacelName}`
    }
};