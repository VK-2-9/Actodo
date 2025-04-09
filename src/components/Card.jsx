

function Card(props){

    return(
       
        <div style={{backgroundColor:props.bgColor}} className=" px-10 py-5 text-center border rounded-md flex-grow ">
              <h1 className="text-2xl font-medium ">{props.title}</h1>
              <p>{props.subtitle}</p>
          </div>
    )
    
}

export default Card

