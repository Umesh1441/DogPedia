import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const ContactForm = ({ navigation }) => {
    const [formData, setFormData] = useState({
        email: '',
        dob: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleSubmit = () => {
        const validationErrors = {};

        // Validate email
        const emailPattern = /\S+@\S+\.\S+/;
        if (!formData.email.match(emailPattern)) {
            validationErrors.email = 'Invalid email address';
        }

        // Validate date of birth (simple validation for demonstration)
        if (!formData.dob) {
            validationErrors.dob = 'Date of birth is required';
        }

        // Validate password (simple validation for demonstration)
        if (formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form submitted successfully
            setSubmitted(true);
            Alert.alert(
                'Success',
                'Form submitted successfully!',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                    },
                ],
                { cancelable: false }
            );
            // Reset form data
            setFormData({
                email: '',
                dob: '',
                password: ''
            });
            // Clear errors
            setErrors({});
        }
    };

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Contact Form</Text>
            <ScrollView style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Date of Birth:</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.dob}
                        onChangeText={(text) => handleChange('dob', text)}
                    />
                    {errors.dob && <Text style={styles.error}>{errors.dob}</Text>}
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                    />
                    {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>

            </ScrollView>
            <View>
                <View style={styles.buttonContainer1}>
                    <TouchableOpacity style={styles.button1}  >
                        <Text style={styles.buttonText1}>ContactForm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('BreedList')}>
                        <Text style={styles.buttonText1}>Main Page</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        paddingBottom: 200,
        width: '100%',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    error: {
        color: 'red',
    },
    successMessage: {
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    successText: {
        color: 'green',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer1: {
        top: 0,
        height: 50,
        backgroundColor: 'green',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignSelf:'center',
        width: 360,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    button1: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText1: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ContactForm;
