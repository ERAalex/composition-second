

export default function MenuSearchBox(props) {
    // Menu search box
    const {logo, random_text, random_link} = props
    return (
        <div>
            <img src={logo} alt="logo"/>
            <h1>Яндекс.Поиск</h1>
            <div className="search-box-item">
                <input type="text" placeholder="Поиск в Яндексе"/>
                <button>Найти</button>
            </div>
            <div>Найдется все, например, {random_text} <a href={random_link}>{random_link}</a></div>

        </div>
    )
}