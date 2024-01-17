import {Revochat} from "../index"

const client = new Revochat.Client({
    url: "ws://localhost:3001",
    debug: true,
})

try {
    client.login("FAF395DFF11C5457B3768E195E18794E1705500854372")
    
    client.on("user.connect", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
        console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
        console.log("You have " + user.friends.length + " friends")
    
        console.log("Adding friend...")
        client.user.addFriend({username: "thomas"}).catch((error) => {
            console.log(error)
        })
    })

    client.on("user.friend.add", (user) => {
        if(user.error) return console.log(user.error)
        console.log(user)
    })
    
} catch (error) {
    console.log(error)
}


// try {
//     client.login("D7B6F994D4C35B299214233F1869F9991705493205366")
    
//     client.on("user.connect", (user) => {
//         if(user.error) return console.log(user.error)
//         console.log(user)
//         console.log("Connected as " + user.username +  " (" + user.user_id + ")")  
//         console.log("You have " + user.friends.length + " friends")
    
//         console.log("Adding friend...")
//         client.user.addFriend({username: "lux"}).catch((error) => {
//             console.log(error)
//         })
//     })

//     client.on("user.friend.add", (user) => {
//         if(user.error) return console.log(user.error)
//         console.log(user)
//     })
    
// } catch (error) {
//     console.log(error)
// }