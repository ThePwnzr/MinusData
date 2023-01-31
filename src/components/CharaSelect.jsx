import { Link } from 'react-router-dom';
import chars from '../chars.json'

function CharaIcon({ name, label, icon }) {
    return (
        <Link to={'/details/' + name}>
            <img src={import.meta.env.BASE_URL + '/character_images/' + icon} className='char-icon' />
        </Link>
    )
}

function CharaSelect() {
    const chunks = [];
    for (let i = 0; i < chars.characters.length; i += 10) {
        chunks.push(chars.characters.slice(i, i + 10));
    }
    return (
        <>
            {
                chunks.map((chunk =>
                    <div className="chara-row">
                        {
                            chunk.map((char =>
                                <CharaIcon name={char.name} label={char.label} icon={char.icon} />
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
}

export default CharaSelect