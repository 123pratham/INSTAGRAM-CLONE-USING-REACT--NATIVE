//import liraries
import React, { useState } from 'react'
import { View, Text, Image,TextInput } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { color } from 'react-native-elements/dist/helpers'


const PLACEHOLDER_IMG = 
'https://www.kirloskarpumps.com/wp-content/uploads/2018/07/Placeholder.jpg'


const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption has reached the characters. ') 
})





// create a component
const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik
        initialValues={{caption:'',imageUrl:''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
        >
            {({handleBlur,
             handleChange, 
             handleSubmit,
             values,
             errors,
             isValid
            }) => 
            <>
            <View style={{margin:20, justifyContent:'space-between'
            , flexDirection:'row'}}>
                <Image source={{uri:thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}}
                style={{width:100, height:100}}
                />
                <View style={{flex:1, marginLeft:12}}>
                    <TextInput
                    style={{color:'white',  fontSize: 20}}
                    placeholder='Write a caption...' 
                    placeholderTextColor = 'gray'
                    multiline = {true}
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                     />
                </View>
            </View>
            <Divider width={0.2} orientation='vertical'/>
            
            <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
             style={{color:'white',fontSize:18}}
            placeholder='Enter Image URL' 
            placeholderTextColor = 'gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
            />
         {
            errors.imageUrl && (
                <Text style={{fontSize:10, color:'red'}}>
                {errors.imageUrl}
                </Text>  
            )
         }
         <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
            </>
            }
        </Formik>
    )
}



//make this component available to the app
export default FormikPostUploader
