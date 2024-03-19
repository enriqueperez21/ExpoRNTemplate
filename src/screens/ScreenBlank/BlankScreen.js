import { StyleSheet, View } from "react-native"
import { ScreenDefault } from "@/components/ScreenDefault"
import { MyText } from "@/components/Text"

export const BlankScreen = () => {
  const props = {
    screenTittle: "Home",
    userName: "Enrique",
    showHeadBar: true
  };
  return(
    <ScreenDefault {...props}>
    <View style={styles.container}>
      <MyText type={'base'}>hello</MyText>
    </View>
  </ScreenDefault>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});