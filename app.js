const newReleases = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];

  
  
//     const func = (arr) =>{
//         const arr2 =[];
//         arr.forEach(function (e) {
//             const obj = {id: e.id, title: e.title}
//             arr2.push(obj)
//          });
//          return arr2;
//     }
//   console.log(func(newReleases));

const version =(arr) =>{
    const arr2 = arr.map(function (e){
        const obj ={id : e.id,title : e.title}
        return obj;
    })
    return arr2;
}
console.log(version(newReleases));


// const version = newReleases.map(function(n){
//     console.log ({id:n.id,title: n.title});
// })