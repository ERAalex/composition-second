import './mainBanner.css'

export default function MainBanner(props) {
    // Main banner
    const {img, link} = props

    return (
        <div className="main-banner">
            <a href={link}><img src={img} alt="img" width="600px" height="100px"/></a>
        </div>
    )
}