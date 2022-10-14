import React from 'react'
import './Album.css'


function Album(props) {
    return (
        <div className='card'>
            <img src={props.albums.image} alt='' />
            <span className='album-name'>{props.data.album}</span>
            <span className='musician-name'>{props.data.artist}</span>
        </div>
    )
}

export default Album;