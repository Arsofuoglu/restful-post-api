const cities = [
    {name: "Chicago", population: 2716000},
    {name: "Los Angeles", population: 3980000},
    {name: "New York", population: 8419000},
    {name: "Houston",population: 2328000},
    {name: "Burak", population: 2328000}
  ];

  for (let i=0;i<cities.length;i++){
    for(let j=0;j<cities.length-1-i;j++){
        if(cities[j].population>cities[j+1].population){
            let temp=cities[j]
            cities[j]=cities[j+1]
            cities[j+1]=temp
        }
    }
    }
    console.log(cities)