import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { formStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { NewBook } from "../types/book";
import { bookService } from "../services/bookService";

type Props = ScreenProps<"AddBook">;

interface FormErrors {
  title?: string;
  author?: string;
  year?: string;
  genre?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

export const AddBookScreen = ({ navigation }: Props) => {
  const [form, setForm] = useState<NewBook>({
    title: "",
    author: "",
    year: "",
    genre: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [saving, setSaving] = useState<boolean>(false);

  const handleInputChange = (key: keyof NewBook, value: string) => {
    setForm({ ...form, [key]: value });
    if (errors[key]) {
      setErrors({ ...errors, [key]: undefined });
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (form.title.trim() === "") {
      newErrors.title = "El título es obligatorio";
    }
    if (form.author.trim() === "") {
      newErrors.author = "El autor es obligatorio";
    }
    if (form.genre.trim() === "") {
      newErrors.genre = "El género es obligatorio";
    }

    const yearNum = parseInt(form.year, 10);
    if (form.year.trim() === "") {
      newErrors.year = "El año es obligatorio";
    } else if (isNaN(yearNum) || yearNum < 1000 || yearNum > CURRENT_YEAR) {
      newErrors.year = `Ingresa un año válido entre 1000 y ${CURRENT_YEAR}`;
    }

    return newErrors;
  };

  const handleSave = async (): Promise<void> => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Alert.alert(
        "Campos incompletos",
        "Por favor, completa todos los campos correctamente.",
      );
      return;
    }

    try {
      setSaving(true);
      await bookService.create(form);
      Alert.alert("Éxito", "¡Libro guardado en tu biblioteca!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el libro. Intenta de nuevo.");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={formStyles.container}
        contentContainerStyle={formStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Hero section */}
        <Text style={formStyles.heroTitle}>Agrega un libro a{"\n"}tu biblioteca</Text>
        <Text style={formStyles.heroSubtitle}>Completa la información a continuación</Text>

        {/* TITLE */}
        <Text style={formStyles.label}>
          Título <Text style={formStyles.required}>*</Text>
        </Text>
        <TextInput
          style={[formStyles.input, errors.title ? formStyles.inputError : null]}
          value={form.title}
          onChangeText={(v) => handleInputChange("title", v)}
          placeholder="Clean Code"
          maxLength={120}
        />
        {errors.title ? (
          <Text style={formStyles.errorText}>{errors.title}</Text>
        ) : null}

        {/* AUTHOR */}
        <Text style={formStyles.label}>
          Autor <Text style={formStyles.required}>*</Text>
        </Text>
        <TextInput
          style={[formStyles.input, errors.author ? formStyles.inputError : null]}
          value={form.author}
          onChangeText={(v) => handleInputChange("author", v)}
          placeholder="Robert C. Martin"
          maxLength={100}
        />
        {errors.author ? (
          <Text style={formStyles.errorText}>{errors.author}</Text>
        ) : null}

        {/* YEAR */}
        <Text style={formStyles.label}>
          Año <Text style={formStyles.required}>*</Text>
        </Text>
        <TextInput
          style={[formStyles.input, errors.year ? formStyles.inputError : null]}
          value={form.year}
          onChangeText={(v) => handleInputChange("year", v)}
          placeholder="2008"
          keyboardType="numeric"
          maxLength={4}
        />
        {errors.year ? (
          <Text style={formStyles.errorText}>{errors.year}</Text>
        ) : null}

        {/* GENRE */}
        <Text style={formStyles.label}>
          Género <Text style={formStyles.required}>*</Text>
        </Text>
        <TextInput
          style={[formStyles.input, errors.genre ? formStyles.inputError : null]}
          value={form.genre}
          onChangeText={(v) => handleInputChange("genre", v)}
          placeholder="Programming"
          maxLength={60}
        />
        {errors.genre ? (
          <Text style={formStyles.errorText}>{errors.genre}</Text>
        ) : null}

        {/* Save button */}
        <TouchableOpacity
          style={[
            formStyles.saveButton,
            saving ? formStyles.saveButtonDisabled : null,
          ]}
          onPress={handleSave}
          disabled={saving}
        >
          <Text style={formStyles.saveButtonText}>
            {saving ? "Guardando..." : "Guardar Libro"}
          </Text>
        </TouchableOpacity>

        {/* Cancel button */}
        <TouchableOpacity
          style={formStyles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={formStyles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
