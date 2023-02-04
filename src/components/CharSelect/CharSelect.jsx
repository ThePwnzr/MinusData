import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharData, fetchChars } from '../../Utils'
import './CharSelect.css'

function CharaIcon({ name, label, icon, enabled }) {
    return (
        <Link to={'/details/' + name}>
            <img
                className={`char-icon${enabled ? '' : ' disabled'}`}
                src={import.meta.env.BASE_URL + 'img/icons/' + icon}
            />
        </Link>
    )
}

function CharaSelect() {
    let [rows, setRows] = useState([]);
    let [enabledChars, setEnabledChars] = useState([])

    useEffect(() => {
        async function initData() {
            let data = await fetchChars()

            const tmpEnabled = [];
            const tmpRows = [];
            for (let i = 0; i < data.characters.length; i++) {
                let item = data.characters[i];
                let charData = await fetchCharData(item.name);
                if (charData) {
                    tmpEnabled.push(item.name);
                }

                if (i % 10 == 0) {
                    tmpRows.push(data.characters.slice(i, i + 10));
                }
            }
            setRows(tmpRows);
            setEnabledChars(tmpEnabled);
        }

        initData();
    }, [])


    return (
        <>
            {
                rows.map((chunk, i) =>
                    <div key={i} className="chara-row">
                        {
                            chunk.map((char =>
                                <CharaIcon key={char.name}
                                    name={char.name}
                                    label={char.label}
                                    icon={char.icon}
                                    enabled={enabledChars.includes(char.name)}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}

export default CharaSelect