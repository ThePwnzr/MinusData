import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CharaIcon({ name, label, icon }) {
    return (
        <Link to={'/details/' + name}>
            <img src={import.meta.env.BASE_URL + 'img/icons/' + icon} className='char-icon' />
        </Link>
    )
}

function CharaSelect() {
    let [chars, setChars] = useState(null);
    const chunks = [];

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/data/chars.json`, { mode: 'no-cors' })
            .then(response => response.json())
            .then(data => setChars(data))
            .catch(error => console.log(error));
    }, [])

    for (let i = 0; i < chars?.characters.length; i += 10) {
        chunks.push(chars.characters.slice(i, i + 10));
    }
    return (
        <>
            {
                chunks.map((chunk =>
                    <div className="chara-row">
                        {
                            chunk.map((char =>
                                <CharaIcon name={char.name} label={char.label} icon={char.icon} key={char.name} />
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
}

export default CharaSelect