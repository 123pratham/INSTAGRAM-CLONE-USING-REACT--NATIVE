//import liraries
import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import { Divider } from 'react-native-elements'

// create a component
const Post = ({post}) => {
    return (
        <View style={{marginBottom:30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
        </View>
    )
}


const PostHeader=({post})=>(
    <View style={{flexDirection:'row',justifyContent: 'space-between', margin: 5,alignItems:'center'}}>
          <View>
            <Image source={{uri:post.profile_picture}} style={styles.story} />
                <Text>
                </Text>
          </View>
    </View>
)

// define your styles
const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth: 1.6,
        // marginRight: 5,
        borderColor:'#ff8501',
    }
})

//make this component available to the app
export default Post


