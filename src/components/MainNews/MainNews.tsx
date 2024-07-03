import React from 'react'
import { INew, IRate, IRecommendation } from './interfaceNews'
import { News } from './News/News'
import { Recommendations } from './Recommendations/Recommendations'
import { ExchangeRate } from './ExchangeRate/ExchangeRate'


/**Компонет отвечает за новостной блок сверху страницы, включает в себя НОвости, курс валют и рекоммендации. Используется в приложении App */
export const MainNews = () => {

    const news: INew[] = [
        {icon: 'src/png/icon-news.png', description: 'Путин упростил получение водительских прав', link: '#'},
        {icon: 'src/png/icon-news.png', description: 'В команде Зеленского раскрыли план реформ на Украине', link: '#'},
        {icon: 'src/png/icon-news.png', description: 'Турпомощь прокомментировала гибель десятков россиян в Анталье', link: '#'},
        {icon: 'src/png/icon-news.png', description: 'Суд закрыл дело Демпартии США против России', link: '#'},
        {icon: 'src/png/icon-news.png', description: 'На Украине призвали создать ракеты для удара по Москве', link: '#'}
      ]
    
      const recommendations: IRecommendation[] = [{text:'Сейчас в СМИ', link: '#'}, {text: 'в Германии', link: '#'}, {text: 'Рекомендуем', link: '#'}]
      
      const rate: IRate[] = [
        {currency: 'USD MOEX', rate: 63.52, dynamics: '+0,09'},
        {currency: 'EUR MOEX', rate: 70.86, dynamics: '+0,14'},
        {currency: 'НЕФТЬ',rate: 64.90, dynamics: '+1,63%'}
      ]
  return (
    <>
        <Recommendations recommendations={recommendations}/>
        <News news={news}/>
        <ExchangeRate rates={rate}/>
    </>
  )
}