/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de vehículos con mal diseño de LSP
 */

/**
 * @desc This class represents a vehicle
 */
interface Vehicle {
  startEngine(): void;
}

/**
 * @desc This class represents a car
 */
class Car implements Vehicle {
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
class Motorcycle implements Vehicle {
  /**
   * @desc This method starts the motorcycle engine
   */
  public startEngine(): void {
    console.log("Starting the motorcycle engine...");
    // Código para arrancar el motor de la motocicleta
  }
}

/**
 * @desc This class represents a bicycle
 */
class Bicycle implements Vehicle {
  /**
   * @desc This method starts the bicycle engine
   */
  public startEngine(): void {
    console.log("Bicycles don't have engines to start.");
    // Las bicicletas no tienen motor que arrancar
  }
}

/**
 * @desc This function starts all the vehicles
 * @param vehicles The vehicles to start
 */
function startAllVehicles(vehicles: Vehicle[]): void {
  vehicles.forEach(vehicle => {
    vehicle.startEngine();
  });
}
