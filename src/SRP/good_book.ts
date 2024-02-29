/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Adrián Mora Rodríguez Diego Rodríguez Martín
 * @since Feb 27 2024
 * @desc Ejemplo de libro con buen diseño de SRP
 */

/**
 * @desc This class represents a book
 */
class Book {

  private title: string;
  private author: string;
  private description: string;
  private pages: number;
}

/**
 * @desc This class represents a persistence manager
 */
class Persistence {

  /**
   * @desc This method saves the book to a file
   * @param book The book to save
   */
  public saveToFile(book: Book): void {
    // some fs.write method 
  }
}
