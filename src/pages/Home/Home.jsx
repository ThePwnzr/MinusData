
import CharaSelect from "../../components/CharSelect/CharSelect.jsx"
function Home() {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="content-wrapper">
                    <h2 className="h2 color-white text-center">Choose Your Character</h2>
                    <CharaSelect />
                </div>
            </div>
        </div>
    )
}

export default Home;