// 1.adım bir user arrayi var ve bu array random şekilde oluşturulan isimler ile doldurulacak.++
const user = []
const characters = 'abcdefghjklmnopqrstuvwxyz'
const nameGenerator = () => {
    let name = ''
    let MaxNumber = (Math.random() * 5) + 2
    for (let i = 0; i < MaxNumber; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return name
}
for (let i = 0; i < 10; i++) {
    user.push(nameGenerator())
}
console.log(user)
// 2.adım: bu user arrayi içinde bulunan isimler kullanılarak bir posts arrayi oluşturulacak. bu post array için bir örnek paylaşacam seninle
// ADETLERİ ÇOĞALT!!!!!!!!!!!!!!!!!!!
const posts = []
const newPost = (i) => {
    let randomUser = (Math.floor(Math.random() * i))
    let post = {}
    post.user = user[randomUser];
    post.content = 'new content'
    post.likes = [];
    post.comments = []
    for (let j = 0; j < randomUser; j++) {
        post.likes.push(user[j])
        post.comments.push({ user: user[j], comment: 'Nice' })
    }
    return post
}
for (let i = 0; i < 10; i++) {
    posts.push(newPost(i))
}
console.log(posts)
// const post = [
//     {
//         user: "john_doe",
//         content: "My first post!",
//         likes: ["alice", "bob", "charlie"],
//         comments: [
//             { user: "alice", comment: "Nice post!" },
//             { user: "bob", comment: "Great job!" }
//         ]
//     }
// ];
// 3.adım bu oluşturulan post array içinde en çok beğeni yapan ve en çok yorum yapan kullanıcıları bulacaz.
const findMostLikingUser = () => {
    let allLikes = []
    for (let i = 0; i < posts.length; i++) {
        allLikes.push(posts[i].likes)
        if (i == posts.length - 1) {


        }
    }
    return allLikes
}
console.log(findMostLikingUser())