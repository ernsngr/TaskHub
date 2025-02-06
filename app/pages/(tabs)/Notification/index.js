import { 
    SafeAreaView, 
    Text, 
    View 
} from 'react-native'
import styles from '../../../styles'

const Notification = () => {
    return(
        <SafeAreaView>
            <View style={styles.page_container}>
                <Text style={styles.header1}>
                    Notification
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Notification