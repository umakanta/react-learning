
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerComp() {
    console.log("Rendering spinner component.");

    useEffect(() => {
        console.log("Inside useeffect: rendered");

        return () => {
            console.log("useeffect: just before unmount");
        }
    })


    return <Spinner animation="grow" />;
}

export default SpinnerComp;