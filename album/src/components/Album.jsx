import React from 'react'
import './Album.css'


function Album() {
    return (
        <div className='card'>
            <img src='https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg' alt='' />
            <span className='album-name'>Rockstar</span>
            <span className='musician-name'>A.R. Rahman</span>
        </div>
    )
}

export default Album;