import React, { useState } from 'react'

export default function MessageSend(props) {
    const [messageText, setMessageText] = useState("")

    function currentMessageChanged(e) {
        setMessageText(e.target.value);
    }

    function messageClick(e) {
        e.preventDefault();
        if (messageText.length > 0) {
            props.sendMessageData(messageText, props.choosenMember.uuid)
            setMessageText("")
        }
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
                    onClick={messageClick}
                >
                    Send
            </button>
            </form>
        </section>
    )
}
