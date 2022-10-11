import Vehicle from './Vehicle.js';
import Car from './Car.js';
import Motorcycle from './Motorcycle.js';

const myVehicle = new Vehicle('Monocycle', 'red', 1);
myVehicle.logTypeAndProps();

const myCar = new Car('DeLorean DMC-12', 'silver', 4, 2);
myCar.logTypeAndProps();

const myMotorcyle = new Motorcycle('Kawasa­ki ZZR 250', 'yellow', 2, 250);
myMotorcyle.logTypeAndProps();
