import React from 'react'
const Card = ( {item, i} ) => {
    console.log(item)
    return (
        <div>
            <div className="h-36 w-36 rounded-lg shadow-lg">
                <img loading='lazy' src={item?.download_url} alt="Image" />
                <span>{item?.author}</span>
                <p>{i + 1}</p>
            </div>
        </div>
    )
}

export default Card;




