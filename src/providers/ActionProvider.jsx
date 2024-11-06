
import { useState } from 'react'
import { ActionContext } from '../context'

const ActionProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const [sortOrder, setSortOrder] = useState('')

    const [cartItems, setCartItems] = useState([])
    return (
        <ActionContext.Provider value={{
            searchTerm,
            setSearchTerm,
            sortOrder,
            setSortOrder,
            cartItems,
            setCartItems
        }}
        >
            {children}
        </ActionContext.Provider>
    )
}

export default ActionProvider

