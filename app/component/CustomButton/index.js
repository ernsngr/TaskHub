import { 
    TouchableOpacity,
    Text,
} from 'react-native'
import styles from '../../styles'

const CustomButton = ({
    text,
    bgColor,
    textColor,
    onPress,
}) => {
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={{
                width: "40%",
                height: 50,
                backgroundColor: bgColor,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                marginBottom: 20,
                shadowColor: "#000000",
                shadowOffset: {
                width: 0,
                height: 13,
                },
                shadowOpacity:  0.24,
                shadowRadius: 14.86,
                elevation: 18
            }} >
            <Text style={{
                color: textColor,
                fontSize: 22,
                fontWeight: "600",
                letterSpacing: 2,
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton