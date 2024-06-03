

export default function HeaderSidebar(props) {
    // Header and sidebar
    const {img, title, text} = props
    return (
        <div>
            <img src={img} alt="img"/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}
