import { USERS } from "./Users";

export const POSTS=[
    {
        imageUrl : 'https//i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes:7820,
        caption: 'Train ride to Tikamgarh.🚅😅 ',
        profile_picture:USERS[0].image,
        comments: [
            {
                user: 'Pratham',
                comment:'Wow! This build looks fire. Super exited about',
                
            },
            {
                user:'Pratham.dev',
                comment:
                "Once i wake up, i'll finally be ready to code this uploadd."
            },
        ],
    },

    {
        imageUrl : 'https//i.ibb.co/182bP1y/4k.png',
        user: USERS[1].user,
        likes:1010101,
        caption: 'Train ride to Baldeogarh.🚅😅 ',
        profile_picture:USERS[1].image,
        comments: [
            {
                user: 'Lalluda pallu',
                comment:'Wow! yo yo',
                
            },
            {
                user:'Pratham.dev',
                comment:"I am sleeping!!!",
              
            },
        ],
    },
]