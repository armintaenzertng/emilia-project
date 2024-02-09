import {useEffect, useState} from "react";


export default function StateButton({bitPosition, binaryState}) {

    const [active, setActive] = useState(false);

    const buttonStyle = {
        backgroundColor: active ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    useEffect(() => {
        console.log("frontend: binaryState for button " + bitPosition + " is " + binaryState)
        
        setActive(isNthBitSet(binaryState, bitPosition));
    }, [binaryState])

    const isNthBitSet = (binaryState, n) => {
        return ((binaryState >> n) & 1) === 1;
    };

    const sendToggleCommand = async (lightNumber) => {
        const response = await fetch('/api/state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({n: lightNumber}),
        });
    };

    return (
        <button style={buttonStyle} onClick={() => sendToggleCommand(bitPosition)}>
            {active ? 'Active' : 'Inactive'}
        </button>
    );
}
