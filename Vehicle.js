class Vehicle {
  constructor(name, color, nbWheels) {
    this.name = name;
    this.color = color;
    this.nbWheels = nbWheels;
  }

  getPropsString() {
    return `${this.name} is ${this.color} and have ${this.nbWheels} wheels`;
  }

  logTypeAndProps() {
    console.log(`Vehicules specs : ${this.getPropsString()}`);
  }
}

export default Vehicle;