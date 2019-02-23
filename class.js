/*
*
* Homework Assignment #13: Classes
*
 */
// Create a class called "Vehicle" and add methods that allow
// you to set the "Make", "Model", "Year,", and "Weight".
class Vehicle {
    constructor(make,model,year,weight){
                this.make = make;
                this.model = model;
                this.year = year;
                this.weight = weight;
                this.NeedsMaintenance = false;
                this.TripsSinceMaintenance = 0;
    }

}

//test
//console.log(new Vehicle("Honada","civic",2005,"1000kg"));
/*
Next create a subclass that inherits the properties of Vehicle class. Call this new subclass "Cars".
The Cars class should contain a method called "Drive" that sets the state of a boolean isDriving to True.
It should have another method called "Stop" that sets the value of isDriving to false.
*/
// Switching isDriving from true to false should increment the "TripsSinceMaintenance" counter.
// And when TripsSinceMaintenance exceeds 100, then the NeedsMaintenance boolean should be set to true.
// Add a "Repair" method to either class that resets the TripsSinceMaintenance to zero, and NeedsMaintenance to false.

class Cars extends Vehicle {

    constructor(make,model,year,weight) {
        super(make,model,year,weight);
        this.isDriving = false;
    }

    drive() {
        if (this.isDriving === true) {
            console.log("This car is on mode drive");
            return true;
        }
        this.isDriving = true;
        console.log("This Car set to drive true");
        return this.isDriving;
    }

    stop() {
        if (this.tripsSinceMaintenance === 100) {
            this.NeedsMaintenance = true;
            this.isDriving = false;
            this.isDriving = false;
            console.log(`This Car trip count is 100 so matananse status ${this.NeedsMaintenance}`);
            return false;
        }
        if (this.isDriving === false) {
            console.log("Car is already in stop mode");
            return false;
        }
        this.isDriving = false;
        this.tripsSinceMaintenance++;
        console.log(`This Car trip count ${this.tripsSinceMaintenance}`);
        return this.isDriving;

    }

    repair() {
        this.NeedsMaintenance = false;
        this.tripsSinceMaintenance = 0;
        console.log(`Need maintainable status ${this.NeedsMaintenance} no of trip set status ${this.tripsSinceMaintenance}`);
        return true;
    }
}

//Create 3 different cars, using your Cars class, and drive them all a different number of times.
//Then print out their values for Make, Model, Year, Weight, NeedsMaintenance, and TripsSinceMaintenance}
//console.log(new Cars("true").isDriving);
//console.log(new Cars("true").stop());
//console.log(new Cars().tripsSinceMaintenance);

/*let mycar = new Cars();
mycar.tripsSinceMaintenance = 100;
mycar.drive();
mycar.stop();
console.log(mycar.tripsSinceMaintenance);
console.log(mycar.repair());
//mycar.stop();
let myCars2 = new Cars();
myCars2.tripsSinceMaintenance = 50;
myCars2.drive();
myCars2.stop();
console.log("mycar2 trip " + myCars2.tripsSinceMaintenance);
console.log("mycar2 repair " + myCars2.repair());*/

/*
Extra Credit:
Create a Planes class that is also a subclass of Vehicle.
Add methods to the Planes class for Flying and Landing (similar to Driving and Stopping),
but different in one respect: Once the NeedsMaintenance boolean gets set to true,
any attempt at flight should be rejected (return false), and an error message should be
printed saying that the plane can't fly until it's repaired.
 */

class Planes extends Vehicle{
    constructor(make,model,year,weight){
        super(make,model,year,weight);
        this.isFlying = false;
    }
    flying(){
        if (this.tripsSinceMaintenance === 100){
            this.NeedsMaintenance = true;
            this.isFlying = false;
            console.log(`Plane trip status ${this.tripsSinceMaintenance} need maintainable and cannot fly`);
            return false;
        }
        if (this.NeedsMaintenance === true){
            console.log(`Plane can not fly reason need Maintainable ${this.NeedsMaintenance} `);
            return false;
        }
        console.log("Plane is flying");
        this.isFlying = true;
        return true;
    }
    landing(){
        if (this.isFlying === false){
            console.log(`Plane alredy landed`);
            return false;
        }
        this.tripsSinceMaintenance++;
        console.log(`Plane status landing and trip total ${this.tripsSinceMaintenance}`);
        return true;
    }
    repair(){
        if (this.isFlying === true){
            console.log("plans is flying need landing for repair.")
            return;
        }
        this.NeedsMaintenance = false;
        this.tripsSinceMaintenance = 0;
        console.log(`Plane maintainable status ${this.NeedsMaintenance} no of trip set status ${this.tripsSinceMaintenance}`);
    }
}

/*let boeing707 = new  Planes();
console.log("boeinh7070 " + boeing707.landing());
console.log("boeinh7070 " + boeing707.flying());
boeing707.tripsSinceMaintenance = 100;
console.log("boeinh7070 " + boeing707.flying());
boeing707.landing();
boeing707.repair();*/

//check code testing

function testVehicleClass(make,model,year,weight,noTrip,type){
    console.log("///////// \n");
    if (type === "Car"){
        let nameClass = new Cars(make,model,year,weight);
        console.log(` Car ${nameClass.make} \n Model ${nameClass.model} \n Year ${nameClass.year} \n Weight ${nameClass.weight} Kg`);
        nameClass.tripsSinceMaintenance = noTrip;
        nameClass.drive();
        nameClass.stop();
        nameClass.repair();
    }
    if (type === "Plane"){
        let nameClass = new Planes(make,model,year,weight);
        console.log(` Plane ${nameClass.make} \n Model ${nameClass.model} \n Year ${nameClass.year} \n Weight ${nameClass.weight} Kg`);
        nameClass.tripsSinceMaintenance = noTrip;
        nameClass.flying();
        nameClass.landing();
        nameClass.repair();
    }
    console.log("///////// \n");
}
let u1 = testVehicleClass("Honada","civic",2007,1500,34,"Car");
let u2 = testVehicleClass("Boeing707","Dream Liner",2009,2200,99,"Plane");
let u3 = testVehicleClass("Majda","Max-3",20014,1800,86,"Car");
let u4 = testVehicleClass("Boeing777","Jumbo",2002,2900,99,"Plane");

let arr = [u1,u2,u3,u4];

for(let i=0;i<arr.length;i++){
    arr[i];
}