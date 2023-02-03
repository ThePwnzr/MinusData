import { useEffect, useRef, useState } from 'react'
import SuperGif from 'libgif'

import './HitboxModal.css'

function HitboxModal({ setShowModal, charName, selectedAttack }) {
    const gifRef = useRef(null);
    const sup1 = useRef(null);

    let [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // only do load if img tag exists. This is to work around strict
        // mode calling useEffect twice, which gives us a stale reference
        // to a non-existant img tag and breaking all gif controls.
        const tag = document.querySelector('.gif-playback')
        if (tag) {
            sup1.current = new SuperGif({ gif: gifRef.current, max_width: 500 });
            sup1.current.load();
            window.gif = sup1.current;
        }
    }, [])

    const handleStepForward = () => {
        sup1.current.move_relative(1);
    }
    const handleStepBackward = () => {
        sup1.current.move_relative(-1);
    }

    const handlePlayPause = () => {
        if (isPlaying) {
            sup1.current.pause();
            setIsPlaying(false);
        }
        else {
            sup1.current.play();
            setIsPlaying(true);
        }
    }

    return (
        <div className="modal-wrapper">
            <div className='modal-overlay' onClick={() => setShowModal(false)}></div>
            <div className="hitbox-modal">
                <div className="modal-close">
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <h2 className="h2 color-white">{selectedAttack.label}</h2>
                <img className="attack-preview gif-playback"
                    ref={gifRef}
                    rel:animated_src={import.meta.env.BASE_URL + `img/gif/${charName}/${selectedAttack.name}.gif`}
                    rel:auto_play="0"
                />
                <div className="preview-controls">
                    <button className='gif-control' onClick={() => handleStepBackward()}>Prev</button>
                    <button className='gif-control' onClick={() => handlePlayPause()}>{isPlaying ? "Pause" : "Play"}</button>
                    <button className='gif-control' onClick={() => handleStepForward()}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default HitboxModal