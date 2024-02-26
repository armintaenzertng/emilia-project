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
            <div className={'justify-center'}>
                <Header/>
                <p className="p-2 m-2">Control the light in the room by toggling the switches on and off.</p>
                <div className="p-2 m-2">
                    <LivestreamComponent livestreamUrl={''}/> {/* TODO: insert embed link for livestream here*/}
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
                <Footer/>
            </div>
        </>
    );
}

function Header() {
    return (
        <>
            <h1>Illuminated Nothing</h1>
            <p className="p-2 m-2">24h Performance by EMILIA VOGT</p>
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
