import React, { useEffect, useState } from 'react'

function Pratices() {
    const [count, setCount] = useState(0);
    // const [count1, setCount1] = useState(0);
    function UpdateCount() {
        setCount(count + 1)
    }
    function UpdateCount1() {
        setCount(count - 1)
    }

    function abc(){
        console.log("From ABC")
    }
    useEffect(() =>{
        UpdateCount
        abc()
        console.log("hi")
        console.log(count)
    },[count])
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <dir>
                <h1>Count is {count}</h1>
                {/* <h1>Count is {count1}</h1> */}
                <button className='bg-gray-500 rounded-xl p-3 text-white mt-5' onClick={UpdateCount}>click Me! +</button>
                <button className='bg-gray-500 rounded-xl p-3 text-white mt-5' onClick={UpdateCount1}>click Me1 -</button>
            </dir>
        </div>
    )
}

export default Pratices
