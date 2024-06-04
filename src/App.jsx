import { useState } from 'react'
import './App.css'

// Headers imports
import RandomNotice from './components/header/randomNotice/randomNotice.jsx'
import {itemDataNotices, itemDataHeaderSidebar, itemDataMenuSections, itemDataWeatherWidget, itemDataWidgetVisited, itemDataWidgetTV} from './components/data.js' 
import ItemsNotices from './components/header/itemsNotice/itemsNotice.jsx'
import HeaderSidebar from './components/header/headerSidebar/headerSidebar.jsx'

// main body imports
import MenuSections from './components/main/menuSections/menuSections.jsx'
import MenuSearchBox from './components/main/menuSearchBox/menuSearchBox.jsx'
import MainBanner from './components/main/mainBanner/mainBanner.jsx'

// footer imports
import Widget from './components/footer/widgetItem/widgetItem.jsx'
import WeatherWidget from './components/footer/widgetWeather/widgetWeather.jsx'
import WidgetTV from './components/footer/widgetTV/widgetTV.jsx'
import WidgetVisited from './components/footer/widgetVisited/widgetVisited.jsx'

function App() {

  return (
    <>
      <div className="app">

        <header className="header-container">
          <div className="notice">
            <RandomNotice 
            title="Title" 
            text="Text" 
            link="https://www.google.com"
            date="Date" />
            {itemDataNotices.map((notice) => (
            <ItemsNotices
              key={notice.title}
              {...notice} />
           ))}
          </div>
          <div className="sidebar">
            <HeaderSidebar 
            img={itemDataHeaderSidebar[0].img} 
            title={itemDataHeaderSidebar[0].title} 
            text={itemDataHeaderSidebar[0].text} />
          </div>
        </header>
        

        <main>
          <div className="menu-sections">
            <MenuSections props={itemDataMenuSections} />
          </div>
          <div className="search-box">
            <MenuSearchBox 
            logo="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            random_text="Random text" 
            random_link="https://www.google.com" />
          </div>
          <div className="banner">
            <MainBanner 
            img="https://picsum.photos/id/237/200/300" 
            link="https://mail.ru/" />
          </div>
        </main>

        <footer>
          <div className="footer-widgets">
            <WeatherWidget 
            icon={itemDataWeatherWidget[0].icon}
            temp_now={itemDataWeatherWidget[0].temp_now}
            temp_morining={itemDataWeatherWidget[0].temp_morining}
            temp_evening={itemDataWeatherWidget[0].temp_evening}
            link={itemDataWeatherWidget[0].link} />

            <WidgetVisited props={itemDataWidgetVisited} />

            <WidgetTV props={itemDataWidgetTV} />
                        
          </div>

        </footer>


      </div>

    </>
  )
}

export default App
