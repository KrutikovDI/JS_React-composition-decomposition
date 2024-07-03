import React from 'react'
import classes from './visited.module.css'
import { IData } from '../interfaceTags'

interface propsIData {
    data: IData[]
}

 
/**Компонент содержит детей отсновного компонента Tags и отрисовывает списки разделов */
export const Visited = (props: propsIData) => {
  return (
    <>
    {props.data.map(i => (
      <div key={i.text} className={classes['conteiner']}>
        <div>{`${i.name} ${i.text}`}</div>
        <div className={classes['addit']}>{i.addit}</div>
      </div>
    ))}
    </>
  )
}
