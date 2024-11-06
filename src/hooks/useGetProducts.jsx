import React, { useContext } from 'react'
import { useCategory } from '.'

const useGetProducts = () => {
    const [loading, setLoading] = React.useState({
        state: false,
        message: ""
    })
    const [products, setProducts] = React.useState([])
    const [error, setError] = React.useState("")

    const { selectedCategory } = useCategory()


    const fetchProducts = async (category) => {

        let url = "https://fakestoreapi.com/products"
        if (category) {
            url = `https://fakestoreapi.com/products/category/${category}`
        }


        setLoading({
            state: true,
            message: "Fetching products..."
        })
        try {
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading({
                state: false,
                message: ""
            })
        }
    }

    React.useEffect(() => {

        fetchProducts(selectedCategory)
    }, [selectedCategory])

    return { loading, products, error }
}

export default useGetProducts
