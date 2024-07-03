import './App.css'
import React from 'react'
import { MainNews } from './components/MainNews/MainNews'
import { MainSearch } from './components/MainSearch/MainSearch'
import { Card } from './components/Card/Card'
import { ICard } from './components/Card/interfaceCard'
import { Banner } from './components/Banner/Banner'
import { MainTags } from './components/MainTags/MainTags'


/**основное приложение, которое размещетна странице основные разделы: новости, карточку, поиск и теги */
function App() {

  const card: ICard = {
    label: 'src/png/icons-yandex.png',
    title: 'Работа над ошибками',
    text: 'Смотриет на Яндексе и запоминайте'
  }

  const banner: string = 'src/png/banner.jpg'

  return (
    <>
      <div className='top'>
        <div className='main-news'>
          <MainNews/>
        </div>
        <Card card={card}/>
      </div>
      <div className='main-search'>
        <MainSearch/>
      </div>
      <Banner banner={banner}/>
      <div className='main-tags'>
        <MainTags/>
      </div>
    </>
  )
}

export default App
