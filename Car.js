import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  constructor(name, color, nbWheels, lockDoors) {
    super(name, color, nbWheels);
    this.lockDoors = lockDoors;
  }

  logTypeAndProps() {
    super.logTypeAndProps();
    console.log(`Car specs ${super.getPropsString()} and ${this.lockDoors} lockDoors`);
  }
}

export default Car;