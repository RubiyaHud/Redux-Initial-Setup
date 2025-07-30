import React from 'react'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../../slices/counterSlice'

const Collection = () => {
    // Print the value of state variable of `counter`
    let data = useSelector((state) => state.counter.value)

    let dispatch = useDispatch();
    let handleDecrement = () => {

        //Passing data to 'decrement' (which will be catched by action.payload), the reducer function of 'counterSlice'
        dispatch(decrement(1))
    }

    return (
        <>
            <div>
                <Container>
                    <h1> Collection </h1>
                    <h2> Counter {data} </h2>
                    <button
                        onClick={handleDecrement} className='bg-amber-300 border-2 rounded-2xl p-1.5 cursor-pointer'
                    >
                        Decrement the Counter value by 1
                    </button>
                </Container>
            </div>
        </>
    )
}

export default Collection