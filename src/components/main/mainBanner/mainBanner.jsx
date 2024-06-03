

export default function MainBanner(props) {
    // Main banner
    const {img, link} = props

    return (
        <div>
            <a href={link}><img src={img} alt="img"/></a>
        </div>
    )
}