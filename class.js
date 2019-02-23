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
console.log(new Vehicle("Honada","civic",2005,"1000kg"));
/*
Next create a subclass that inherits the properties of Vehicle class. Call this new subclass "Cars".
The Cars class should contain a method called "Drive" that sets the state of a boolean isDriving to True.
It should have another method called "Stop" that sets the value of isDriving to false.
 */
