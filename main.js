import { Viacel } from "./viecal.js";
import { Private } from "./privet.js";
import { suv } from "./suv.js";
import { truck } from "./truck.js";


let car = new Viacel(4, 25, "black");
console.log(car);
console.log(car.stringViacel());

//Private   SUV  truck//

let privet1 = new Private(4, 70, "black", "privet");
console.log(privet1);
console.log(privet1.newFunc());


let S_U_V = new suv("white", 4, "suv");
console.log(S_U_V);
console.log(S_U_V.get());


let truck1 = new truck(6, 1200, "blue", "truck");
console.log(truck1);
console.log(Viacel.volumeEngine([privet1, S_U_V, truck1]));
btn.addEventListener("click",addViecal);

function addViecal(){

    const newCar = {
        wheels: weelesViecal.value,
        volume: volumeViecal.value,
        color:colorViecal.value,
        type:chooseViecal.value
    }
    console.log(newCar);
    carsList.innerHTML += `<tr>
    <td>${newCar.type}</td>
    <td>${newCar.wheels}</td>
    <td>${newCar.volume}</td>
    <td>${newCar.color}</td>
   
    </tr>`
}

window.addViecal = addViecal;