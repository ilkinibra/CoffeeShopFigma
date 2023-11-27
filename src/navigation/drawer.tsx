import { createDrawerNavigator } from '@react-navigation/drawer';
import { Onboarding } from '../views/Onboarding';
import Home from '../views/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="OnBoarding" component={Onboarding} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}