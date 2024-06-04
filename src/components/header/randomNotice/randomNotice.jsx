import './randomNotice.css'


export default function RandomNotice(props) {
    // Random notice component at the top of the page
    const {title, text, link, date} = props

    return (
        <div className="random-notice">
            <a href={link}><h3>{title}</h3></a>
            <p>{text}</p>
            <p>{date}</p>
        </div>
    )
}




