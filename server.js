// // //Q.1.
//  const arr =[
//       {"id":1, "start":0,"duration":117,"aslide":4,"view":100},
//       {"id":2, "start":1,"duration":12,"aslide":4,"view":100},
//       {"id":3, "start":3,"duration":41,"aslide":4,"view":100},
//       {"id":4, "start":5,"duration":29,"aslide":4,"view":100},
//       {"id":5, "start":7,"duration":123,"aslide":4,"view":100},
//       {"id":6, "start":4,"duration":417,"aslide":4,"view":100},
//       {"id":7, "start":1,"duration":12,"aslide":4,"view":100},
//       {"id":8, "start":9,"duration":67,"aslide":4,"view":100}
//   ];

//   const a =arr.filter(item=>item.duration>=12 && item.duration<=67);
//   console.log(a)





//   const a1=arr.filter(item=> item.start<=5);
//   console.log(a1);
// // Q.2
//  const Obj={
//      "Actors":[
//          {
//              "name":"Gopinadh",
//              "Age":26,
//              "Born At":"nirmal",
//              "Birthdate":"oct 18, 1996",
//              "photo":"https://jsonformatter.org"
//          },
//          {          
//              "name":"madhukar",
//              "Age":25,
//              "Born At":"hyderabad",
//              "Birthdate":"june 6, 1998",
//              "photo":"https://jsonformatter.org"
//          }
//      ]}
 
// //ans1.
//  let ls=Obj.Actors.map((x)=>{console.log(x.name,x.photo)})
// //ans2.
//  const arr1=Obj.Actors.map((val)=>{
//     let s= {name:val.name,photo:val.photo}
//     return s
//  })
//  console.log(arr1)
//  //ans3.
//   Obj.Actors.forEach(val=>{
//      console.log(val.name, val.photo);
//  })
// // ans 4.
// const arr2 = Obj.Actors.map(({name,photo})=>{
//  return{name,photo}
//  });
//  console.log(arr2)
// Q.3.
const users =[
    {name:'nicole', age:31},
    {name:'chris', age:43},
    {name:'yaatree', age:21},
    {name:'sanne', age:29},
];


 const po = users.reduce((acc, curr) => {
     if(curr.age>acc){
         acc=curr.age;
     
     }
     return acc;
 },0);
 console.log(po);




// // Q. 4.
//  const staffDetails=[
//      {name:'akhil', age:27, salary:48000,currency:'USD'},
//      {name:'akhil', age:27, salary:48000,currency:'USD'},
//      {name:'akhil', age:27, salary:48000,currency:'USD'},
//      {name:'akhil', age:27, salary:48000,currency:'USD'},
//  ]
// // ans. 
// const newArr=staffDetails.forEach((val, i)=>{
//     let newObj=  {id:i+1,...val};
//       console.log(newObj)
//   
//  });