import { View}          from 'react-native';
import { styleHeadBar } from '@/components/HeadBar/HeadBar.style';
import { MyText }       from '@/components/Text';
import { MyIcon }       from '@/components/Icon';
import { iconUser }     from './HeadBar.props';

export const Headbar = ({ScreenName, userName}) => {
    return (
      <View style={styleHeadBar.container}>
        <View style={styleHeadBar.screenInfo}>
          <MyText type={"headBarName"}>{ScreenName}</MyText>
        </View>
        <View style={styleHeadBar.userInfo}>
            <MyText type={"headBarUserName"} noTranslate={true}>{userName} </MyText>
            <MyIcon {...iconUser}/>
        </View>
      </View>
    );
};