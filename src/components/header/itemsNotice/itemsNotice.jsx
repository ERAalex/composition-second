


export default function ItemsNotices(props) {
    // A list of notices in the header
    const {title, img, link} = props

    return (
        <div>
            <img src={img} alt="img"/>
            <a href={link}><h1>{title}</h1></a>
        </div>
    )
}




