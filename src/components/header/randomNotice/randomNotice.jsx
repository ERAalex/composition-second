


export default function RandomNotice(props) {
    // Random notice component at the top of the page
    const {title, text, link, date} = props

    return (
        <div>
            <a href={link}><h1>{title}</h1></a>
            <p>{text}</p>
            <p>{date}</p>
        </div>
    )
}




