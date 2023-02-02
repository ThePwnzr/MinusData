import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"

import HitboxModal from './HitboxModal/HitboxModal.jsx'



async function fetchChars() {
    let data = await fetch('/data/chars.json', { mode: 'no-cors' });
    return data.json()
}

async function fetchCharData(charName) {
    let data = await fetch(`/data/${charName}/${charName}.json`);
    return data.json();
}

function CharDetails() {
    const params = useParams();
    const charName = params.char;
    let [charLabel, setCharLabel] = useState('');
    let [charData, setCharData] = useState(null);
    let [showModal, setShowModal] = useState(false);
    let [selectedAtk, setSelectedAtk] = useState(null);

    const sup1 = useRef(null);
    const gifRef = useRef(null);

    useEffect(() => {
        async function initData() {
            let chars = await fetchChars();
            setCharLabel(chars.characters.find(item => item.name == charName).label);

            let data = await fetchCharData(charName);
            setCharData(data);
        }

        initData()



    }, []);

    return (
        <div className="page-wrapper">
            <div className="content content-wide">
                <h1 className="h1 color-white text-center">{charLabel}</h1>
                {showModal && <HitboxModal setShowModal={setShowModal} charName={charName} selectedAttack={selectedAtk} />}
                <div className="gallery-grid">
                    {
                        charData?.grounded_attacks.map(item =>
                            <img className='attack-preview' src={import.meta.env.BASE_URL + `img/gif/${charName}/${item.name}.gif`}
                                width="300"
                                onClick={() => {
                                    setShowModal(true);
                                    setSelectedAtk(item.name);
                                }}></img>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CharDetails