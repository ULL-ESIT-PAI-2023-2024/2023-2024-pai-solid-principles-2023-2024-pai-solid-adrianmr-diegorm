

interface VehicleInterface {
  drive(): string;
  fly(): string;
}

class Car implements VehicleInterface {
  public drive() : string {return "Driving a car";}
  public fly() : string {return "A car can't fly";}
}

class Airplane implements VehicleInterface {
  public drive() : string {return "Flying an airplane";}
  public fly() : string {return "Flying an airplane";}
}
