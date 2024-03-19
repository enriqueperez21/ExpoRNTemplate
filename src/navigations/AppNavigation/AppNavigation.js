import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BlankScreen }              from "@/screens/ScreenBlank";
import { MyTabBar }                 from "@/components/TabBar";
import { iconCreate, iconGroup,iconHome, iconRecords, iconTest2 } from "./propsScreen";
const Tab = createBottomTabNavigator()

export const AppNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={"Home"} tabBar={(props)=><MyTabBar {...props}/>} screenOptions={{headerShown: false,}}>
      <Tab.Screen name="Create"  component={BlankScreen} options={{...iconCreate}}/>
      <Tab.Screen name="Group"   component={BlankScreen} options={{...iconGroup}} />
      <Tab.Screen name="Home"    component={BlankScreen} options={{...iconHome}} />
      <Tab.Screen name="Records" component={BlankScreen} options={{...iconRecords}} />
      <Tab.Screen name="Test2"   component={BlankScreen} options={{...iconTest2}} />
    </Tab.Navigator>
  )
}