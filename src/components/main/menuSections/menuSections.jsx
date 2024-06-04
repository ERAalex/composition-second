import './menuSections.css'

export default function MenuSections(props) {
    // Menu sections befor yandex find bar
    
    return (
        <div className="menu-sections">

            {props.props.map((section, index) => (
                <div key={index}>
                    <a href={section.link}><h4>{section.title}</h4></a>
                </div>
            ))}

        </div>
    )
}