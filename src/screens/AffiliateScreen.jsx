import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const AffiliateScreen = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.subHeader}>Become a Easygo Tickets Affiliate</Text>
            <Text style={styles.description}>
                Join the Fiverr Affiliate Program and start earning by recommending world-class freelance talent.
            </Text>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={termsAccepted}
                    onValueChange={setTermsAccepted}
                    tintColors={{ true: '#FF4757', false: 'gray' }}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>
                    I accept the <Text style={styles.termsLink}>Terms & Conditions</Text>
                </Text>
            </View>

            <TouchableOpacity
                style={[styles.joinButton, { opacity: termsAccepted ? 1 : 0.5 }]}
                disabled={!termsAccepted}
            >
                <LinearGradient
                    colors={['#FE5631', '#F7234F']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.linearGradient}
                >
                    <Text style={styles.joinButtonText}>Join the Program</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.unifiedCard}>
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Create Event Promotion</Text>
                    <View style={styles.cardHeaderContainer}>
                        <View style={styles.rewardBadge}>
                            <Text style={styles.rewardText}>$7</Text>
                        </View>
                        <Text style={styles.rewardInnerText}>for promoting Create Event</Text>
                    </View>
                    <Text style={styles.cardDescription}>Earn up to $7 to Promote create event. T&C Apply.</Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Promote Create Event</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Event Sales Promotion</Text>
                    <View style={styles.cardHeaderContainer}>
                        <View style={styles.rewardBadge}>
                            <Text style={styles.rewardText}>$0.50</Text>
                        </View>
                        <Text style={styles.rewardInnerText}>for Event Sales Promotion</Text>
                    </View>
                    <Text style={styles.cardDescription}>Earn up to $0.50 per transaction for financial sales event. T&C Apply.</Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Promote Event Sales</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Event Permit Promotion</Text>
                    <View style={styles.cardHeaderContainer}>
                        <View style={styles.rewardBadge}>
                            <Text style={styles.rewardText}>$70</Text>
                        </View>
                        <Text style={styles.rewardInnerText}>for Event Permit Promotion</Text>
                    </View>
                    <Text style={styles.cardDescription}>Earn up to $70 to promote apply event permit. T&C Apply.</Text>
                    <TouchableOpacity style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>Promote Apply Event Permit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.footer}>
                Our Partners earn first
            </Text>
            <Text style={styles.footerContent}>
                Our partners earn first. Every order commission ranges from 25% to 50% of our service fee, starting at $100 for new customers and extending to existing ones within the first 12 months.
            </Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    contentContainer: {
        padding: width > 400 ? 30 : 20, // Adjust padding based on screen width
        paddingBottom: 50, // Ensuring footer is visible above menu
    },
    subHeader: {
        color: '#000',
        fontSize: width > 400 ? 22 : 18, // Responsive font size
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: width > 400 ? 16 : 14, // Responsive description font
        marginBottom: 20,
        color: '#000',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#000',
    },
    termsLink: {
        color: '#FF4757',
        textDecorationLine: 'underline',
    },
    joinButton: {
        borderRadius: 5,
        marginBottom: 20,
    },
    linearGradient: {
        padding: width > 400 ? 20 : 15, // Adjust padding based on screen width
        borderRadius: 5,
        alignItems: 'center',
    },
    joinButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: width > 400 ? 16 : 14, // Adjust text size for larger screens
    },
    unifiedCard: {
        backgroundColor: '#fff',
        padding: width > 400 ? 20 : 15, // Adjust padding based on screen width
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    card: {
        marginBottom: 20,
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardHeader: {
        color: '#000',
        fontSize: width > 400 ? 18 : 16, // Responsive card header size
        fontWeight: 'bold',
        marginBottom: 16,
    },
    rewardBadge: {
        backgroundColor: '#E0FFE0',
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    rewardText: {
        color: '#00B200',
        fontWeight: 'bold',
    },
    rewardInnerText: {
        color: '#000',
        fontSize: 14,
        marginLeft: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
    },
    cardButton: {
        borderWidth: 1,
        borderColor: '#FF4757',
        padding: width > 400 ? 15 : 10, // Adjust padding based on screen width
        borderRadius: 5,
        alignItems: 'center',
    },
    cardButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: width > 400 ? 16 : 14, // Responsive button text size
    },
    footer: {
        fontSize: width > 400 ? 18 : 16, // Responsive footer text size
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },
    footerContent: {
        fontSize: 14,
        color: '#000',
        marginTop: 8,
    },
});

export default AffiliateScreen;
