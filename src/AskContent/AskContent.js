import React from "react";
import "./AskContent.css"

const AskContent = () => {
    const [yesClick, setYesClick] = React.useState(false);
    const [position, setPostion] = React.useState({ x: null, y: null });

    React.useEffect(() => {
    }, [position]);

    function setNewButtonPositionForNo() {
        var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
        var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
        setPostion({ x: x, y: y });
    }

    return (
        <React.Fragment>
            <div className="container">
                {!yesClick && <div id="mainText">
                    <p>Do you wanna go out with me?</p>
                </div>}
                {yesClick && <div id="mainText">
                    <p>
                        Yeeeyyyy, Can't wait to see you !!
                    </p>
                </div>
                }
                {!yesClick && <div id="askGif">
                    <img src="https://media.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Ask Gif" />
                </div>}
                {yesClick && <div id="askGif">
                    <img src="https://media.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="Yes Gif" />
                </div>}
                {!yesClick && <div className="btns">
                    <button className="btn" id="yesButton" onClick={() => setYesClick(true)}>Yes</button>
                    <button className="btn" id="noButton" style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px` }} onClick={setNewButtonPositionForNo}>No</button>
                </div>}
            </div>
        </React.Fragment >
    );
}

export default AskContent;