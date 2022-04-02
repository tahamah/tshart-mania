import React from 'react'
import useTSharts from '../../hooks/useTSharts'
import Cart from '../Cart/Cart'
import TShart from '../TShart/TShart'

const Shop = () => {
    const [tsharts, setTsharts] = useTSharts()
    console.log(tsharts)
    return (
        <div className="md:flex mt-20 px-8 max-w-7xl mx-auto">
            <div className=" md:w-3/4">
                <div className="mx-auto md:flex flex-wrap  gap-10">
                    {tsharts.map((tshart) => (
                        <TShart key={tshart._id} tshart={tshart}></TShart>
                    ))}
                </div>
            </div>

            <div className="md:w-1/4 rounded-xl sticky top-1.5 md:ml-6 max-h-[500px] bg-orange-200">
                <Cart></Cart>
            </div>
        </div>
    )
}

export default Shop
