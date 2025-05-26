import Button from 'react-bootstrap/Button';
import { useMemo, useState } from 'react';


const generateLargeArray =  ()=>{

    console.log("Generating Large Array");

    const largeArray=[];


    for(let i=0;i<1000000;i++){
        largeArray.push(i);
    }

    return largeArray;
}

const sumArr = (arr)=>{
    console.log("calulating sum....");
        return arr.reduce((acc, curr)=> acc+curr,0)
    
}
function Counter() {

    console.log("Counter Component called...")

    //cunter var state
    const [count, setCount] = useState(0);
    //----------------------
    // const largeArray = generateLargeArray();
    // const sum = sumArr(largeArray);
    
    //useMemo...
    const largeArray = useMemo(()=> generateLargeArray(),[])
    const sum = useMemo(()=> sumArr(largeArray),[largeArray])

    console.log("sum,", sum)
    //----------------------

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