import { View } from "react-native";
import { EachTab } from "./components/EachTab/EachTab";
import { TabBarStyles } from "./TabBar.style";

export const MyTabBar = (props) => {
  return (
    <View style={TabBarStyles.container}>
      <GenerateTabs {...props}/>
    </View>
  );
}

const GenerateTabs = ({ state, descriptors, navigation }) => {
  const tabScreens = state.routes
  return(
    <>
      {tabScreens.map((screen, index) => {
        const { options } = descriptors[screen.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : screen.name;
          
        const iconProps = options
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: screen.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(screen.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: screen.key,
          });
        };
        const EachTabprops ={
          accessibilityRole:"button",
            accessibilityState: isFocused ? { selected: true } : {},
            accessibilityLabel: options.tabBarAccessibilityLabel,
            testID: options.tabBarTestID,
            onPress, onLongPress
        }
        return (
          <EachTab key= {screen.key} {...{isFocused,iconProps, EachTabprops}}/>
        );
      })}
    </>)
}