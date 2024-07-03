import React from 'react'
import classes from './section.module.css'
import { ISearchSections } from '../interfaceSearch'

interface PropsSearchSections {
  sections: ISearchSections[]
}

/**Компонент отрисовывает рахделы над строкой поиска в NainSearch */
export const Section = (props: PropsSearchSections) => {
  const sections = props.sections
  return (
    <div className={classes['sections']}>
      {sections.map(i => (
        <a key={i.section} className={classes['section']} href={i.link}>{i.section}</a>
      ))}
    </div>
  )
}
