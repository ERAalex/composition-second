import Widget from "../widgetItem/widgetItem.jsx";
import './widgetWeather.css'

export default function WeatherWidget(props) {
  const {icon, temp_now, temp_morining, temp_evening, link} = props
  console.log(temp_now)

  return (
    <Widget title="Погода">
      <div className="weather-items">

        <div className="weather-item-left">
          <div><a href={link}>{icon}</a></div>
          <div>{temp_now}</div>
        </div>

        <div className="weather-item-right">
          <div>Утром {temp_morining}</div>
          <div>Днем {temp_evening}</div>
        </div>
        
      </div>
    </Widget>
  );
}
