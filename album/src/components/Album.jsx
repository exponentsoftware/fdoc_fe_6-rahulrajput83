import React from 'react'
import './Album.css'


function Album(props) {
    return (
        <div className='card'>
            <img src={props.item.album_cover} alt='' />
            <span className='album-name'>{props.item.album_title}</span>
            <span className='musician-name'>{props.item.artist}</span>
        </div>
    )
}

export default Album;