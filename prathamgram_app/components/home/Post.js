// import liraries
import React from 'react' 
import { View, Text, StyleSheet ,Image, TouchableOpacity} from 'react-native'
import { Divider} from 'react-native-elements'


// create a component
const postFooterIcons = [
    {
        name : 'Like',
        imageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like',
        likedImageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',

    },
    {
        name: 'Comment',
        imageUrl:'https://img.icons8.com/ios-glyphs/90/fa314a/like',

    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',

    },
    {
        name: 'Save',
        imageUrl: '',
    },
]


const Post = ({post}) => {
    return (
        <View style={{marginBottom:50}}> 
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{marginHorizontal: 15, marginTop:10}}>

            <PostFooter />
            </View>
            
        </View>
    )
}


const PostHeader=({post})=>(
    <View style={{flexDirection:'row',
    justifyContent: 'space-between',
     margin: 5,
     alignItems:'center'}}>
          <View style={{flexDirection: 'row' ,
           alignItems: 'center'}}>
            <Image source={{uri:post.profile_picture}} 
            style={styles.story} />
                <Text style={{color: 'white',
                margin:5,
                fontWeight:'700'}}>
                {post.user}
                </Text>
          </View>
          <Text style={{color: 'white' , fontWeight: '900'}}> ... </Text>
    </View>
)



//post image

const PostImage = ({post}) => (
    <View style = {{
        width: '100%',
        height: 450,
    }}>
    <Image source={{uri: post.imageUrl}} 
    style = {{height: '100%', resizeMode: 'cover'}}
    />
    </View>
)



const PostFooter = () => (
    <View style = {{flexDirection:'row'}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}  />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}  />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}  />
        </View>
    </View>
)


const Icon =  ({imgStyle, imgUrl}) => {
    <TouchableOpacity>
        <Image style = {imgStyle} source={{uri: imgUrl}}/>
    </TouchableOpacity>
} 



// define your styles
const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth: 1.6,
        marginRight: 5,
        borderColor:'#ff8501',
    },

    footerIcon: {
        width: 33,
        height: 33,
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },



 
})





//make this component available to the app
export default Post


