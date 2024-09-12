import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFea from 'react-native-vector-icons/Feather';
import EventCard from '../components/EventCard';
import MoreEvents from '../components/MoreEventsCard';
import Tags from '../components/Tags';
import CustomHeader from '../components/CustomHeader';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const HomeScreen = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [height * 0.1, 0], // Responsive header height
        extrapolate: 'clamp',
    });
    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const events = [
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "Free", image: require('../assets/images/event01.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event02.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event03.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event05.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event06.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event07.jpg') },
    ];

    const moreEvents = [
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 30", image: require('../assets/images/event03.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event05.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event06.jpg') },
        { title: "Live Music By Melrick @ Stone Street", location: "Stage Name, Bengaluru KA", price: "AED 24", image: require('../assets/images/event07.jpg') },
    ];

    const tags = [
        { label: "Business", icon: "chart-line" },
        { label: "Science & Tech", icon: "flask" },
        { label: "Arts", icon: "palette" },
        { label: "Music", icon: "music" },
        { label: "Fashion", icon: "shopping-bag" },
        { label: "Film & Media", icon: "film" },
        { label: "Health", icon: "heart" },
        { label: "Spirituality", icon: "praying-hands" },
        { label: "Travel & Outdoor", icon: "globe" },
        { label: "Sports", icon: "football-ball" },
        { label: "Food & Drink", icon: "utensils" },
        { label: "Government", icon: "landmark" },
        { label: "Community", icon: "users" },
        { label: "Seasonal", icon: "snowflake" },
        { label: "Charities & Causes", icon: "hands-helping" },
        { label: "Education", icon: "book" },
        { label: "Home & lifestyle", icon: "home" },
        { label: "Fitness", icon: "dumbbell" },
    ];

    const handleSeeAll = () => {};

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity }]}>
                <CustomHeader />
            </Animated.View>
            <Animated.ScrollView
                style={styles.scrollView}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.spacer} />
                <View style={styles.searchBar}>
                    <Input
                        placeholder='Bengaluru, Karnataka'
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        leftIcon={<Icon name='search' size={width * 0.06} color='black' />}
                        rightIcon={<IconFea name='map-pin' size={width * 0.05} color='black' />}
                        rightIconContainerStyle={styles.rightIconContainer}
                    />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Suggested Events</Text>
                    <TouchableOpacity onPress={handleSeeAll}>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalScrollView}
                >
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </ScrollView>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>More Events</Text>
                </View>

                <View style={styles.moreEventsContainer}>
                    <MoreEvents events={moreEvents} />
                </View>

                <View style={styles.tagsSection}>
                    <Tags tags={tags} />
                </View>
            </Animated.ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFC',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: '#FFFFFF',
    },
    spacer: {
        height: height * 0.1, // Responsive spacer
    },
    searchBar: {
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        marginBottom: -16,
        marginTop: height * 0.02,
    },
    inputContainer: {
        borderBottomWidth: 0.1,
        backgroundColor: '#FFF',
        borderRadius: width * 0.06, // Responsive border radius
        paddingLeft: width * 0.03, // Responsive padding
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        paddingLeft: width * 0.03, // Responsive padding
    },
    rightIconContainer: {
        marginRight: width * 0.03, // Responsive margin
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: width * 0.04, // Responsive margin
        marginBottom: height * 0.02, // Responsive margin
    },
    sectionTitle: {
        color: '#000',
        fontSize: width * 0.05, // Responsive font size
        fontWeight: 'bold',
    },
    seeAllText: {
        color: '#FF5A5F',
        fontSize: width * 0.04, // Responsive font size
    },
    moreEventsContainer: {
        paddingTop: height * 0.01, // Responsive padding
    },
    tagsSection: {
        paddingHorizontal: width * 0.04, // Responsive padding
        paddingVertical: height * 0.02, // Responsive padding
    },
});
