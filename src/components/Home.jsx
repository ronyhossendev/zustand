import React from 'react'
import Button from './common/Button'
import Container from './common/Container'
import useCount from '../store/Count'
import { Link } from 'react-router-dom'


const Home = () => {
const {count,  increment,decrement,reset} = useCount ((state) => state)


  return (
    <div className="bg-teal-400 py-30">
       <Container> 
        <div className="px-90"> 
            <h3 className='bg-pink-400 py-4 px-6 rounded-2xl inline-block text-2xl font-bold text-white'>
              {count}
            </h3>
            </div>
            <div className="pt-20 flex gap-10">  
 <button onClick={increment} className="py-4 px-6 rounded-2xl bg-pink-400 text-white font-black text-2xl">Increment+</button>
 <button onClick={decrement} className="py-4 px-6 rounded-2xl bg-pink-400 text-white font-black text-2xl">Decrement-</button>
 <button onClick={reset} className="py-4 px-6 rounded-2xl bg-pink-400 text-white font-black text-2xl">Reset</button>
            <Link to={'shop'}> 
            <Button btnText={'Go To Shop'}/>
            </Link>
        </div>
         </Container>
    </div>
  )
}

export default Home