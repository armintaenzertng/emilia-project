"use client"

import StateButton from '../components/StateButton';
import {useEffect, useState} from "react";
import LivestreamComponent from "../components/LiveStreamComponent";

const statePollingInterval = 500;  // poll every x milliseconds
const userCountPollingInterval = 5000;  // keep this number in sync with the userCount GET method
const livestreamEmbedLink = "https://www.dorftv.at/embed/ovenmedia/95"

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
    // const [userCount, setUserCount] = useState(0)
    // useEffect(() => {
    //     const fetchUserCount = async () => {
    //         const response = await fetch('api/userCount', {method: 'GET'});
    //         const data = await response.json();
    //         setUserCount(data.userCount)
    //     }
    //
    //     const interval = setInterval(fetchUserCount, userCountPollingInterval);
    //
    //     return () => clearInterval(interval)
    // }, []);


    return (
        <>
            <div className={'justify-center'}>
                <Header/>
                <p className="p-2 m-2">Control the light in the room by toggling the switches on and off.</p>
                <div className="p-2 m-2">
                    <LivestreamComponent livestreamUrl={livestreamEmbedLink}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={0} binaryState={binaryState}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={1} binaryState={binaryState}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={2} binaryState={binaryState}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={3} binaryState={binaryState}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={4} binaryState={binaryState}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={5} binaryState={binaryState}/>
                </div>
                <div className="p-2 m-1">
                    <StateButton bitPosition={6} binaryState={binaryState}/>
                </div>
                {/*<div className="p-2 m-1">*/}
                {/*    Number of active users: {userCount}*/}
                {/*</div>*/}
                <Footer/>
            </div>

        </>
    );
}

function Header() {
    return (
        <>
            <h1 className="text-xl md:text-2xl">Illuminated Nothing</h1>
            <p className="p-2 m-2">24h Performance by<br/> EMILIA VOGT</p>
            <p>2.3. 5pm - 3.3. 5pm</p>
        </>
    );
}

function Footer() {
    return (
        <>
            <p className="p-3 m-4 pb-8">The performance „Illuminated Nothing“ focuses on doing nothing by having the performer Emilia Vogt
                spend 24 hours in a room that is publicly visible. Doing nothing is defined by basic life-sustaining
                needs such as breathing, sitting, lying down, standing, eating, drinking and using the toilet; all
                active activities are consciously avoided.
                The performer’s inaction is contrasted with the influence from outside, which is made clear by the
                heteronomy of lights in the room. Seven lights in the room can be switched on and off as desired via
                an interactive website.
                The performance can be viewed on site and via a live stream. People around the world are invited to
                influence and watch the performance.</p>
        </>
    );
}
