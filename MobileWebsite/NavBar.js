import {createStackNavigator, createAppContainer} from 'react-navigation';
import RestaurantScreen from "./components/restaurant/RestaurantScreen";
import MenuScreen from "./components/menu/MenuScreen";

const MainNavigator = createStackNavigator({
    Menu: {screen: MenuScreen},
    Restaurants: {screen: RestaurantScreen},
});

const App = createAppContainer(MainNavigator);

export default App;