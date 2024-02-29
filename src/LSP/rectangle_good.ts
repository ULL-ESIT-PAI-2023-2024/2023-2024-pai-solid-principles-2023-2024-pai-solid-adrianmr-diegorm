/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de rectángulo y cuadrado con buen diseño de LSP
 */

/**
 * @desc This class represents a shape
 */
interface Shape {getArea: () => number;}

/**
 * @desc This class represents a rectangle
 */
class Rectangle implements Shape {
  constructor(private width: number,private length: number) {
	  this.width = width;
	  this.length = length;
  }
  /**
   * @returns the area of the rectangle
   */
  getArea(): number {return this.width * this.length;}
}

/**
 * @desc This class represents a square
 */
class Square implements Shape {
  constructor(private sizeOfSides: number) {
	  this.sizeOfSides = sizeOfSides
  }

  /**
   * @returns the area of the square
   */
  getArea(): number {
	  return this.sizeOfSides * this.sizeOfSides;
  }
}

