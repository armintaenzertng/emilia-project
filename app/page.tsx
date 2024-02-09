"use client"

import StateButton from '../components/StateButton';

export default function Home() {

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
        </>
    );
}
