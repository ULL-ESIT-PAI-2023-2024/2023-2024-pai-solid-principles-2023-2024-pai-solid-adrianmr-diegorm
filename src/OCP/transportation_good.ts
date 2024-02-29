/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de transporte con buen diseño de OCP
 */

/**
 * @desc This class represents a transportation
 */
interface Transporter {
  type: string;

  calculatePrice(): number;
}

/**
 * @desc This class represents a truck
 */
class Ship implements Transporter {
  public type: string

  constructor() { this.type = 'Ship' }

  /**
   * @returns The price of the transportation
   */
  calculatePrice() {
	return 300;
  }
}

/**
 * @desc This class represents a truck
 */
class Truck implements Transporter {
  public type: string
  constructor() {
    this.type = 'Truck'
  }

  /**
   * @desc This method calculates the price of the transportation
   * @returns The price of the transportation
   */
  calculatePrice() {
    return 500;
  }
}

/**
 * @desc This class represents a plane
 */
class Plane implements Transporter {
  public type: string
  constructor() {
    this.type = 'Plane'
  }

  /**
   * @desc This method calculates the price of the transportation
   * @returns The price of the transportation
   */
  calculatePrice() {
    return 1000;
  }
}

/**
 * @desc This class represents a transportation
 */
class Transportation {
  constructor(private transporter: Transporter, private volume: number) {
    this.transporter = transporter;
    this.volume = volume;
  }

  /**
   * @desc This method calculates the price of the transportation
   * @returns The price of the transportation
   */
  calculatePrice() {
    return this.transporter.calculatePrice() * this.volume;
  }
}