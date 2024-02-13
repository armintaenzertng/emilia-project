import {useState} from "react";

export default function LivestreamComponent (livestreamUrl) {
    const [showLivestream, setShowLivestream] = useState(false);

    const handleButtonClick = () => {
        setShowLivestream(true);
    };

    return (
        <div>
            {!showLivestream && (
                <button onClick={handleButtonClick}>Watch Livestream</button>
            )}
            {showLivestream && (
                <iframe
                    src={livestreamUrl}
                    width="560"
                    height="315"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};