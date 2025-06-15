//function User(props){
  // console.log(props)
    //return(
      // <div>
        //<h1>user {props.name}</h1>
   //     <h2>Age:{props.age}</h2>
     //   </div>
       

//    )
//}




function User(p) {
 
    return(

    <div>
        <h1>Id: {p.id}</h1>
        <h2>Age:{p.age}</h2>
        <h2>Place:{p.place}</h2>
    </div>
    )
}

export default User