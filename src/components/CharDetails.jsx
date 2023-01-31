import { useParams } from "react-router-dom"
import chars from '../chars.json'

function CharDetails() {
    const params = useParams();
    const charName = params.char
    let char = chars.characters.find(item => { return item.name == charName });
    return (
        <div className="content">
            <h1 className="h1 color-white text-center">{char.label}</h1>
        </div>
    )
}

export default CharDetails