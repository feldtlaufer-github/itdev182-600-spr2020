import React from 'react';
import { Stylesheet, View } from 'react-native';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default function ToggleableTimerForm({ isOpen }) {
    return(
        <View style= {[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? (
                <TimerForm />
            ) : (
                <TimerButton title="+" color="black" />
            )}
        </View>
    );
}

const styles = StylesSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});
