import React from 'react'
import Album from './Album'

function Albums(props) {
  return (
    <div className='albums'>
        <span>Albums</span>
        <div className='data'>
            {props.albums.map((item) => {
                return (
                    <Album key={item.id} item={item} />
                )
            })}
        </div>
    </div>
  )
}

export default Albums