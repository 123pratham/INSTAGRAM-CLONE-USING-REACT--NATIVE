import React from 'react'
import {View, Text , SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/Posts'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'


const HomeScreen = () => {
  return (
  <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
            {POSTS.map((post,index)=>(
                 <Post post={post} key={index} />
            ))}
        
        </ScrollView>
        <BottomTabs icons={bottomTabIcons}/>
     </SafeAreaView>
    
)}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'black',
        flex : 1,
    },
})

export default HomeScreen
