import { 
    TextInput,
} from 'react-native'
import styles from '../../styles'

const SearchBox = ({value, setValue, placeholder}) => {
    return(
        <TextInput
            placeholder={placeholder}
            value={value}
            setValue={setValue}
            style={styles.search_box}
        />
    )
}

export default SearchBox;