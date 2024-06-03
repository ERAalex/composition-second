import { useState } from 'react'
import './App.css'

// Headers imports
import RandomNotice from './components/header/randomNotice/randomNotice.jsx'
import {itemDataNotices, itemDataHeaderSidebar, itemDataMenuSections} from './components/data.js' 
import ItemsNotices from './components/header/itemsNotice/itemsNotice.jsx'
import HeaderSidebar from './components/header/headerSidebar/headerSidebar.jsx'

// main body imports
import MenuSections from './components/main/menuSections/menuSections.jsx'
import MenuSearchBox from './components/main/menuSearchBox/menuSearchBox.jsx'
import MainBanner from './components/main/mainBanner/mainBanner.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <header>
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
          
        </footer>


      </div>

    </>
  )
}

export default App
