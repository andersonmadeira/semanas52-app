import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomePage from './pages/home-page';
import DetailsPage from './pages/details-page';
import ConfigPage from './pages/config-page';

const AppNavigator = createStackNavigator(
    {
        Home: HomePage,
        Details: DetailsPage,
        Config: ConfigPage,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        defaultNavigationOptions: {
            headerVisible: false,
            headerStyle: {
                backgroundColor: '#497127',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(AppNavigator);