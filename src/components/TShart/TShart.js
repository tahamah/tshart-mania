import React from 'react'

const TShart = ({ tshart }) => {
    const { name, picture, price, gender } = tshart
    return (
        <div className="w-[270px] border-2 bg-white rounded-lg p-4 mb-10 md:mb-0 pl-5">
            <img
                className="z-0 rounded-lg mx-auto content-center h-[300px]"
                src={picture}
                alt=""
            />

            <h1 className="text-2xl mt-5"> {name}</h1>
            <p>Gender: {gender ? gender : 'Any One'}</p>
            <p>Price: ${price}</p>
            <button className="btn-primary mt-4">Add to Cart</button>
        </div>
    )
}

export default TShart
