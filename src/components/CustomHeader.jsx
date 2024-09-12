import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import scanner from '../assets/images/scanner.png';

const { width } = Dimensions.get('window');  // Get device width

const CustomHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Events</Text>
            <Button
                title="Create an Event"
                buttonStyle={styles.createEventButton}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
                icon={<Icon name="add" size={20} color="#000" style={styles.buttonIcon} />}
                iconRight
            />
            <View style={styles.iconsContainer}>
                <Image source={scanner} style={styles.scannerImage} />
                <Icon name="notifications-none" size={30} color="#000" style={styles.icon} />
            </View>
        </View>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: width * 0.03,  // Responsive padding
        paddingHorizontal: width * 0.05,  // Responsive horizontal padding
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        color: '#000',
        fontSize: width * 0.05,  // Responsive font size
        fontWeight: 'bold',
    },
    createEventButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#FF4757',
        borderRadius: 20,
        paddingHorizontal: width * 0.03,  // Responsive horizontal padding
        paddingVertical: width * 0.01,  // Responsive vertical padding
        marginHorizontal: width * 0.02,  // Responsive margin
    },
    buttonTitle: {
        color: '#000',
        fontSize: width * 0.035,  // Responsive font size
    },
    buttonContainer: {
        borderRadius: 20,
    },
    buttonIcon: {
        marginLeft: 6,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scannerImage: {
        width: width * 0.1,  // Responsive image size
        height: width * 0.1,  // Responsive image size
        marginHorizontal: width * 0.02,  // Responsive margin
    },
    icon: {
        marginHorizontal: width * 0.02,  // Responsive icon margin
    },
});
