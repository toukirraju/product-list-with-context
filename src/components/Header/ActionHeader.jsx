import React from 'react'
import Sorting from '../Sorting'
import Filtering from '../Filtering'
import Searching from '../Searching'
import Cart from '../Cart'

const ActionHeader = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                {/* <!-- Sort & Filter--> */}
                <div className="w-full">
                    {/* <!-- Sort Start --> */}
                    <Sorting />
                    {/* <!-- Sort End --> */}

                    {/* <!-- Filter Start --> */}
                    <Filtering />
                    {/* <!-- Filter End --> */}
                </div>

                {/* <!-- Search and Cart --> */}
                <div className="flex gap-2 items-center">
                    {/* <!-- Search --> */}
                    <Searching />

                    {/* <!-- Cart --> */}
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default ActionHeader
