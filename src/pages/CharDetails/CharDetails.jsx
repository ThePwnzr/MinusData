import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchChars, fetchCharData } from "../../Utils";

import HitboxModal from '../../components/HitboxModal/HitboxModal.jsx'
import AttackCard from "../../components/AttackCard/AttackCard";

import './CharDetails.css'

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
                    {
                        charData && Object.entries(charData).map(([cat, moves]) =>
                        (
                            moves.length > 0 &&
                            (
                                <section className="moveset-category">
                                    {/* replace underscores with spaces to automate moveset sections via json */}
                                    <h2 className="h2 color-white uppercase">{cat.replace('_', ' ')}</h2>
                                    <div className="gallery-grid">
                                        {
                                            moves.map(item =>
                                                <AttackCard
                                                    key={item.name}
                                                    attack={item}
                                                    preview={`${import.meta.env.BASE_URL}img/gif/${charName}/${item.name}.gif`}
                                                    setSelectedAtk={setSelectedAtk}
                                                    setShowModal={setShowModal}
                                                />
                                            )
                                        }
                                    </div>
                                </section>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CharDetails