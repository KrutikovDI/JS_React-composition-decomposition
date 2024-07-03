import React from 'react'
import classes from './weather.module.css'
import { WeatherData } from '../interfaceTags'

interface propsIWeather{
  data: WeatherData
}

/**Компонент содержит детей отсновного компонента Tags и отрисовывает тег с погодой */
export const Weather = (props: propsIWeather) => {
    const { png, temp, morning, day } = props.data
  return (
<div className={classes['weather']}>
    <img className={classes['img']} src={png} alt=""/>
    <div className={classes['temp']}>{temp}</div>
    <div className={classes['day-morning']}>
        <div>{`Утром${morning},`}</div>
        <div>{`Днем${day}`}</div>
    </div>
</div>
  )
}
