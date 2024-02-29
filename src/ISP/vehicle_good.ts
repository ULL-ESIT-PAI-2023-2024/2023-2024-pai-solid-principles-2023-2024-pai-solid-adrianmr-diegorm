


interface CarInterface {
  drive(): string;
}

interface AirplaneInterface {
  fly(): string;
}

class Car implements CarInterface {
  public drive() : string {return "Driving a car";}
}
class Airplane implements AirplaneInterface {    
  public fly() : string {return "Flying an airplane";}
}
class FutureCar implements AirplaneInterface, CarInterface { 
  public drive() : string {return "Driving a future car";}
  public fly() : string {return "Flying a future car";}
}