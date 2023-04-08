// import liraries
import React from 'react' 
import { View, Text, StyleSheet ,Image, TouchableOpacity} from 'react-native'
import { Divider} from 'react-native-elements'


// create a component
const postFooterIcons = [
    {
        name : 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like',

    },
    {
        name: 'Comment',
        imageUrl:'https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png',

      
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png',

    },
    {
        name: 'Save',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png',
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
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentsSection post={post} />
            <Comments post={post}/>
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
            <Icon imgStyle={[styles.footerIcon,styles.shareIcon]} imgUrl={postFooterIcons[2].imageUrl}  />
        </View>

        <View style={{flex:1,alignItems: 'flex-end'}}>
            <Icon imgStyle={styles.footerIcon} 
            imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
)


const Icon =  ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style = {imgStyle} source={{uri: imgUrl}}/>
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row',marginTop: 4}}>
    <Text style={{color:'white', fontWeight:'600'}}>
        {post.likes.toLocaleString('en')} likes
    </Text>
    </View>
)

const Caption = ({post}) =>(
    <View style={{marginTop: 5}}>
     <Text style={{color:'white'}}>
    <Text style={{fontWeight:'600' }}>{post.user} </Text>
    <Text> {post.caption}</Text>
    
    </Text> 
    </View>
)

const CommentsSection = ({post}) => (
   <View style={{marginTop:5}}> 
   {!!post.comments.length && (
    <Text style={{color:'gray'}}> 
    View{post.comments.length >1 ? ' all' : ''} {post.comments.length}{' '}
    {post.comments.length > 1 ? 'comments' : 'comment'}
    
    </Text>
    )}
    </View>
)

//A. 0 comments dont render component

// B. 1 comments render component without all  and  singular  comment

//  c. 2 comments render component with all and plural comments 

const Comments = ({post}) =>(
    <>
    {post.comments.map((comment,index) => (
        <View key={index} style={{flexDirection:'row',marginTop:5}}> 
            <Text style={{color:'white'}}>
                <Text style={{fontWeight:'600'}}>{Comments.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)

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
        width: 30,
        height: 30,
    },

    shareIcon:{
        transform:[{rotate:'320deg'}],
        marginTop: -3,
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '33%',
        justifyContent: 'space-between',
    },



 
})





//make this component available to the app
export default Post


