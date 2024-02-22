import {useEffect, useState} from "react";
import Switch from '@mui/material/Switch';
import theme from "tailwindcss/defaultTheme";
import {gray} from "next/dist/lib/picocolors";

export default function StateButton({bitPosition, binaryState}) {

    const [active, setActive] = useState(false);

    const buttonStyle = {
        color: active ? 'lightGreen' : 'darkViolet',
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
        <Switch style={buttonStyle} disableRipple onClick={() => sendToggleCommand(bitPosition)}>
            {active ? 'Active' : 'Inactive'}
        </Switch>
    );
}
