import React, { createContext, useContext } from 'react'
import { useGetCategory } from '../hooks'
import { CategoryContext } from '../context'

const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = React.useState('')
    const { error, loading, categories } = useGetCategory()
    return (
        <CategoryContext.Provider value={{
            error,
            loading,
            categories,
            selectedCategory,
            setSelectedCategory
        }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider

