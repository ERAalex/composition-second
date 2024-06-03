

export default function MenuSections(props) {
    // Menu sections befor yandex find bar
    
    return (
        <div>

            {props.props.map((section) => (
                <div>
                    <a href={section.link}><h1>{section.title}</h1></a>
                </div>
            ))}

        </div>
    )
}