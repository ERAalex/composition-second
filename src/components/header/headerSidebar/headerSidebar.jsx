import './headerSidebar.css'

export default function HeaderSidebar(props) {
    // Header and sidebar
    const {img, title, text} = props
    return (
        <div className="sidebar-container">
            <img src={img} className="sidebar-img" alt="img"/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
