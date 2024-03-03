/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de buen diseño de DIP
 */

/**
 * @desc This class represents a multiply instruction
 */
interface Instruction {
  execute(firstOperand: number, secondOperand: number): number;
}

/**
 * @desc This class represents a multiply instruction
 */
class MultiplyInstruction implements Instruction {
  /**
   * @desc This method executes the multiply instruction
   * @param firstOperand The first operand of the multiplication
   * @param secondOperand The second operand of the multiplication
   * @returns The result of the multiplication
   */
  public execute(firstOperand: number, secondOperand: number): number {   
    return this.multiply(firstOperand, secondOperand);
  }
  /**
   * @param firstOperand The first operand of the multiplication
   * @param secondOperand The second operand of the multiplication
   * @returns The result of the multiplication
   */
  public multiply(firstOperand: number, secondOperand: number): number {
    return firstOperand * secondOperand;
  }
}