import {useState} from "react";

export default function LivestreamComponent ({livestreamUrl}) {
    const [showLivestream, setShowLivestream] = useState(false);

    const handleButtonClick = () => {
        setShowLivestream(true);
    };

    return (
        <div>
            {!showLivestream && (
                <button className="text-white font-bold py-2 px-4 border-lime-400 border rounded"
                        onClick={handleButtonClick}>Watch Livestream</button>
            )}
            {showLivestream && (
                <div className="aspect-ratio-wrapper">
                    <iframe
                        src={livestreamUrl}
                        scrolling={"no"}
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};
