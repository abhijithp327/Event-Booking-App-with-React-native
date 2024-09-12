import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFea from 'react-native-vector-icons/Feather';
import FavDislike from '../assets/images/faveDislike.png';
import FavLike from '../assets/images/favLike.png'; 
import Badge from '../assets/images/Badge.png';

const { width } = Dimensions.get('window'); // Get screen width for responsive layout

const EventCard = ({ event }) => {

    const [isFavorite, setIsFavorite] = React.useState(false);

    const truncatedTitle = event.title.length > 20 ? `${event.title.slice(0, 20)}...` : event.title;
    const truncatedLocation = event.location.length > 30 ? `${event.location.slice(0, 30)}...` : event.location;

    // Determine the correct image source
    const imageSource = typeof event.image === 'string' ? { uri: event.image } : event.image;

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.tagContainer}>
                <Image source={Badge} style={styles.badgeImage} />

                <TouchableOpacity onPress={handleFavoriteToggle}>
                    <Image source={isFavorite ? FavLike : FavDislike} style={styles.favoriteIcon} />
                </TouchableOpacity>
            </View>
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
    );
};

const styles = StyleSheet.create({
    card: {
        width: width < 360 ? width * 0.7 : width * 0.58, // For small devices use 90% width, otherwise 45%
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginLeft: 7,
        marginRight: 7, // margin for spacing
        marginBottom: 20, // spacing for card
    },
    image: {
        width: '100%',
        height: width * 0.4, // Image height is responsive based on screen width
        borderRadius: 6,
    },
    tagContainer: {
        position: 'absolute',
        top: 16,
        left: 10,
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
    title: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 8,
        marginTop: 6,
        marginBottom: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8, // Add marginRight to keep content inside card
        flexWrap: 'wrap', // Allows location text to wrap if it's too long
        width: '100%', // Ensure it stays within the card
    },
    locationText: {
        fontSize: 12,
        color: '#888',
        marginLeft: 4,
        flexShrink: 1, // Ensures text doesn't overflow and stays within bounds
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 4,
    },
    dateText: {
        fontSize: 12,
        color: '#888',
        marginLeft: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        color: '#FF5A5F',
    },
    asteriskIcon: {
        marginLeft: 4,
    },
});

export default EventCard;
