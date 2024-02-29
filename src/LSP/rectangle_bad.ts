/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de rectángulo y cuadrado con mal diseño de LSP
 */

/**
 * @desc This class represents a rectangle
 */
class Rectangle {
  constructor(private width: number, private length: number) {
    this.width = width;
    this.length = length;
  }

  /**
   * @param width sets the width of the rectangle
   */
  public setWidth(width: number) {this.width = width;}

  /**
   * @param length sets the length of the rectangle
   */
  public setLength(length: number) {this.length = length;}

  /**
   * @returns the width of the rectangle
   */
  public getArea() {return this.width * this.length;}
}

/**
 * @desc This class represents a square
 */
class Square extends Rectangle {

  constructor(side: number) {super(side, side);}

/**
 * @param width sets the width of the square
 */
  public setWidth(width: number) {
	super.setWidth(width);
	super.setLength(width);
  }

  /**
   * @param length sets the length of the square
   */
  public setLength(length: number) {
	super.setWidth(length);
	super.setLength(length);
  }
}
