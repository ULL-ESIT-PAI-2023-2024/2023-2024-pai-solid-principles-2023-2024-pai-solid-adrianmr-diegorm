/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de transporte con mal diseño de OCP
 */

/**
 * @desc This class represents a transportation
 */
class Transportation {
  constructor(private transporter: string, private volume: number) {
	this.transporter = transporter;
	this.volume = volume;
  }

  /**
   * @desc This method calculates the price of the transportation
   * @returns The price of the transportation
   */
  calculatePrice(): number {
	if (this.transporter == 'Truck') {
      let TRUCK_PRICE = 500;
  	  return (TRUCK_PRICE * this.volume);  
	} else if (this.transporter == 'Ship') {
      let SHIP_PRICE = 300;
  	  return (SHIP_PRICE * this.volume);
	}
	return 0;
  }
}