import React from "react";
import "./AskContent.css"

const AskContent = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div id="mainText">
                    <p>Do you wanna go out with me?</p>
                </div>
                <div id="askGif">
                    <img src="https://media.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Ask Gif" />
                </div>
                <div className="btns">
                    <button className="btn">Yes</button>
                    <button className="btn">No</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AskContent;