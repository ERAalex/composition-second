import './itemsNotice.css'

export default function ItemsNotices(props) {
    // A list of notices in the header
    const {title, img, link} = props

    return (
        <div className="notice-items-container">
            <img src={img} className="notice-img" alt="img"/>
            <a href={link}><h4>{title}</h4></a>
        </div>
    )
}




