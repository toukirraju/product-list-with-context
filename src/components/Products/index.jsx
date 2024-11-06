import React, { useContext } from 'react'
import ProductContainer from '../../layouts/ProductContainer'
import Product from '../Cards/Product'
import ProductSkeleton from '../Cards/ProductSkeleton'
import { useAction, useProduct } from '../../hooks'

const Products = () => {
    const { loading, error, products } = useProduct()
    const { searchTerm, sortOrder } = useAction()
    let content = null

    if (loading.state) {
        content = Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
        ))
    }

    if (error) {
        content = <p
            className='bg-red-100 p-4 text-red-500 rounded-md absolute top-0 left-0 right-0 z-50'
        >
            {error}
        </p>
    }

    if (products && products.length > 0 && !loading.state) {

        const filteredProducts = () => {
            if (searchTerm) {
                return products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
            }
            return products
        }
        content = filteredProducts().length > 0 ? filteredProducts().sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price
            } else if (sortOrder === 'desc') {
                return b.price - a.price
            }
            return a.id - b.id
        })
            ?.map((product) => (
                <Product key={product.id} product={product} />
            )) : <p className='text-red-500 absolute top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 z-50'>No products found</p>
    }

    return (
        <ProductContainer>
            {/* <!--  products... --> */}
            {content}
        </ProductContainer>
    )
}

export default Products
