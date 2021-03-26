import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      // title app
      title: "Business Search",
    },
  }
);

// Creates a default app.js, and displays what we tell to the navigator
export default createAppContainer(navigator);
