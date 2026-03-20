import React, { useState } from 'react';    
import FlipNumbers from 'react-flip-numbers';
function Counter() {
    const [count, setCount] = useState(0);
    
    function goUp() {
        setCount(count + 1);
    }
    function wabisabi() {
        return (
            <FlipNumbers height={30} width={20} color="white" play perspective={100} numbers={count.toString()}  />
        )
    }
    return (
        <div>
            <button onClick={goUp} className="border-pink-900 border-2 rounded-xl">Click here</button>
            {wabisabi()}        
        </div>
    )
}

export default Counter
