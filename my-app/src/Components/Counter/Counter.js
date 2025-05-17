import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Counter() {

    console.log("Counter Component called...")

    //cunter var state
    const [count, setCount] = useState(0);

    function onIncreament() {
        console.log("Increament Clicked...")
        // count += 1;
        setCount(count+1)
    }

    function onDecreament() {
        console.log("Decreament Clicked...")
        // count -= 1;
        setCount(count-1)
    }
console.log("Rendering UI with Count value:", count)

    return <div style={{height:"300px", padding:"10px", margin:"10px"}}> 
        <h1>Counter</h1>
        <p> Count: {count}</p>

        <Button onClick={onIncreament}>Increament</Button>
        <Button onClick={onDecreament}>Decreament</Button>
    </div>
}

export default Counter