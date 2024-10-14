//Posts verisine post servisi ile ekleme yapıp.body de gönder.tekrar get ile çağır.
// 1.adım bir user arrayi var ve bu array random şekilde oluşturulan isimler ile doldurulacak.
const user = []
const maxUser = 3;
const characters = 'abcdefghjklmnopqrstuvwxyz'
const nameGenerator = (i) => {
    let userKey = `user${i}`
    let name = ''
    let MaxNumber = (Math.random() * 5) + 2
    for (let i = 0; i < MaxNumber; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    let username = { [userKey]: name }
    return username
}
for (let i = 0; i < maxUser; i++) {
    user.push(nameGenerator(i))
}
//console.log(user)
// 2.adım: bu user arrayi içinde bulunan isimler kullanılarak bir posts arrayi oluşturulacak.
const posts = []
const newPost = () => {
    let newMaxUser = user.length;
    const randomMinMax = () => {
        let randomMin = (Math.floor(Math.random() * newMaxUser))
        let randomMax = (Math.floor(Math.random() * newMaxUser))
        if (randomMin > randomMax) {
            let temp = randomMin;
            randomMin = randomMax;
            randomMax = temp;
        }
        return [randomMin, randomMax]
    }

    let randomPostUser = (Math.floor(Math.random() * newMaxUser))
    let post = {}
    let userKey = `user${randomPostUser}`
    post.user = user[randomPostUser][userKey];
    post.content = 'new content'

    post.likes = [];
    for (let j = randomMinMax()[0]; j < randomMinMax()[1]; j++) {
        post.likes.push(Object.values(user[j]))

    }

    post.comments = [];
    for (let j = randomMinMax()[0]; j < randomMinMax()[1]; j++) {
        post.comments.push({ user: Object.values(user[j]), comment: 'Nice User' })
    }

    return post
}
for (let i = 0; i < maxUser; i++) {
    posts.push(newPost())
}
// 3.adım bu oluşturulan post array içinde en çok beğeni yapan ve en çok yorum yapan kullanıcıları bulacaz.
const allLikes = []
const allComments = []
const updateLikeComments = () => {
    allLikes.length = 0
    allComments.length = 0
    for (let i = 0; i < posts.length; i++) {
        for (let j = 0; j < posts[i].comments.length + posts[i].likes.length; j++) {
            if (posts[i].comments[j] !== undefined) {
                allComments.push(posts[i].comments[j].user)
            }

            if (posts[i].likes[j] !== undefined) {
                allLikes.push(posts[i].likes[j])
            }

        }
    }
}
updateLikeComments()
const findMostCommentUser = () => {
    let mostCommenteds = 0
    let mostCommentingUser = null

    for (let i = 0; i < allComments.length; i++) {
        let commentAmount = 1
        if (allComments.length === 1) {
            mostCommenteds = commentAmount
            mostCommentingUser = allLikes[i][0]
            return `${mostCommentingUser} with ${mostCommenteds} times `
        }
        for (let j = i + 1; j < allComments.length; j++) {

            if (allComments[i][0] === allComments[j][0]) {
                commentAmount++
            }
            if (mostCommenteds < commentAmount) {
                mostCommenteds = commentAmount
                mostCommentingUser = allComments[i][0]
            }
            else if (mostCommenteds == commentAmount && allComments[i][0] < mostCommentingUser) {
                mostCommentingUser = allComments[i][0]

            }
        }
    }

    return `${mostCommentingUser} with ${mostCommenteds} times `
}
const findMostLikeUser = () => {
    let mostLikes = 0
    let mostLikingUser = null

    for (let i = 0; i < allLikes.length; i++) {
        let likesAmount = 1
        if (allLikes.length === 1) {
            mostLikes = likesAmount
            mostLikingUser = allLikes[i][0]
        }

        for (let j = i + 1; j < allLikes.length; j++) {

            if (allLikes[i][0] === allLikes[j][0]) {
                likesAmount++
            }
            if (mostLikes < likesAmount) {
                mostLikes = likesAmount
                mostLikingUser = allLikes[i][0]
            }
            if (mostLikes == likesAmount && allLikes[i][0] < mostLikingUser) {
                mostLikingUser = allLikes[i][0]

            }
        }
    }

    return `${mostLikingUser} with ${mostLikes} times `
}


const getFinalExport = () => {
    return `Most Liking User: ${findMostLikeUser()} \nMost Commenting User: ${findMostCommentUser()}`;
}



module.exports = {getFinalExport,updateLikeComments, findMostLikeUser, findMostCommentUser, newPost, posts, user}
// console.log(posts)
// console.log(allLikes)
// console.log(allComments)
// console.log(finalExport)
//Posts verisine post servisi ile ekleme yapıp body de gönder tekrar get ile çağır.