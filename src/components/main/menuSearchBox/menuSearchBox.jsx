import './menuSearchBox.css'

export default function MenuSearchBox(props) {
    // Menu search box
    const {logo, random_text, random_link} = props
    return (
        <div className="search-box">
            <div className="search-left">
                <img src={logo} alt="logo"/>
                <div className="search-box-item">
                    <input type="text" placeholder="Поиск в Яндексе"/>
                    <button>Найти</button>
                </div>
            </div>
            <div>Найдется все, например, {random_text} <a href={random_link}>{random_link}</a></div>

        </div>
    )
}