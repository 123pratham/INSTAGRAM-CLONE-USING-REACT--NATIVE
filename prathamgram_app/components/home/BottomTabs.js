//import liraries
import React ,{useState} from 'react'
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements';


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },

    {
        name: 'Search',
        active:'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive:'https://img.icons8.com/ios/500/ffffff/search--v1.png',

    },

    {
        name:'Reels',
        active:'https://img.icons8.com/fluency-systems-filled/50/ffffff/clapperboard-2.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/50/ffffff/clapperboard-2.png',
    },

    {
        name:'Shop',
        active:'https://img.icons8.com/fluency-systems-filled/50/ffffff/shopping-mall.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/50/ffffff/shopping-mall.png',
        // inactive:'https://img.icons8.com/fluency-systems-regular/50/ffffff/favorite-cart.png',
    },

    {
        name:'Profile',
        active:'https://www.bhagwanphoto.com/wp-content/uploads/2020/02/Best-Bhagwan-Shiva-HD-Images.jpg',
        inactive:'https://www.bhagwanphoto.com/wp-content/uploads/2020/02/Best-Bhagwan-Shiva-HD-Images.jpg',
    },


]

// create a component
const BottomTabs = ({icons}) => {
   const [activeTab,setActiveTab] = useState('Home')

   const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
    <Image source={{uri: activeTab == icon.name ? icon.active : icon.inactive}} 
    style={[styles.icon, icon.name == 'Profile' ? styles.profilePic() :null,
    activeTab == 'Profile' &&
     icon.name == activeTab 
     ? styles.profilePic(activeTab)
     :null
     ]} />
    </TouchableOpacity>
   )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
           {icons.map((icon , index) => (
            <Icon key={index} icon={icon} />
           ))}
        </View>
        </View>
    )
}






// define your styles
const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        width:  '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#000',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height:50,
        paddingTop:10, 
    },

    icon:{
        width:30,
        height: 30,
    },

    profilePic:(activeTab = '') => ({
        borderRadius:50,
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor:'#fff',
    }),
});

//make this component available to the app
export default BottomTabs
