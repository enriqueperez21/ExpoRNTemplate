import { StyleSheet } from "react-native";
import { screenStandar } from "@/standars";
import { colorStandar } from "@/styles";

export const styleHeadBar = StyleSheet.create({
  container: {
      /*Disposicón*/
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      /*Tamaños y espacios*/
      height: screenStandar.heightBar.heightSize,
      paddingHorizontal: screenStandar.separation.horizontalSeparation,
      borderBottomWidth: 2,
      backgroundColor: colorStandar.headBarColor.primary
  },
  screenInfo:{
      flex: 1,
  },
  userInfo: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-end",
  },
});