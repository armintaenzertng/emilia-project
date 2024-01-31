import mqtt from 'mqtt';


const client = mqtt.connect('mqtt://emilia:emilialicht@mqtt.holunderheiss.org:1883/stateTopic');

client.on('connect', () => {
    console.log('Connected to MQTT broker');
});


let activeState = false;
let binaryState = 0;

export async function POST(request) {
    const body = await request.json()
    let lightNumber = body.n
    
    console.log("toggling light number " + lightNumber)
    binaryState = binaryState ^ 2**lightNumber // XOR toggles the binary representation at the "lightNumber"th digit 
    let binaryStateString = binaryState.toString(2).padStart(7, '0')
    
    console.log("binaryState is now " + binaryState + ". In binary this is " + binaryStateString)

    activeState = !activeState;
    client.publish('stateTopic', binaryStateString);
    
    return Response.json({lightState: binaryState})
}

export async function GET() {
    return Response.json({lightState: binaryState})
}
