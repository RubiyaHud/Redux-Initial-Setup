import React, { useEffect } from 'react'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../slices/counterSlice';

const Shop = () => {
    let dispatch = useDispatch();

    let handleIncrement = () => {
        // console.log("hi");

        //Passing data to 'increment' (which will be catched by action.payload), the reducer function of 'counterSlice'
        dispatch(increment(1))
    }

    //Print the object of all state variables
    // let stateData = useSelector((state)=>console.log(state))    


    // Print the value of a specific state variable, e.g. `counter`
    let data = useSelector((state) => state.counter.value)
    // console.log(data);
    

    return (
        <div>
            <Container>
                <h1>Shop</h1>
                <h2>Counter {data}</h2>
                <button
                    onClick={handleIncrement} className='bg-amber-300 border-2 rounded-2xl p-1.5 cursor-pointer'
                >
                    Increment the Counter value by 1
                </button>
            </Container>
        </div>
    )
}

export default Shop