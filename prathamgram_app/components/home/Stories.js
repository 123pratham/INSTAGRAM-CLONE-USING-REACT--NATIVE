//import liraries
import React  from 'react'
import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import { USERS } from '../../data/Users'


// create a component
const Stories = () => {
    return (
        <View style = {{ marginBottom: 13 }}>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator = {false}>

                
                {USERS.map((story,index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                <Image source={{uri: story.image}}
                style={styles.story}/>
                <Text style={{color:'white'}}>
                    {
                        story.user.length > 11 ? 
                        story.user.slice(0 , 10 ).toLowerCase() + ' ... ' 
                        : story.user.toLowerCase()
                    },
                    </Text>
                </View>
                 ))}
                
            </ScrollView>
            <Text style={{color:'white'}}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:7,
        borderWidth: 3,
        // marginRight: 5,
        borderColor:'#ff8501',
    }
})
//make this component available to the appr:
export default Stories;
