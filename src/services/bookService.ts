import { getDatabase } from "../database/database";
import { Book, NewBook } from "../types/book";

export const bookService = {
  //CREATE
  async create(book: NewBook): Promise<number> {
    const db = await getDatabase();
    const result = await db.runAsync(
      "INSERT INTO books (title, author, year, genre) VALUES (?, ?, ?, ?)",
      [book.title, book.author, parseInt(book.year, 10), book.genre],
    );
    return result.lastInsertRowId;
  },

  //READ (ALL)
  async getAll(): Promise<Book[]> {
    const db = await getDatabase();
    const books = await db.getAllAsync<Book>(
      "SELECT * FROM books ORDER BY title ASC",
    );
    return books;
  },

  //READ (BY ID)
  async getById(id: number): Promise<Book | null> {
    const db = await getDatabase();
    const book = await db.getFirstAsync<Book>(
      "SELECT * FROM books WHERE id = ?",
      [id],
    );
    return book ?? null;
  },
};
