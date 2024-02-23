let lastUserCount = 0;
let currentUserCount = 0;
let intervalSet = false;

const intervalLength = 5000;  // keep this number in sync with the frontend polling interval

function setupInterval() {
    setInterval(() => {
        lastUserCount = currentUserCount;
        currentUserCount = 0;
        console.log("userCount in the last 5 seconds: " + lastUserCount)
    }, intervalLength);
    intervalSet = true;
}

export async function GET() {
    // Important: make sure that the first GET call has sufficient time to reach "intervalSet = true" before the second call, otherwise there will be more than one interval resetting the counter
    if (!intervalSet) {
        setupInterval()
    }
    currentUserCount++;

    return Response.json({userCount: lastUserCount})
}
