/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de vehículos con buen diseño de LSP
 */

/**
 * @desc This class represents a motor vehicle
 */
interface MotorVehicle {
  startEngine(): void;
}

/**
 * @desc This class represents a car
 */
class Car implements MotorVehicle {
  /**
   * @desc This method starts the car engine
   */
  public startEngine(): void {
    console.log("Starting the car engine...");
    // Código para arrancar el motor del coche
  }
}

/**
 * @desc This class represents a motorcycle
 */
class Motorcycle implements MotorVehicle {
  /**
   * @desc This method starts the motorcycle engine
   */
  public startEngine(): void {
    console.log("Starting the motorcycle engine...");
    // Código para arrancar el motor de la motocicleta
  }
}

/**
 * @desc This class represents a vehicle without motor
 */
interface VehicleWithoutMotor {
  ride(): void;
}

/**
 * @desc This class represents a bicycle
 */
class Bicycle implements VehicleWithoutMotor {
  /**
   * @desc This method starts the bicycle engine
   */
  public ride(): void {
    console.log('Riding a bicycle');
  }
}

/**
 * @desc This function starts all the vehicles
 * @param vehicles The vehicles to start 
 */
function startAllVehicles(vehicles: MotorVehicle[]): void {
  vehicles.forEach(vehicle => {
    vehicle.startEngine();
  });
}
