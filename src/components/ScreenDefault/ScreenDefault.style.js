import { StatusBar, StyleSheet } from "react-native";
import { screenStandar }         from "@/standars";
import { colorStandar }          from "@/styles";

export const styleScreen = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: colorStandar.clearColors.primary,
      paddingTop: StatusBar.currentHeight
  },
  screen: {
      flex: 1,
      justifyContent: "space-between",
      paddingHorizontal: screenStandar.separation.horizontalSeparation,
  },
});