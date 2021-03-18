export class Viacel {
    numberOfWheels;
    volume;
    color;
    constructor(number, _volume, _color) {
        this.numberOfWheels = number;
        this.volume = _volume;
        this.color = _color;
    }
    stringViacel() {
        return `there are ${this.numberOfWheels} of wheels and the volume is ${this.volume} cc's. the viacle color is ${this.color}`;
    }
    static volumeEngine(viacelArry) {
        let array = viacelArry.sort((a, b)=>{
            return b.volume - a.volume;
        });
        return array[0];
    }
};