import { 
    View,
    Text,
    TouchableOpacity,
 } from "react-native";
import styles from "../../styles";

export const TaskBox = () => {
  return(
    <View style={styles.task_box}>
        <Text style={styles.task_header}>
            Task Header
        </Text>
        <Text style={styles.task_details}>
            Task Details Task Details Task Details Task Details Task Details Task Details
        </Text>
        <View style={styles.task_bottom}>

          <Text  style={styles.task_bottom_text}>
            16 March 25
          </Text>

          <Text style={styles.task_bottom_text}>
            Waiting.. {/* or something like that */}
          </Text>

        </View> 
    </View>
  )
};
