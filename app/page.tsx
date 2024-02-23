"use client"

import StateButton from '../components/StateButton';
import {useEffect, useState} from "react";
import LivestreamComponent from "../components/LiveStreamComponent";

const statePollingInterval = 500;  // poll every x milliseconds
const userCountPollingInterval = 5000;  // keep this number in sync with the userCount GET method

export default function Home() {
    
    // This polls for the current state of the lamps at regular intervals. The state is shared by all lamps, their bitPosition determines if they are on or off.
    const [binaryState, setBinaryState] = useState(0)
    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch('/api/state', {method: 'GET'});
            const data = await response.json();
            setBinaryState(data.lightState)
        }, statePollingInterval);

        return () => clearInterval(interval);
    }, []);
    
    // This polls for the current user count (people that have the site open) by tracking these polls
    const [userCount, setUserCount] = useState(0)
    useEffect(() => {
        const fetchUserCount = async () => {
            const response = await fetch('api/userCount', {method: 'GET'});
            const data = await response.json();
            setUserCount(data.userCount)
        }
        
        const interval = setInterval(fetchUserCount, userCountPollingInterval);
        
        return () => clearInterval(interval)
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
            <div>
                Number of active users: {userCount}
            </div>
        </>
    );
}
