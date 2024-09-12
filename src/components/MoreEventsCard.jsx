import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFea from 'react-native-vector-icons/Feather';
import FavDislike from '../assets/images/faveDislike.png';
import FavLike from '../assets/images/favLike.png'; 
import Badge from '../assets/images/Badge.png';

const { width } = Dimensions.get('window'); // Get the screen width for responsive layout

const MoreEvents = ({ events }) => {

    const [favoriteStates, setFavoriteStates] = React.useState(events.map(() => false));

    const renderEvent = (event, index) => {
        const truncatedTitle = event.title.length > 20 ? `${event.title.slice(0, 20)}...` : event.title;
        const truncatedLocation = event.location.length > 20 ? `${event.location.slice(0, 20)}...` : event.location;
        const imageSource = typeof event.image === 'string' ? { uri: event.image } : event.image;

        const handleFavoriteToggle = () => {
            const newFavoriteStates = [...favoriteStates];
            newFavoriteStates[index] = !newFavoriteStates[index];
            setFavoriteStates(newFavoriteStates);
        };

        return (
            <View key={index} style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={imageSource} style={styles.image} />
                    <View style={styles.tagContainer}>
                        <Image source={Badge} style={styles.badgeImage} />
                        <TouchableOpacity onPress={handleFavoriteToggle}>
                            <Image source={favoriteStates[index] ? FavLike : FavDislike} style={styles.favoriteIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{truncatedTitle}</Text>
                    <View style={styles.locationContainer}>
                        <Icon name="location-on" size={16} color="grey" />
                        <Text style={styles.locationText}>{truncatedLocation}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Icon name="event" size={16} color="#888" />
                        <Text style={styles.dateText}>Sun, Jul 2, 8:00 PM</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{event.price}</Text>
                        <IconFea name="info" size={14} color="grey" style={styles.asteriskIcon} />
                    </View>
                </View>
                <TouchableOpacity style={styles.shareButton}>
                    <IconFea name="share-2" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {events.map(renderEvent)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: width > 400 ? width * 0.8 : width * 0.9, // Dynamic width for smaller devices
        height: 280,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#FFF',
        opacity: 1,
        marginBottom: 12,
        position: 'relative',
    },
    imageContainer: {
        width: '100%',
        height: 160,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        opacity: 1,
    },
    tagContainer: {
        position: 'absolute',
        top: 16,
        left: 0,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    badgeImage: {
        width: 50,
        height: 22,
    },
    favoriteIcon: {
        width: 26,
        height: 26,
    },
    textContainer: {
        padding: 12,
    },
    title: {
        color: '#000',
        fontSize: width > 400 ? 16 : 14, // Adjust font size based on screen width
        fontWeight: 'bold',
        marginBottom: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        flexWrap: 'wrap', // Ensure text wraps on smaller screens
    },
    locationText: {
        fontSize: width > 400 ? 14 : 12, // Adjust font size based on screen width
        color: '#888',
        marginLeft: 4,
        flexShrink: 1, // Prevent overflow
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    dateText: {
        fontSize: width > 400 ? 14 : 12, // Adjust font size based on screen width
        color: '#888',
        marginLeft: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        color: '#FF5A5F',
    },
    asteriskIcon: {
        marginLeft: 4,
    },
    shareButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MoreEvents;
