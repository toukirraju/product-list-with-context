import React, { createContext, useContext } from 'react'
import { ProductContext } from '../context'
import { useGetProducts } from '../hooks'

const ProductProvider = ({ children }) => {
    const { error, loading, products } = useGetProducts()

    return (
        <ProductContext.Provider value={{
            error,
            loading,
            products
        }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider

