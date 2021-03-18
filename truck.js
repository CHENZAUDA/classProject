import { Viacel } from "./viecal.js";

export class truck extends Viacel {
    viacelName;
    constructor(numberOfWheels, volume, color, viacel_Name) {
        super(numberOfWheels, volume, color);
        this.viacelName = viacel_Name;
    }
};