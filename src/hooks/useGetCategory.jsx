import React from 'react'

const useGetCategory = () => {
    const [loading, setLoading] = React.useState({
        state: false,
        message: ""
    })
    const [categories, setCategories] = React.useState([])
    const [error, setError] = React.useState("")

    const fetchCategories = async () => {
        setLoading({
            state: true,
            message: "Fetching categories..."
        })
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const data = await response.json()
            setCategories(data)
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
        fetchCategories()
    }, [])

    return { loading, categories, error }
}

export default useGetCategory
