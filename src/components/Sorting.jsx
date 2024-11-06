import React from 'react'
import { useAction } from '../hooks'

const Sorting = () => {
    const [toggleSort, setToggleSort] = React.useState(false)
    const { sortOrder, setSortOrder } = useAction()
    const handleSort = (order) => {
        // if sortOrder is equal to order, set sortOrder to empty string
        // else set sortOrder to order
        setSortOrder((prev) => prev === order ? '' : order)
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setToggleSort(!toggleSort)}
                >
                    Sort
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* <!-- Sort Options --> */}
            <div
                className={`absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${toggleSort ? 'block' : 'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
            >
                <div className="py-1" role="none">
                    <span
                        className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all ${sortOrder === 'asc' ? 'bg-gray-50' : ''}`}
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => handleSort('asc')}
                    >Low to High</span>
                    <span
                        href=""
                        className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all ${sortOrder === 'desc' ? 'bg-gray-50' : ''}`}
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => handleSort('desc')}
                    >High to Low</span>
                </div>
            </div>
        </div>
    )
}

export default Sorting
