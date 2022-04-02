import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <nav className="sticky top-0 bg-white z-10">
            <div className="max-w-7xl mx-auto px-12 py-8 flex justify-content md:justify-between ">
                <div>
                    <Link
                        to="/"
                        className="text-3xl hidden md:block text-gray-500 font-bold font-sans"
                    >
                        TShart Mania
                    </Link>
                </div>

                <div className="text-lg flex gap-4 font-bold font-sans">
                    <CustomLink className="hover:text-orange-400" to="/">
                        Home
                    </CustomLink>
                    <CustomLink className="hover:text-orange-400" to="shop">
                        Shop
                    </CustomLink>
                    <CustomLink
                        className="hover:text-orange-400"
                        to="/orderreview"
                    >
                        Order Review
                    </CustomLink>

                    <CustomLink className="hover:text-orange-400" to="about">
                        About
                    </CustomLink>
                </div>
            </div>
        </nav>
    )
}

export default Header
