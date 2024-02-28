import {useEffect, useState} from "react";
import Switch from '@mui/material/Switch';
import {createTheme, ThemeProvider} from "@mui/material";

export default function StateButton({bitPosition, binaryState}) {

    const [active, setActive] = useState(false);

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

    const theme = createTheme({
        components: {
            MuiSwitch: {
                styleOverrides: {
                    switchBase: {
                        // Controls default (unchecked) color for the thumb
                        color: "white"
                    },
                    colorPrimary: {
                        "&.Mui-checked": {
                            // Controls checked color for the thumb
                            color: "#fff"
                        }
                    },
                    track: {
                        // Controls default (unchecked) color for the track
                        opacity: 1,
                        backgroundColor: "darkViolet",
                        ".Mui-checked.Mui-checked + &": {
                            // Controls checked color for the track
                            opacity: 1,
                            backgroundColor: "#aaf501"
                        }
                    }
                }
            }
        }
    });


    return (
        <ThemeProvider theme={theme}>
        <Switch 
            disableRipple
            checked={active}
            onClick={() => sendToggleCommand(bitPosition)}>
            {active ? 'Active' : 'Inactive'}
        </Switch>
        </ThemeProvider>
    );
}
