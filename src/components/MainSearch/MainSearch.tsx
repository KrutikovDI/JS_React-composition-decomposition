import React from 'react'
import { Section } from './Section/Section'
import { Search } from './Search/Search'
import { Tooltip } from './Tooltip/Tooltip'
import { ISearchSections, ITooltip } from './interfaceSearch'


/**Основной блок поиска, включает в себя разделы, строку поиска и подсказку под строкой поиска, используется в App */
export const MainSearch = () => {
  const searchSections: ISearchSections[] = [
    {section: 'Видео', link: '#'},
    {section: 'Картинки', link: '#'},
    {section: 'Новости', link: '#'},
    {section: 'Карты', link: '#'},
    {section: 'Маркет', link: '#'},
    {section: 'Переводчик', link: '#'},
    {section: 'Эфир', link: '#'},
    {section: 'ещё', link: '#'},
  ]

  const icon: string = 'src/png/icons-yandex.png'

  const tooltip: ITooltip = {title: 'Найдется всё. Например, ', text: 'фаза луны сегодня'}

  return (
    <>
    <Section sections={searchSections}/>
    <Search icon ={icon}/>
    <Tooltip tooltip={tooltip}/>
    </>
  )
}
