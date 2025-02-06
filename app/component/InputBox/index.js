import { TextInput } from 'react-native'
import styles from '../../styles'


const InputBox = ({
    value,
    onChangeText,
    placeholder,
}) => {


    return(
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input_box}
        />
    )
}

export default InputBox