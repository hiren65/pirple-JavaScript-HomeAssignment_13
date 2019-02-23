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

    constructor() {
        super(Vehicle);
        this.isDriving = false;
        this.tripsSinceMaintenance = 0;
        this.NeedsMaintenance = false;
    }

    drive() {
        if (this.isDriving === true) {
            console.log("This car is on mode drive");
            return;
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
            return;
        }
        if (this.isDriving === false) {
            console.log("Car is already in stop mode");
            return;
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
    }
}
//   Create 3 different cars, using your Cars class, and drive them all a different number of times.
// Then print out their values for Make, Model, Year, Weight, NeedsMaintenance, and TripsSinceMaintenance}
//console.log(new Cars("true").isDriving);
//console.log(new Cars("true").stop());
//console.log(new Cars().tripsSinceMaintenance);

let mycar = new Cars();
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
console.log("mycar2 repair " + myCars2.repair());