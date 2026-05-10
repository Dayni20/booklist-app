import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  List: undefined;
  AddBook: undefined;
  Detail: { id: number };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
