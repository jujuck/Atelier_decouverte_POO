import Vehicle from "./Vehicle.js";

class Motorcycle extends Vehicle {
  constructor(name, color, nbWheels, horsePower) {
    super(name, color, nbWheels);
    this.horsePower = horsePower;
  }

  logTypeAndProps() {
    super.logTypeAndProps();
    console.log(
      `Moto specs ${super.getPropsString()} and ${this.horsePower} horsePower`
    );
  }
}

export default Motorcycle;
