import React from 'react';
import {Stylesheet, View, Text, TextInput} from 'react-native';
import TimerButton from './TimerButton';

export default function TimerForm({ id, title, project }){
    const submitText = id ? 'Update' : 'Create';

    return(
        <View style={Stylesheet.formContainer}>
            <View style={Stylesheet.attributeContainer}>
                <Text style={Stylesheet.textInputTitle}>Title</Text>
                <View style={Stylesheet.textInputContainer}>
                    <TextInput style={Stylesheet.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={title}
                        />
                </View>
            </View>
            <View styles={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={project}
                        />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimerButton small color="#21BA45" title={submitText} />
                <TimerButton small color="#DB2828" title="Cancel" />
            </View>
        </View>
    );
}

const styles = Stylesheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7D1',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
