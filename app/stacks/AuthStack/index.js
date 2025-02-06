import { createStackNavigator } from "@react-navigation/stack";

// Pages
import WelcomePage from "../../pages/Auth/Welcome"
import LeadLogin from "../../pages/Auth/Login"
import Register from "../../pages/Auth/Register"


const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator 
            initialRouteName="WelcomePage"
            screenOptions={{
                headerShown: false,
            }}
            >
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="Login" component={LeadLogin} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack