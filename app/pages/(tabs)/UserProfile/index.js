import { 
    SafeAreaView, 
    Text,
    Image,
    View

} from 'react-native'
import styles from '../../../styles'

const UserProfilePage = () => {
    return(
        <SafeAreaView>
            <View style={styles.page_container}>
                <Image
                    source={require("../../../../assets/default-image.jpg")}
                    style={styles.profile_image}
                />
                <Text style={styles.profile_name}>
                    Eren Sungur
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default UserProfilePage