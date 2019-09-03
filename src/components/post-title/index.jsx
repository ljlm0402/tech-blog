import React from 'react'

import './index.scss'

export const PostTitle = ({ title, date }) => {
    return (
        <div >
            <h1>{title}</h1>
            <h4 className='date'>{date}</h4>
        </div>
    )
}
