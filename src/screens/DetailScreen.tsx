import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { detailStyles, COLORS } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { Book } from "../types/book";
import { bookService } from "../services/bookService";

type Props = ScreenProps<"Detail">;

const getGenreColor = (genre: string): string => {
  const g = genre.toLowerCase();
  if (g.includes("program") || g.includes("tech")) return COLORS.badgeProgramming;
  if (g.includes("self") || g.includes("personal")) return COLORS.badgeSelfHelp;
  if (g.includes("science") || g.includes("ciencia")) return COLORS.badgeScience;
  if (g.includes("history") || g.includes("historia")) return COLORS.badgeHistory;
  return COLORS.badgeDefault;
};

export default function DetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const [book, setBook] = useState<Book | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadBook();
    }, []),
  );

  const loadBook = async (): Promise<void> => {
    try {
      const data = await bookService.getById(id);
      if (data === null) {
        Alert.alert("Error", "Libro no encontrado");
        navigation.goBack();
        return;
      }
      setBook(data);
    } catch (error) {
      Alert.alert("Error", "No se pudo cargar el detalle del libro");
      console.error(error);
    }
  };

  if (book === null) {
    return (
      <View style={detailStyles.container}>
        <Text style={detailStyles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={detailStyles.container}>
      <View style={detailStyles.card}>
        <Text style={detailStyles.title}>{book.title}</Text>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Autor</Text>
          <Text style={detailStyles.value}>{book.author}</Text>
        </View>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Año</Text>
          <Text style={detailStyles.value}>{book.year}</Text>
        </View>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Género</Text>
          <View
            style={[
              detailStyles.genreBadge,
              { backgroundColor: getGenreColor(book.genre) },
            ]}
          >
            <Text style={detailStyles.genreBadgeText}>{book.genre}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
