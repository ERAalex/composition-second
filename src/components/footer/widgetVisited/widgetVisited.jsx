import './widgetVisited.css'
import Widget from "../widgetItem/widgetItem.jsx";

export default function WidgetVisited(props) {


    return (
        <Widget title="Посещаемое">
            <div>
                {props.props.map((visited, index) => (
                    <div key={index}>
                        <a href={visited.link}><h4>{visited.title}</h4></a>
                        <p>{visited.text}</p>
                    </div>
                ))}
            </div>
        </Widget>
    );
}