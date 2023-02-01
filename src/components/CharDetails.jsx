import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import chars from '../chars.json'
import SuperGif from 'libgif'


function CharDetails() {
    const params = useParams();
    const charName = params.char
    let char = chars.characters.find(item => { return item.name == charName });

    const sup1 = useRef(null)
    const gifRef = useRef(null)

    const handleStepForward = () => {
        sup1.current.move_relative(1);
        console.log("step");
    }

    useEffect(() => {
        // only do load if img tag exists. This is to work around strict
        // mode calling useEffect 2x times, which gives us a stale reference
        // to a non-existant img tag, breaking controls
        const tag = document.querySelector('img')
        if (tag) {
            sup1.current = new SuperGif({ gif: gifRef.current, max_width: 500 });
            sup1.current.load();
        }
    }, []);

    return (
        <div className="content">
            <h1 className="h1 color-white text-center">{char.label}</h1>
            <img ref={gifRef} rel:animated_src={import.meta.env.BASE_URL + 'gif/ganon/AttackHi3.gif'} rel:auto_play="0" width="500"></img>
            <input type="button" onClick={handleStepForward} value="Step" />
        </div>
    )
}

export default CharDetails