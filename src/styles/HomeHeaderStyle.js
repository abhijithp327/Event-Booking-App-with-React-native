import { StyleSheet } from 'react-native';

const HomeHeaderStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    createEventButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#FF4757',
        borderRadius: 20,
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginHorizontal: 6,
    },
    buttonTitle: {
        color: '#000',
        fontSize: 14,
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
        width: 40, 
        height: 40, 
        marginHorizontal: 8,
    },
    icon: {
        marginHorizontal: 8,
    },
});

export default HomeHeaderStyles;
