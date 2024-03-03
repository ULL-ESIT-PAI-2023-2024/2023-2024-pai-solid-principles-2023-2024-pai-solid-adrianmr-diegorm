/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de mal diseño de DIP
 */

/**
 * @desc This class represents a multiply instruction
 */
class MultiplyInstruction {
  /**
   * @param firstOperand The first operand of the multiplication
   * @param secondOperand The second operand of the multiplication
   * @returns The result of the multiplication
   */
  public multiply(firstOperand: number, secondOperand: number): number {
    return firstOperand * secondOperand;
  }
}

/**
 * @desc This class represents an add instruction
 */
class AddInstruction {
  /**
   * @param firstOperand The first operand of the addition
   * @param secondOperand The second operand of the addition 
   * @returns The result of the addition 
   */
  public add(firstOperand: number, secondOperand: number): number {
    return firstOperand + secondOperand;
  }
}

/**
 * @desc This class represents an arithmetic logic unit
 */
class ArithmeticLogicUnit {
  private multiplyInstruction: MultiplyInstruction;
  private addInstruction: AddInstruction;
}
