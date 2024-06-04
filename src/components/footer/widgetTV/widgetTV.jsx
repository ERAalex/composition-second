import Widget from "../widgetItem/widgetItem.jsx";

export default function WidgetTV(props) {

  return (
    <Widget title="Телепрограмма">
        <div>
            {props.props.map((tv, index) => (
                <div key={index}>
                    <a href={tv.link}><h4>{tv.time}</h4></a>
                    <p>{tv.text}</p>
                    <p>{tv.channel}</p>

                </div>
            ))}
        </div>
    </Widget>
);

}
