import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    full_container:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#574964"
        },
    auth_icons:{
        width: "90%",
        height: "45%",
        marginTop: 50
    },
    welcome_header1:{
        width: "95%",
        fontSize: 35,
        textAlign: "center",
        fontWeight: "700"
    },
    welcome_header2:{
        fontSize: 24,
        letterSpacing: 2,
        width: "70%",
        textAlign: "center",
        marginTop: 30
    },
    welcome_header3:{
        fontSize: 22,
        letterSpacing: 2,
        marginTop: 30
    },
    welcome_button_container:{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30
    },
    have_accound_button:{
        marginTop: 20
    },
    // Components
    input_box:{
        width: "85%",
        height: 52,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: "#ababab",
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        marginTop: 15,
        marginBottom: 15
    },
    search_box:{
        width: "90%",
        height: 50,
        backgroundColor: "#d9d9d9",
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 17,
        letterSpacing: 0.4,
        marginTop: 30,
        marginBottom: 10,
    },
    // Pages
    page_container:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        
    },
    profile_image:{
        width: 100, 
        height: 100, 
        alignItems: "center", 
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 0.9,
        borderColor: "#454545",
        marginTop: 20
    },
    profile_name:{
        width: "70%",
        height: "auto",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        letterSpacing: 1,
        marginTop: 30,

    },
    header1:{
        width: "90%",
        marginTop: 20,
        fontSize: 38,
        fontWeight: "700",
        letterSpacing: 2,
        borderBottomWidth: 1.5,
        borderColor: "#909090",
        borderRadius: 1
    },
    tasks_main:{
        width: "100%",
        height: "100%",
        paddingTop: 30,
        
    },
    task_box:{
        width: "90%",
        height: 140,
        backgroundColor: "#FFDAB3",
        borderRadius: 30,
        padding: 15,
        justifyContent: "space-between",
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 9,
        },
        shadowOpacity:  0.22,
        shadowRadius: 9.22,
        elevation: 12
    },
    task_header:{
        fontSize: 24,
        fontWeight:"bold",
        marginLeft: 5,
        letterSpacing: 0.8
    },
    task_details:{
        width: "90%",
        height: "auto",
        marginLeft: 7,

    },
    task_bottom:{
        width: "90%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 5
    },
    task_bottom_text:{
        letterSpacing: 0.8
    }
})

export default styles