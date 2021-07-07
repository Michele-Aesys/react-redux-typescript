import { useAppDispatch,useAppSelector } from "../../app/hooks"
import { increment,decrement } from "../../app/counterSlice"
const Counter =()=>{
    const counter = useAppSelector(state=>state.counter.value)
    const dispatch = useAppDispatch()
    
    return(
    <>  
    <div>{counter}</div>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
    )   
}

export default Counter