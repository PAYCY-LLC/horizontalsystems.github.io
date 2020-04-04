import React from 'react'
import cn from 'classnames'

import './Card.scss'

function Card({ title, info, actionsLeft, actionsRight, cover, dark, comingSoon }) {
  return (
    <div className={cn('Card', { 'Card-dark': dark, 'Card-coming-soon': comingSoon })}>
      <div className="Card-title">{title}</div>
      <div className="Card-info">{info}</div>
      <div className="Card-bottom">
        <div className="actions-left">
          {actionsLeft}
        </div>
        {actionsRight && <div className="actions-right">
          {actionsRight}
        </div>}
      </div>

      {cover && <img className="Card-cover" src={cover} alt="" />}
      {comingSoon && <div className="Screen-right-half paths-green" />}
    </div>
  )
}

export default Card
