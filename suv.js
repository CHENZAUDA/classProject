import { Viacel } from "./viecal.js";

export class suv extends Viacel {
    viacelName;
    constructor(color, numberOfWheels, _viacelName, volume) {
        super(color, numberOfWheels, volume)
        this.viacelName = _viacelName;
    }
    get() {
        return this.upperCase();
    }
    upperCase() {
        return `${this.viacelName}`.toUpperCase()
    }
};
