const cities = [
    { name: "Chicago", population: 2716000 },
    { name: "New York", population: 8419000 },
    { name: "Los Angeles", population: 3980000 },
    { name: "Houston", population: 2328000 }
  ];

/*
const populationList = cities.reduce((popList,city)=>{

    if(popList.length===0){
    popList.push(city)
        return popList;
    }
    
    for(let i=0 ; i<popList.length ; i++) {
        if(city.population>popList[i].population){
            popList.splice(i+1,0,city);
            return popList;
        }
        }
        

popList.unshift(city)
return popList;
}, [])

console.log(populationList) */

const popList=cities.sort((preNumber,nextNumber)=>{
return preNumber.population-nextNumber.population
})

console.log(popList)
