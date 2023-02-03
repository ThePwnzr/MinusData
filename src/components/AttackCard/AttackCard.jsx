import './AttackCard.css'

function AttackCard({ attack, preview, setSelectedAtk, setShowModal }) {
    return (
        <div className="attack-card">
            <h3 className="h3 color-white">{attack.label}</h3>
            <div className="image-wrapper">
                <img className='attack-preview'
                    loading="lazy"
                    src={preview}
                    width="300"
                    onClick={() => {
                        setSelectedAtk(attack);
                        setShowModal(true);
                    }} />
            </div>
            {
                attack.stats.length > 0 &&
                (attack.stats.map(stat =>
                    <div className="move-stat" style={{ backgroundColor: stat.color }}>
                        <span>{stat.label}: </span><span>{stat.value}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default AttackCard