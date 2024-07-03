import React from 'react'

interface propsIBanner {
    banner: string
}
/**Кoмпонент используется в главном приложении App для отрисовки баннера */
export const Banner = (props: propsIBanner) => {
  return (
    <>
      <img src={props.banner} alt="" />
    </>
  )
}
