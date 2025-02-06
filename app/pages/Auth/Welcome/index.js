import { 
    View,
    Text,
    Image, 
} from 'react-native'
import styles from '../../../styles'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../component/CustomButton'

const WelcomePage = () => {

    const navigation = useNavigation()

    return(
        <View style={styles.full_container} >
            
            <Image
                source={require('../../../../assets/Vectors/welcome_page_icon.jpg')}
                style={styles.auth_icons}
            />

            <Text style={styles.welcome_header1} >
                Görevler Paylaştıkça Kolaylaşır
            </Text>

            <Text style={styles.welcome_header3} >
                Hadi başlayalım!
            </Text>

            <View style={styles.welcome_button_container} >
                <CustomButton
                    text="Giriş"
                    bgColor="#0A5EB0"
                    textColor="#f5f5f5"
                    onPress={() => navigation.navigate("Login")}

                />
            </View>

        </View>
    )
}

export default WelcomePage