import React from 'react'
import './ListMenuItem.css'

const ListItem = ({title, description, price}) => {
  return (
    <div className='list-items'>
        <ul>
            <li>
                <div>
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                </div>

                <h3>RS. {price}</h3>
            </li>
        </ul>
    </div>
  )
}

export default ListItem