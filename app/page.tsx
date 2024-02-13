"use client"

import StateButton from '../components/StateButton';
import {useEffect, useState} from "react";
import LivestreamComponent from "../components/LiveStreamComponent";

export default function Home() {
    
    // This polls for the current state of the lamps at regular intervals. The state is shared by all lamps, their bitPosition determines if they are on or off.
    const [binaryState, setBinaryState] = useState(0)
    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch('/api/state', {method: 'GET'});
            const data = await response.json();
            setBinaryState(data.lightState)
        }, 500); // Poll regularly (value in milliseconds)

        return () => clearInterval(interval);
    }, []);
    
    
    return (
        <>
            <div>
                <LivestreamComponent livestreamUrl={''}/>  {/* TODO: insert embed link for livestream here*/}
            </div>    
            <div>
                <StateButton bitPosition={0} binaryState={binaryState}/>
            </div>
            <div>
                <StateButton bitPosition={1} binaryState={binaryState}/>
            </div>
            <div>
                <StateButton bitPosition={2} binaryState={binaryState}/>
            </div>
            <div>
                <StateButton bitPosition={3} binaryState={binaryState}/>
            </div>
            <div>
                <StateButton bitPosition={4} binaryState={binaryState}/>
            </div>
            <div>
                <StateButton bitPosition={5} binaryState={binaryState}/>
            </div>
            <div>
                <StateButton bitPosition={6} binaryState={binaryState}/>
            </div>
        </>
    );
}
