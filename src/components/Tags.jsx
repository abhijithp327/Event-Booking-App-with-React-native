import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const Tags = ({ tags }) => {
    return (
        <View style={styles.tagsContainer}>
            <Text style={styles.sectionTitle}>Browse By Tags</Text>
            <View style={styles.tagsGrid}>
                {tags.map((tag, index) => (
                    <TouchableOpacity key={index} style={styles.tagButton}>
                        <Icon name={tag.icon} size={16} color="#000" style={styles.tagIcon} />
                        <Text style={styles.tagText}>{tag.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tagsContainer: {
        padding: width > 400 ? 20 : 16,  // Increased padding for larger screens
        backgroundColor: '#FFEEEA',
        borderRadius: 16,
        marginBottom: 16,
    },
    tagsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    tagButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingHorizontal: width > 400 ? 16 : 12,  // Adjust padding for larger screens
        paddingVertical: width > 400 ? 10 : 8,  // Adjust vertical padding
        margin: 6,
        borderWidth: 1,
        borderColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tagIcon: {
        marginRight: 8,
    },
    tagText: {
        color: '#000',
        fontSize: width > 400 ? 16 : 14,  // Dynamic font size based on screen width
    },
    sectionTitle: {
        color: '#000',
        fontSize: width > 400 ? 22 : 20,  // Adjust title size for larger screens
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
});

export default Tags;
