import React from "react";
import "./AskContent.css"

const AskContent = () => {
    const [yesClick, setYesClick] = React.useState(false);

    return (
        <React.Fragment>
            <div className="container">
                {!yesClick && <div id="mainText">
                    <p>Do you wanna go out with me?</p>
                </div>}
                {yesClick && <div id="mainText">
                    <p>
                        Yeeeyyyy, Can't wait to meet you !!
                    </p>
                </div>
                }
                {!yesClick && <div id="askGif">
                    <img src="https://media.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Ask Gif" />
                </div>}
                {yesClick && <div id="askGif">
                    <img src="https://media.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" alt="Yes Gif" />
                </div>}
                <div className="btns">
                    <button className="btn" onClick={() => setYesClick(true)}>Yes</button>
                    <button className="btn" onClick={() => setYesClick(false)}>No</button>
                </div>
            </div>
        </React.Fragment >
    );
}

export default AskContent;