import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl h-[70vh] mx-auto flex flex-col items-center md:items-start px-12 ">
                <h1 className="text-xl md:text-5xl mt-44">
                    <span className="text-orange-500 font-bold font-sans">
                        Welcome
                    </span>{' '}
                    to TShart Mania 👕{' '}
                </h1>
                <button className="py-2 px-8 rounded-full mt-4 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Home
