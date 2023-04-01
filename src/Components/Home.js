import ImgSlides from '../StaticComp/ImgSlides'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getTotals } from "../Redux/Slice";
const Home=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getTotals())
  },[])
    return(
        <div>
            <ImgSlides/>
            <hr />
          <br />
        </div>
    )
}
export default Home;