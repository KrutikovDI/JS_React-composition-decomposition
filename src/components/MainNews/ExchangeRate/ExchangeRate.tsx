import React from 'react'
import classes from './exchangeRate.module.css'
import { IRate } from '../interfaceNews'

interface propsIRate {
    rates: IRate[]
}
 /**Компонент для отрисовки курса валют в родительском компоненте MainNews */
export const ExchangeRate = (props: propsIRate) => {
    const rates = props.rates
  return (
    <div className={classes['field']}>
      {rates.map(i => (
        <div key={i.currency} className={classes['rate']}>
            <div className={classes['currency']}>{`${i.currency} ${i.rate}`}</div>
            <div>{i.dynamics}</div>
        </div>
      ))}
    </div>
  )
}
