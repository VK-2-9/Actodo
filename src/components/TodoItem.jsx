import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TodoItem(props){
    const activityArr= props.activityArr
    const setActivityArr=props.setActivityArr

    const handleDelete=(deleteId)=>{
        const newArr=activityArr.filter((item)=>{
            if(deleteId==item.id){
                return false
            }
            else{
                return true
            }

        })

        setActivityArr(newArr)
    }

    return(
        <div className="flex justify-between mr-3">
        <p>{props.index+1}. {props.activity}</p>
        <button onClick={()=>handleDelete(props.id)}>⛔ </button>
        </div>
        
    )
}

export default TodoItem