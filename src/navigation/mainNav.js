import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'

import login from '../screen/login'
import home from '../screen/home'

const mainNav = createStackNavigator({
    login: {
        screen: login,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },

    home: {
        screen: home,
        navigationOptions: ({ navigation }) => ({
            title: 'home'
        })
    }
});

export default createAppContainer(mainNav)