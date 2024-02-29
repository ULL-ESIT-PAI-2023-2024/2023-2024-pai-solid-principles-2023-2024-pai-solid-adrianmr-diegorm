/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de libro con mal diseño de SRP
 */

/**
 * @desc This class represents a book
 */
class Book {

  /**
   * @desc This method saves the book to a file
   * @param fileName The name of the file to save the book to
   */
  saveToFile(fileName: string): void {
    // Save the book to a file
  }

  private title: string;
  private author: string;
  private description: string;
  private pages: number;
}
