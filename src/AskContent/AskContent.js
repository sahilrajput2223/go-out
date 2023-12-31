import React from "react";
import "./AskContent.css"
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

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

    function handleYesEvent() {
        Swal.fire({
            title: "Let's lock in a date! 🔐😍",
            html:
                '<input type="text" id="name" class="swal2-input" placeholder="Your name" required>' +
                '<textarea id="message" class="swal2-textarea" rows="4" cols="30" placeholder="Type your message..." required></textarea>',
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            preConfirm: async () => {
                const name = document.getElementById('name').value;
                const message = document.getElementById('message').value;
                if (!name || !message) {
                    Swal.showValidationMessage('Both details are required');
                } else {
                    await emailjs.send("service_o9sgowm", "template_bf6jgjj", {
                        from_name: name,
                        to_name: "Sahil Rajput",
                        message: message,
                        reply_to: name,
                        form_email: name,
                        to_email: "rajputsahil.2204@gmail.com",
                    }, 'pyzpVvAW8eSCEEr5B').then(() => {
                        Swal.fire({
                            confirmButtonText: "Thanks 😀",
                            imageUrl: "https://media.giphy.com/media/R0vZfqXm0zIhz32l2v/giphy.gif",
                            imageAlt: "You Are Precious"
                        });
                    })
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                setYesClick(true)
            }
        });
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
                    <button className="btn" id="yesButton" onClick={handleYesEvent}>Yes</button>
                    <button className="btn" id="noButton" style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px` }} onClick={setNewButtonPositionForNo} onMouseOver={setNewButtonPositionForNo}>No</button>
                </div>}
            </div>
        </React.Fragment >
    );
}

export default AskContent;