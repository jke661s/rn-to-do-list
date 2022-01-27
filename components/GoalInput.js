import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={props.isModalActive} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" 
                style={styles.input} 
                onChangeText={goalInputHandler} 
                value={enteredGoal} 
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button 
                        title="ADD" 
                        // The following two ways are both for calling the passed function with parameters.

                        // onPress={ () => props.addGoalHandler(enteredGoal) } 
                        onPress={ () => {
                                props.addGoalHandler(enteredGoal);
                                setEnteredGoal("");
                            }
                        }
                    />
                    </View>
                <View style={styles.button}>
                    <Button title="CANCEL" color="red" onPress={props.onCancelTapped} />
                </View> 
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    },
    input: { 
        borderBottomColor: "black", 
        borderWidth: 1, 
        padding: 10, 
        width: "80%",
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
    },
    button: {
        width: "40%",
    }
});

export default GoalInput;