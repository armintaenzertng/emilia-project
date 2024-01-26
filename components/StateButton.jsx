import {useEffect, useState} from "react";


export default function StateButton({ bitPosition }) {
    let binaryState = 0
    
    const [active, setActive] = useState(false);
    
    const buttonStyle = {
        backgroundColor: active ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const isNthBitSet = (num, n) => {
        return ((num >> n) & 1) === 1;
    };

    // useEffect(() => {
    //     setActive(isNthBitSet(binaryState, bitPosition))
    //     console.log('active is now ' + active)
    // }, [binaryState, bitPosition]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch('/api/state', {method: 'GET'});
            const data = await response.json();
            setActive(isNthBitSet(data.lightState, bitPosition));
        }, 500); // Poll every 500 milliseconds

        return () => clearInterval(interval);
    }, []);

    const toggleActive = async (lightNumber) => {
        console.log("toggleActive has been activated")
        const response = await fetch('/api/state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ n: lightNumber }),
        });
        const data = await response.json();
        binaryState = data.lightState;
        console.log("frontend: binaryState for button " + bitPosition + " is " + binaryState)
    };
    
    return (
        <button style={buttonStyle} onClick={() => toggleActive(bitPosition)}>
            {active ? 'Active' : 'Inactive'}
        </button>
    );
}
