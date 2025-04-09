import { useState } from "react"


function AddTodoForm(props){

  const activityArr=props.activityArr
  const setActivityArr=props.setActivityArr

    const [newActivity,setNewActivity]=useState("")

    const handleChange=(e)=>{
      setNewActivity(e.target.value)
    }

    const addActivity=()=>{
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity("")
    }

    return(
        
        <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
          <input value={newActivity} onChange={handleChange}
            type="text"
            placeholder="Next Activity?"
            className="border  border-black bg-transparent p-1"
          ></input>
          <button onClick={addActivity} className="bg-black text-white p-1 border border-black">
            Add
          </button>
        </div>
      </div>
    )
}

export default AddTodoForm