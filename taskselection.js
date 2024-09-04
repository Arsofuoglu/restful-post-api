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
    }   
    let a = cities.indexOf(minPopulationCity)
    let temp=minPopulationCity
    cities[a]=cities[i]
    cities[i]=temp 

}
console.log(cities)

    // let currentObject=cities[i]
    // let currentPopulation=currentObject.population
    // let considerArray = cities.slice(i+1)
    // let minNumbers = considerArray.reduce((minNumber,comparedNumber) =>{
    //     minNumber=considerArray[0]
    //     let comparedObject=comparedNumber.population
    //     let minObject=minNumber.population
    //     if(minObject>comparedObject){
    //         return comparedNumber
    //     }
    // },)
    // console.log(minNumbers)
    //    let minIndex = cities.indexOf(minNumbers)
    // if (currentPopulation>minNumbers.population){
    //         cities.splice(minIndex,0,cities[i])
    //         cities.splice(i,1)
    //     }

    
