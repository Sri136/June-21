import React from 'react';

function NoteBox({ title, content }) {
    return (
        <div className="note-box">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default NoteBox;
