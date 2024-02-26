let lastUserCount = 0;
let currentUserCount = 0;
let intervalStart = Date.now();

const intervalLength = 5000;  // keep this number in sync with the frontend polling interval

export async function GET() {
    const now = Date.now();
    const elapsed = now - intervalStart;

    if (elapsed >= intervalLength) {
        lastUserCount = currentUserCount;
        currentUserCount = 1; // Reset for the new interval, count this call as the first
        intervalStart = now;
        console.log("userCount in the last 5 seconds: " + lastUserCount)
    } else {
        currentUserCount++;
    }

    return Response.json({ userCount: lastUserCount });
}
