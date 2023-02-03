import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"

import './CharDetails.css'
import HitboxModal from '../../components/HitboxModal/HitboxModal.jsx'

async function fetchChars() {
    let data = await fetch(`${import.meta.env.BASE_URL}/data/chars.json`, { mode: 'no-cors' });
    return data.json()
}

async function fetchCharData(charName) {
    let data = await fetch(`${import.meta.env.BASE_URL}/data/${charName}/${charName}.json`);
    return data.json();
}

function CharDetails() {
    const params = useParams();
    const charName = params.char;
    let [charLabel, setCharLabel] = useState('');
    let [charData, setCharData] = useState(null);
    let [showModal, setShowModal] = useState(false);
    let [selectedAtk, setSelectedAtk] = useState(null);

    useEffect(() => {
        async function initData() {
            let [chars, data] = await Promise.all([
                fetchChars(),
                fetchCharData(charName)
            ])

            setCharLabel(chars.characters.find(item => item.name == charName).label);
            setCharData(data);
        }

        initData()

    }, []);

    return (
        <div className="page-wrapper">
            <div className="content content-wide">
                <div className="page-title">
                    <h1 className="h1 color-white text-center">{charLabel}</h1>
                </div>
                <div className="content-wrapper">
                    {showModal && <HitboxModal setShowModal={setShowModal} charName={charName} selectedAttack={selectedAtk} />}
                    <section className="grounded-moves">
                        <h2 className="h2 color-white">Grounded Moves</h2>
                        <div className="gallery-grid">
                            {
                                charData?.grounded_attacks.length > 0 &&
                                (charData?.grounded_attacks.map(item =>
                                    <div className="attack-card" key={item.name}>
                                        <h3 className="h3 color-white">{item.label}</h3>
                                        <div className="image-wrapper">
                                            <img className='attack-preview'
                                                loading="lazy"
                                                src={`${import.meta.env.BASE_URL}img/gif/${charName}/${item.name}.gif`}
                                                width="300"
                                                onClick={() => {
                                                    setSelectedAtk(item);
                                                    setShowModal(true);
                                                }} />
                                        </div>
                                        {
                                            item.stats.length > 0 &&
                                            (item.stats.map(stat =>
                                                <div className="move-stat" style={{ backgroundColor: stat.color }}>
                                                    <span>{stat.label}: </span><span>{stat.value}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CharDetails