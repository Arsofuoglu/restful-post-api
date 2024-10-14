const customers = [
    {
      name: "John",
      orders: [
        { product: "Burger", quantity: 2, price: 5 },
        { product: "Fries", quantity: 1, price: 3 },
        { product: "Burger", quantity: 1, price: 5 }
      ]
    },
    {
      name: "Alice",
      orders: [
        { product: "Salad", quantity: 1, price: 4 },
        { product: "Burger", quantity: 1, price: 5 },
        { product: "Fries", quantity: 2, price: 3 },
        { product: "Kebap", quantity: 2, price: 20 }
      ]
    },
    {
        name: "Mahmut",
        orders: [
          { product: "Kebap", quantity: 5, price: 20 }
        ]
      }
  ];
const Invoice=[]

for(let i=0;i<customers.length;i++){
    let totalprice=0
    let orders=[]
    for(let j=0;j<customers[i].orders.length;j++){
       totalprice+=(customers[i].orders[j].quantity)*(customers[i].orders[j].price)
    }

    for(let k=0;k<customers[i].orders.length;k++){
       
        orders[k]=[customers[i].orders[k].quantity+ 'x '+customers[i].orders[k].product+'']
    }
    Invoice[i]=[customers[i].name+':'+orders+'='+"Total price: "+totalprice]
}
module.exports=Invoice;