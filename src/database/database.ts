import * as SQLite from "expo-sqlite";

let dbInstance: SQLite.SQLiteDatabase | null = null;

export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (dbInstance === null) {
    dbInstance = await SQLite.openDatabaseAsync("booklist.db");
    await createTables(dbInstance);
  }
  return dbInstance;
};

const createTables = async (db: SQLite.SQLiteDatabase): Promise<void> => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS books (
      id     INTEGER PRIMARY KEY AUTOINCREMENT,
      title  TEXT NOT NULL,
      author TEXT NOT NULL,
      year   INTEGER NOT NULL,
      genre  TEXT NOT NULL
    );
  `);
};
