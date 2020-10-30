import React, { useState } from 'react'

export default function MessageSend(props) {
    const [messageText, setMessageText] = useState("")

    function currentMessageChanged(e) {
        setMessageText(e.target.value);
    }

    function sendMessageClicked(){
        
    }

    return (
        <section className="MessageSend">
            <form>
                <input
                    type="text"
                    value={messageText}
                    onChange={currentMessageChanged}
                    placeholder="Type message to send" />
                <button
                    type="submit"
                    onClick={sendMessageClicked}
                >
                    Send
            </button>
            </form>
        </section>
    )
}
