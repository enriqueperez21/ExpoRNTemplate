import { View }        from "react-native";
import { styleScreen } from "@/components/ScreenDefault/ScreenDefault.style";
import { Headbar }     from "@/components/HeadBar";
import { StatusBar }   from "expo-status-bar";

export const ScreenDefault = (props) =>{
  const {children, screenTittle, userName, showHeadBar} = props
  return(
    <View style={styleScreen.container}>
      {(showHeadBar)?<Headbar ScreenName = {screenTittle} userName = {userName} />: null}
      <View style={styleScreen.screen}>
        {children}
      </View>
      <StatusBar style="auto" />
    </View>        
  )
}