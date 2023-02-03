import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CharaIcon({ name, label, icon }) {
    return (
        <Link to={'/details/' + name}>
            <img className='char-icon' src={import.meta.env.BASE_URL + 'img/icons/' + icon} />
        </Link>
    )
}

function CharaSelect() {
    let [chars, setChars] = useState(null);
    const chunks = [];

    useEffect(() => {

        async function initData() {
            let data = await (await fetch(`${import.meta.env.BASE_URL}/data/chars.json`, { mode: 'no-cors' })).json()
            // let data = await response.json();
            setChars(data);
        }

        initData();
    }, [])

    for (let i = 0; i < chars?.characters.length; i += 10) {
        chunks.push(chars.characters.slice(i, i + 10));
    }
    return (
        <>
            {
                chunks.map((chunk, i) =>
                    <div key={i} className="chara-row">
                        {
                            chunk.map((char =>
                                <CharaIcon key={char.name} name={char.name} label={char.label} icon={char.icon} />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}

export default CharaSelect