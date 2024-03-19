import { colorStandar } from "@/styles"
import { StyleSheet } from "react-native"

export const TabBarStyles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: colorStandar.tabBarColor.primary,
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingVertical: 4
  }
})