// 1.adım bir user arrayi var ve bu array random şekilde oluşturulan isimler ile doldurulacak.
const user = []
const maxUser = 5   ;
const characters = 'abcdefghjklmnopqrstuvwxyz'
const nameGenerator = () => {
    let name = ''
    let MaxNumber = (Math.random() * 5) + 2
    for (let i = 0; i < MaxNumber; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return name
}
for (let i = 0; i < maxUser; i++) {
    user.push(nameGenerator())
}
// 2.adım: bu user arrayi içinde bulunan isimler kullanılarak bir posts arrayi oluşturulacak.
const posts = []
const newPost = (i) => {
    let randomMin = (Math.floor(Math.random() * maxUser))
    let randomMax = (Math.floor(Math.random() * maxUser))
    if (randomMin > randomMax) {
        let temp = randomMin;
        randomMin = randomMax;
        randomMax = temp;
    }
    let randomPostUser = (Math.floor(Math.random() * i))
    let post = {}
    post.user = user[randomPostUser];
    post.content = 'new content'
    post.likes = [];
    
    for (let j = randomMin; j < randomMax; j++) {
        post.likes.push(user[j])
        
    }
    
    randomMin = (Math.floor(Math.random() * maxUser))
    randomMax = (Math.floor(Math.random() * maxUser))
    if (randomMin > randomMax) {
        let temp = randomMin;
        randomMin = randomMax;
        randomMax = temp;
    }
    post.comments = [];
    for (let j = randomMin; j < randomMax; j++) {
        
        post.comments.push({ user: user[j], comment: 'Nice User' })
    }

    return post
}
for (let i = 0; i < maxUser; i++) {
    posts.push(newPost(i))
}
// 3.adım bu oluşturulan post array içinde en çok beğeni yapan ve en çok yorum yapan kullanıcıları bulacaz.
const allLikesNonFlat = []
const allComments = []
for (let i = 0; i < posts.length; i++) {
    allLikesNonFlat.push(posts[i].likes)
    for (let j = 0; j < posts[i].comments.length; j++) {
        allComments.push(posts[i].comments[j])
    }
}

const findMostCommentUser = () => {
    let mostCommenteds = 0
    let mostCommentingUser = null

    for (let i = 0; i < allComments.length; i++) {
        let commentAmount = 0
        for (let j = i + 1; j < allComments.length; j++) {

            if (allComments[i].user === allComments[j].user) {
                commentAmount++
            }
            // if(mostCommenteds==commentAmount){
            //     if(allComments[i].user.localeCompare(mostCommentingUser)===-1){
            //         mostCommentingUser = allComments[i].user

            // }
            if (mostCommenteds < commentAmount) {
                mostCommenteds = commentAmount
                mostCommentingUser = allComments[i].user
            }         
        }
    }
    
return `${mostCommentingUser} with ${mostCommenteds} times `
}
const allLikes = allLikesNonFlat.flat()
const findMostLikeUser = () => {
    let mostLikes = 0
    let mostLikingUser = null

    for (let i = 0; i < allLikes.length; i++) {
        let likesAmount = 0
        for (let j = i + 1; j < allLikes.length; j++) {

            if (allLikes[i] === allLikes[j]) {
                likesAmount++
            }
            if (mostLikes < likesAmount) {
                mostLikes = likesAmount
                mostLikingUser = allLikes[i]
            }
        }

    }
    return `${mostLikingUser} with ${mostLikes} times `
}

const finalExport = `Most Liking User: ${findMostLikeUser()} \nMost Commenting User: ${findMostCommentUser()}`;

module.exports = finalExport;
