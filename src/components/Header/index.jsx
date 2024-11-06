import React from 'react'
import TopNav from './TopNav'

const Header = () => {
    return (
        <header className="relative bg-white">
            <p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                Get free delivery on orders over $100
            </p>
            <TopNav />
        </header>
    )
}

export default Header
