import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SUBSCRIBE_CAT } from "../../app/catSlice";
const Cat = () => {
    const {cat,loading} = useAppSelector(state => state.cat)
    const dispatch = useAppDispatch()
    return (
        <>
        <button onClick={()=>dispatch(SUBSCRIBE_CAT())}>Show Cat</button>
        <div>{loading}</div>
        <div>{cat.map((elem,index) => {
            return <img src={elem.url} key={index}></img>
        })}</div>
        </>
    )
}
export default Cat