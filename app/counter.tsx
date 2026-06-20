import React, { useState } from 'react';    
import FlipNumbers from 'react-flip-numbers';
function Counter() {
    const [count, setCount] = useState(0);
    
    function goUp() {
        setCount(count + 1);
    }
    function wabisabi() {
        return (
                <FlipNumbers 
                    height={100} 
                    width={100} 
                    color="white" 
                    play={true}
                    background="transparent"
                    perspective={1200} 
                    numbers={count.toString()}
                />
        )
    }
    return (
        <div className="flex flex-col justify-center items-center">
            
            {wabisabi()}      
            <button onClick={goUp} className="border-pink-900 border-2 rounded-xl mt-4 cursor-pointer">Click here</button>  
        </div>
    )
}

export default Counter
