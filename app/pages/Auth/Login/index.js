import { 
    View,
    Text,
    Image,
    Button, 
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { useState } from 'react'
import styles from '../../../styles'
import { useNavigation } from '@react-navigation/native'
import InputBox from '../../../component/InputBox'
import CustomButton from '../../../component/CustomButton'

const LoginPage = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <KeyboardAvoidingView 
            style={{ flex: 1, backgroundColor: '#fff' }} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.full_container} >
                    <Image
                        source={require("../../../../assets/Vectors/lead_page_icon.jpg")}
                        style={styles.auth_icons}
                    />
                    <InputBox
                        value={email}
                        onChangeText={txt => setEmail(txt)}
                        placeholder="Lütfen E-mail Giriniz"
                    />
                    <InputBox
                        value={password}
                        onChangeText={txt => setPassword(txt)}
                        placeholder="Lütfen Şifre Giriniz"
                    />
                    <CustomButton
                        text="Giriş Yap"
                        textColor="#f5f5f5"
                        bgColor="#0A5EB0"
                    />

                    <View style={styles.have_accound_button}>
                        <Button
                            title='Bir hesabın yok mu?'
                            color="#000"
                            onPress={() => navigation.navigate("Register")}
                        />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginPage