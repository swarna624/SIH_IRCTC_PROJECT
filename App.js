// App.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [travelClass, setTravelClass] = useState('general');

    const searchTickets = () => {
        axios.post('http://localhost:5000/search', {
            from,
            to,
            date,
            travelClass
        })
        .then(response => {
            Alert.alert('Search Results', JSON.stringify(response.data.data));
        })
        .catch(error => {
            Alert.alert('Error', 'Something went wrong while searching for tickets.');
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>IRCTC Ticket Booking</Text>
            <TextInput
                style={styles.input}
                placeholder="From"
                value={from}
                onChangeText={setFrom}
            />
            <TextInput
                style={styles.input}
                placeholder="To"
                value={to}
                onChangeText={setTo}
            />
            <TextInput
                style={styles.input}
                placeholder="Date (DD/MM/YYYY)"
                value={date}
                onChangeText={setDate}
            />
            <Button title="Search Tickets" onPress={searchTickets} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%'
    }
});
