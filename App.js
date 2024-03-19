import { AuthProvider, useAuth } from '@/contexts';
import { LoginNavigation } from '@/navigations/LoginNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import './src/i18n/i18n'
import { AppNavigation } from '@/navigations/AppNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'LatoFont': require('@/../assets/Fonts/Lato-Light.ttf'),
  });
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

const MainApp = () => {
  const { isSignedIn, userData } = useAuth();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isSignedIn ? (
        <Stack.Screen name="Home" component={AppNavigation} options={{ headerShown: false }}/>
        ) : (
          <Stack.Screen name="StackLogin" component={LoginNavigation} options={{ headerShown: false }} />
        )
      }
    </Stack.Navigator>
  </NavigationContainer>
  );
};