import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

function Landing(){
    const name=useLocation().state.name
    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
  {/* ..................header....................................         */}
          <Header name={name}/>
  {/* ...............card................................................. */}
          <div className="my-5 flex flex-wrap justify-between gap-7">
            <Card bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgColor={"#FC6662"} title={"April 8"} subtitle={"12:30 PM"} />
            <Card bgColor={"#FCA301"} title={"Built Using"} subtitle={"React"} />
          </div>
  {/* ...............TodoContainer........................................ */}
          <TodoContainer/>
  
          
        </div>
      </div>
    )
}

export default Landing