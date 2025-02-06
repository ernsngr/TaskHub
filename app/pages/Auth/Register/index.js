import { 
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
    Button
} from 'react-native'
import styles from '../../../styles'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../component/CustomButton'
import InputBox from '../../../component/InputBox'


const RegisterPage = () => {

    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    return(
        <KeyboardAvoidingView 
            style={{ flex: 1, backgroundColor: '#fff' }} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <ScrollView contentContainerStyle={{ flexGrow: 1, width: "100%", height: "100%" }} keyboardShouldPersistTaps="handled">
                <View style={styles.full_container} >
                    <Image
                        source={require("../../../../assets/Vectors/register_icon.jpg")}
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
                    <InputBox
                        value={passwordAgain}
                        onChangeText={txt => setPasswordAgain(txt)}
                        placeholder="Lütfen Şifrenizi Tekrar Giriniz"
                    />
                    <CustomButton
                        text="Giriş Yap"
                        textColor="#f5f5f5"
                        bgColor="#00B44B"
                    />

                    <View style={styles.have_accound_button}>
                        <Button
                            title='Zaten bir hesabın var mı?'
                            color="#000"
                            onPress={() => navigation.goBack("Login")}
                        />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterPage