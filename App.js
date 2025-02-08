import { NavigationContainer } from "@react-navigation/native";

// Stacks
import AuthStack from "./app/stacks/AuthStack";
import LeadStack from "./app/stacks/LeadStack";
import UserStack from "./app/stacks/UserStack";


export default function App() {
  return (
      <NavigationContainer>
        <LeadStack/>
      </NavigationContainer>
  );
}

