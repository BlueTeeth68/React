//short hand to quickly create react component using ES7: rafce
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";

const Counter = () => {
    // useSelector is use to get the value of entire redux store state
    // It take a selector as parameter
    const count = useSelector((state) => state.counter.count);

    // useDispatch is use to dispatch an action stored in the redux store
    // In fact, the implementation of the hook really is return store.dispatch.
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    //need to make sure the input amount is a number
    const addValue = Number(incrementAmount)  || 0;
    // console.log(`addValue: ${addValue}`);

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}
export default Counter