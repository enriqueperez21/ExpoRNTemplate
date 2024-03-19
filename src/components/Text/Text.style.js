import { StyleSheet} from 'react-native'

const standard ={
  defaultFont : "LatoFont",
  baseSize: 25,
  largeSize: 20
}

export const textStyles = StyleSheet.create({
  base: {
    fontFamily: standard.defaultFont,
    fontSize: standard.baseSize,
  },
  headBarName: {
    fontFamily: standard.defaultFont,
    fontSize: standard.largeSize,
  },
  headBarUserName: {
    fontFamily: standard.defaultFont,
    fontSize: standard.largeSize,
  },
});