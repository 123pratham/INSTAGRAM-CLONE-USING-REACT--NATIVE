import { USERS } from "./Users";




export const POSTS=[
    {
        imageUrl : 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
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
        imageUrl : 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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

    {
        imageUrl : 'https://mir-s3-cdn-cf.behance.net/projects/404/ad76da155103071.Y3JvcCw0MDUwLDMxNjcsMCw5NDI.jpg',
        user: USERS[2].user,
        likes:1010101,
        caption: 'Train ride to Baldeogarh.🚅😅 ',
        profile_picture:USERS[2].image,
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


    {
        imageUrl : 'https://img.icons8.com/ios-glyphs/90/fa314a/like',
        user: USERS[3].user,
        likes:1010101,
        caption: 'Train ride to Baldeogarh.🚅😅 ',
        profile_picture:USERS[3].image,
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