import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { listStyles, COLORS } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { Book } from "../types/book";
import { bookService } from "../services/bookService";

type Props = ScreenProps<"List">;

const getGenreColor = (genre: string): string => {
  const g = genre.toLowerCase();
  if (g.includes("program") || g.includes("tech")) return COLORS.badgeProgramming;
  if (g.includes("self") || g.includes("personal")) return COLORS.badgeSelfHelp;
  if (g.includes("science") || g.includes("ciencia")) return COLORS.badgeScience;
  if (g.includes("history") || g.includes("historia")) return COLORS.badgeHistory;
  return COLORS.badgeDefault;
};

export const ListScreen = ({ navigation }: Props) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  
  useFocusEffect(
    useCallback(() => {
      loadBooks();
    }, []),
  );

  const loadBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await bookService.getAll();
      setBooks(data);
    } catch (error) {
      Alert.alert("Error", "No se pudieron cargar los libros");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = books.filter((book) => {
    const query = searchText.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  });

  const counterLabel = searchText
    ? `${filteredBooks.length} resultado${filteredBooks.length !== 1 ? "s" : ""} para "${searchText}"`
    : `${books.length} libro${books.length !== 1 ? "s" : ""} en tu biblioteca`;

  return (
    <View style={listStyles.container}>
      {/* Search bar */}
      <View style={listStyles.searchContainer}>
        <TextInput
          style={listStyles.searchInput}
          placeholder="🔍 Buscar por título o autor..."
          value={searchText}
          onChangeText={setSearchText}
          clearButtonMode="while-editing"
        />
        <Text style={listStyles.counterText}>{counterLabel}</Text>
      </View>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={listStyles.list}
        ListEmptyComponent={
          <View>
            <Text style={listStyles.emptyText}>
              {loading
                ? "Cargando..."
                : searchText
                ? "No se encontraron libros"
                : "Todavía no hay libros. ¡Agrega el primero!"}
            </Text>
            {searchText !== "" && !loading && (
              <Text style={listStyles.emptySubText}>
                Los otros {books.length} libro{books.length !== 1 ? "s" : ""} están
                ocultos mientras buscas
              </Text>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={listStyles.card}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          >
            <Text style={listStyles.cardTitle}>{item.title}</Text>
            <Text style={listStyles.cardAuthor}>por {item.author}</Text>
            <View style={listStyles.badgeRow}>
              <View style={[listStyles.badge, { backgroundColor: COLORS.badgeDefault }]}>
                <Text style={listStyles.badgeText}>{item.year}</Text>
              </View>
              <View
                style={[
                  listStyles.badge,
                  { backgroundColor: getGenreColor(item.genre) },
                ]}
              >
                <Text style={listStyles.badgeText}>{item.genre}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={listStyles.fab}
        onPress={() => navigation.navigate("AddBook")}
      >
        <Text style={listStyles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
