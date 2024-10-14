const library = {
    books: [
        { "Writer": "Orhan Pamuk", "Book": "Beyaz Kale" },
        { "Writer": "Sabahattin Ali", "Book": "Kürk Mantolu Madonna" },
        { "Writer": "Halit Ziya Uşaklıgil", "Book": "Aşk-ı Memnu" }
    ],
    users: [
        { "user0": "Ahmet" },
        { "user1": "Mehmet" },
        { "user2": "Ayşe" },
        { "user3": "Fatma" },
        { "user4": "Ali" }
    ]
}
const newBook = (writer, bookName) => {
    let newBooks = { "Writer": writer, "Book": bookName };
    library.books.push(newBooks)
}

const newUser = (newUsers) => {
    let newIndex = library.users.length
    let userKey = `user${newIndex}`
    let newUser = { [userKey]: newUsers }
    library.users.push(newUser)

}

const updateUser = (userToUpdate, newName) => {

    for (let i = 0; i < library.users.length; i++) {
        if (userToUpdate == Object.keys(library.users[i])) {
            library.users[i][userToUpdate]=newName
        }
    }
}

const readUser = () => {
return library.users
}

newBook("Ömer Seyfettin", "Kaşağı")
newUser("Şerafettin")
newUser("Mehmet")
updateUser("user0", "Veli")
console.log(library);


module.exports={newBook,newUser,updateUser,readUser}
// Sen bize bi api yaz
// Kütüphane apisi olsun
// Kütüphane ekleyebileyim
//bu kütüphaneye kitap ve user ekleyebilelim
// Kitap ve userları create read ve update eden fonksiyonları olsun
