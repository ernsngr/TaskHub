import { View, Text, SafeAreaView } from 'react-native'
import styles from '../../../styles'
import SearchBox from '../../../component/SearchBox'

const Tasks = () => {
    return(
        <SafeAreaView style={styles.full_container}>
            <SearchBox
                placeholder="Görev Ara.."
            />
        </SafeAreaView>
    )
}

export default Tasks