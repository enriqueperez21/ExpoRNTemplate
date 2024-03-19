import { TouchableOpacity } from 'react-native';
import React                from 'react'
import { MyIcon }           from "@/components/Icon";
import { colorStandar }     from '@/styles';
import { EachTabstyles }    from './EachTab.style';

export const EachTab = ({EachTabprops, isFocused, iconProps}) => {
  const colors = colorStandar.tabBarIcon
  const selectedColor = isFocused?colors.active: colors.inactive
  return (
    <TouchableOpacity
      {...EachTabprops}
      style={EachTabstyles.container}
    >
      <MyIcon  {...iconProps} color={selectedColor}/>
    </TouchableOpacity>
  )
}