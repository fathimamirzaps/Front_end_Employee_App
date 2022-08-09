

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/slices/counterSlice';


const Counter = () => {
    // const[count,setCount] = useState(0);
    // const navigate = useNavigate();
    const count = useSelector((state) => state.counterReducer.value);
    const dispatch = useDispatch();
    return(
        <>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {count}
        
        </>
        
    );
}

export default Counter;