import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import styles from '../../../styles'
import SearchBox from '../../../component/SearchBox'
import { TaskBox } from '../../../component/TaskBox/TaskBox'
import { StatusBar } from 'expo-status-bar'


const Tasks = () => {
    return(
        <SafeAreaView style={styles.full_container}>
            <StatusBar style='auto'/>
            <SearchBox
                placeholder="Görev Ara.."
            />
            <ScrollView  showsHorizontalScrollIndicator={true} style={styles.tasks_main} contentContainerStyle={{alignItems: "center", paddingBottom: 40}}>
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Tasks