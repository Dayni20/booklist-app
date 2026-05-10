import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#1F4E79",
  secondary: "#2E75B6",
  background: "#F5F5F5",
  white: "#FFFFFF",
  textDark: "#333333",
  textMedium: "#666666",
  textLight: "#999999",
  border: "#DDDDDD",
  inputBg: "#FAFAFA",
  danger: "#C62828",
  dangerBg: "#FFEBEE",
  success: "#2E7D32",
  warning: "#F57C00",
  shadow: "#000000",
  // Genre badge colours
  badgeProgramming: "#1565C0",
  badgeSelfHelp: "#E65100",
  badgeScience: "#2E7D32",
  badgeHistory: "#6A1B9A",
  badgeDefault: "#37474F",
};

export const SIZES = {
  paddingSmall: 8,
  paddingMedium: 16,
  paddingLarge: 24,
  borderRadius: 10,
  fontSmall: 13,
  fontMedium: 16,
  fontLarge: 18,
  fontTitle: 22,
  fabSize: 60,
};

// ============================================================
// LIST SCREEN STYLES
// ============================================================

export const listStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  searchContainer: {
    padding: SIZES.paddingMedium,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.borderRadius,
    paddingVertical: SIZES.paddingSmall + 2,
    paddingHorizontal: SIZES.paddingMedium,
    fontSize: SIZES.fontMedium,
    backgroundColor: COLORS.inputBg,
  },
  counterText: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    marginTop: 6,
    marginLeft: 2,
  },
  list: { padding: SIZES.paddingMedium },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingMedium,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: SIZES.fontLarge,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  cardAuthor: {
    fontSize: SIZES.fontSmall + 1,
    color: COLORS.textMedium,
    marginTop: 4,
  },
  badgeRow: {
    flexDirection: "row",
    marginTop: 8,
    gap: 6,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: SIZES.fontSmall - 1,
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textLight,
    fontSize: SIZES.fontMedium,
  },
  emptySubText: {
    textAlign: "center",
    marginTop: 8,
    color: COLORS.textLight,
    fontSize: SIZES.fontSmall,
    fontStyle: "italic",
  },
  fab: {
    position: "absolute",
    bottom: SIZES.paddingLarge,
    right: SIZES.paddingLarge,
    width: SIZES.fabSize,
    height: SIZES.fabSize,
    borderRadius: SIZES.fabSize / 2,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 34,
  },
});

// ============================================================
// DETAIL SCREEN STYLES
// ============================================================

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.paddingLarge,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingLarge,
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: SIZES.paddingMedium,
  },
  field: { marginBottom: SIZES.paddingMedium },
  label: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  value: {
    fontSize: SIZES.fontLarge,
    color: COLORS.textDark,
    marginTop: 4,
  },
  genreBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 16,
    marginTop: 4,
  },
  genreBadgeText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.fontSmall,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textLight,
  },
});

// ============================================================
// ADD BOOK SCREEN STYLES
// ============================================================

export const formStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scrollContent: { padding: SIZES.paddingLarge },
  heroTitle: {
    fontSize: SIZES.fontTitle,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    marginBottom: SIZES.paddingLarge,
  },
  label: {
    fontSize: SIZES.fontSmall + 1,
    fontWeight: "600",
    color: COLORS.textDark,
    marginTop: 12,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  required: {
    color: COLORS.danger,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.paddingSmall,
    padding: 12,
    fontSize: SIZES.fontMedium,
    backgroundColor: COLORS.inputBg,
  },
  inputError: {
    borderColor: COLORS.danger,
    backgroundColor: COLORS.dangerBg,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: SIZES.fontSmall,
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: SIZES.paddingSmall,
    marginTop: SIZES.paddingLarge,
    alignItems: "center",
  },
  saveButtonDisabled: { backgroundColor: COLORS.textLight },
  saveButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },
  cancelButton: {
    padding: 14,
    borderRadius: SIZES.paddingSmall,
    marginTop: SIZES.paddingSmall,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cancelButtonText: {
    color: COLORS.textMedium,
    fontSize: SIZES.fontMedium,
  },
});
