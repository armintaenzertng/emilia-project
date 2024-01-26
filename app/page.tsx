"use client"

import {useEffect, useState} from 'react';
import StateButton from '../components/StateButton';
import mqtt from "mqtt";

export default function Home() {

    // useEffect(() => {
    //     const client = mqtt.connect('ws://localhost:1884/mqtt'); // Use WebSocket protocol for the browser
    //
    //     client.on('connect', () => {
    //         console.log('Connected to MQTT broker in the frontend');
    //         client.subscribe('stateTopic');
    //     });
    //
    //     client.on('message', (topic, message) => {
    //         if (topic === 'stateTopic') {
    //             const data = JSON.parse(message.toString());
    //             setActive(data.active);
    //         }
    //     });
    //
    //     return () => {
    //         client.end();
    //     };
    // }, []);
    
    
    return (
        <>
            <div>
                <StateButton bitPosition={0}/>
            </div>
            <div>
                <StateButton bitPosition={1}/>
            </div>
            <div>
                <StateButton bitPosition={2}/>
            </div>
            <div>
                <StateButton bitPosition={3}/>
            </div>
            <div>
                <StateButton bitPosition={4}/>
            </div>
            <div>
                <StateButton bitPosition={5}/>
            </div>
            <div>
                <StateButton bitPosition={6}/>
            </div>
            {/*<div>*/}
            {/*    <StateButton onClick={() => toggleActive(6)} active={active}/>*/}
            {/*</div>*/}
        </>
    );
}

/* start mosquitto

use .\mosquitto_pub -t 'stateTopic' -m "hallo" and  .\mosquitto_sub -t 'stateTopic' -v
 currently, the mosquitto.conf is configured to listen on 1883 and via websockets on 1884 (this doesn't work currently with the above code :( )
 */