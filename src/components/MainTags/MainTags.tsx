import React from 'react'
import { Weather } from './Tags/Weather/Weather'
import { IWeather, IVisited } from './Tags/interfaceTags'
import { Tags } from './Tags/Tags'
import { Visited } from './Tags/Visited/Visited'
import { ImageTag } from './Tags/ImageTag/ImageTag'


/**Это основной тег, отвечающий за разделы под подиским внизу стриницы, используется в App */
export const MainTags = () => {
  const weather: IWeather = {
    header: 'Погода',
    data: {png: 'src/png/weather_1854690.png', temp: '+17', morning: '+17', day: '+20'},
  };
  const visited: IVisited = {
    header: 'Посещаемое',
    data: [{name: 'Недвижимость', text: '- о сталинках', addit: ''}, {name: 'Маркет', text: '- люстры и светильники', addit: ''}, {name: 'Авто.ру', text: '- привод 4х4 до 500 000', addit: ''}]
  }

  const geography: IVisited = {
    header: 'Карта Германии',
    data: [{name: 'Расписания', text: '', addit: ''}]
  }

  const TVProgram: IVisited = {
    header: 'Телепрограмма',
    data: [{name: '02:00', text: 'ТНТ Best', addit: 'ТНТ International'}, {name: '02:15', text: 'Джинглики', addit: 'Карусель INT'}, {name: '02:25', text: 'Наедине со всеми', addit: 'Первый'}]
  }

  const broadcast: IVisited = {
    header: 'Эфир',
    data: [
      {name: 'src/png/rightarrow1_121323.png', text: 'Управление как искусство', addit: 'Успех'},
      {name: 'src/png/rightarrow1_121323.png', text: 'Ночь. Мир в это время', addit: 'earth TV'},
      {name: 'src/png/rightarrow1_121323.png', text: 'Андрей возн...', addit: 'Совершенно секретно'},
    ]
  }
  
  return (
    <>
      <Tags header={weather.header}>
        <Weather data={weather.data}/>
      </Tags>

      <Tags header={geography.header}>
        <Visited data={geography.data}/>
      </Tags>

      <Tags header={broadcast.header}>
        <ImageTag data={broadcast.data}/>
      </Tags>

      <Tags header={visited.header}>
        <Visited data={visited.data}/>
      </Tags>

      <Tags header={TVProgram.header}>
        <Visited data={TVProgram.data}/>
      </Tags>

    </>
  )
}
