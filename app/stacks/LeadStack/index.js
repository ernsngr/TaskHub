import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Pages
import Tasks from "../../pages/(tabs)/Tasks/index"
import Notification from "../../pages/(tabs)/Notification/index"
import UserProfile from "../../pages/(tabs)/UserProfile/index"
import CreateTask from "../../pages/(tabs)/CreateTask/index"

// Icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const LeadStack = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Tasks"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#1F509A",
                tabBarInactiveTintColor: "#89A8B2"

            }}
            >
            <Tab.Screen name="Tasks" component={Tasks} options={{
                tabBarIcon: ({focused}) => <FontAwesome5 name="tasks" size={22} color={focused ? "#1F509A" : "#89A8B2"} />,
                tabBarLabel: "Tasks"
            }} />
            <Tab.Screen name="CreateTask" component={CreateTask} options={{
                tabBarIcon: ({focused}) => <MaterialIcons name="add-box" size={24} color={focused ? "#1F509A" : "#89A8B2"} />,
                tabBarLabel: "Add Task"
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: ({focused}) => <MaterialIcons name="notifications" size={24} color={focused ? "#1F509A" : "#89A8B2"} />,
                tabBarLabel: "Notification"
            }} />
            <Tab.Screen name="UserProfile" component={UserProfile} options={{
                tabBarIcon: ({focused}) => <Ionicons name="person-sharp" size={24} color={focused ? "#1F509A" : "#89A8B2"} />,
                tabBarLabel: "Profile"
            }} />
        </Tab.Navigator>
    )
}

export default LeadStack