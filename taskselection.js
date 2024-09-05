const cities = [
    {name: "Chicago", population: 2716000},
    {name: "Los Angeles", population: 3980000},
    {name: "New York", population: 8419000},
    {name: "Houston",population: 2328000},
    {name: "Burak", population: 2328000}
  ];
 
  for(let i=0; i<cities.length ; i++){
    let minPopulationCity=cities[i]
        for(let j = i+1 ; j<cities.length ; j++){
            if(cities[j].population<minPopulationCity.population){
                minPopulationCity=cities[j]
            }
                  
            if(cities[j].population==minPopulationCity.population){
                       if(cities[j].name.localeCompare(minPopulationCity.name)===-1){
                        minPopulationCity=cities[j]

                 } 
                }
    let a = cities.indexOf(minPopulationCity)
    let temp=minPopulationCity
    cities[a]=cities[i]
    cities[i]=temp 
}
  }
console.log(cities)


// const newcities=cities
// for(let i=0;i<newcities.length-1;i++){
//     if(newcities[i].population=newcities[i+1].population){
//         if(newcities[i+1].name.localeCompare(newcities[i].name)===-1){
//         let temp=newcities[i+1]
//         newcities[i+1]=newcities[i]
//         newcities[i]=temp
//     } 
// }
// }
// console.log(newcities