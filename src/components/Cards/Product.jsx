import React from 'react'
import Bag from '../../assets/icons/Bag'
import { useAction } from '../../hooks'

const productData = {
    name: "Green grandad Shirt",
    category: "men's clothing",
    price: "$35",
    image: "./assets/products/shirt-2.png"

}

const Product = ({
    product
}) => {
    const { title, category, price, image } = product || productData

    const { cartItems, setCartItems } = useAction()

    const handleAddToCart = (product) => {
        setCartItems((prev) => [...prev, product])
    }

    const handleRemoveFromCart = (product) => {
        setCartItems((prev) => prev.filter((item) => item.id !== product.id))
    }
    return (
        <div className="relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                <img
                    src={image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
                />
            </div>
            <div className="mt-4 px-3 pb-4">
                <div>
                    <h3 className="text-sm text-gray-700 truncate">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
            </div>
            {/* <!-- Button --> */}
            <div
                className={`cursor-pointer rounded-md  text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1   items-center text-center mb-3 mx-3 flex-1 ${cartItems.some((item) => item.id === product.id) ? 'bg-red-500 text-white hover:bg-red-600 ' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                onClick={() => {
                    // cartItems.includes(product) ? handleRemoveFromCart(product) : handleAddToCart(product)
                    //if cartItems includes product, remove product from cart else add product to cart check with id

                    if (cartItems.some((item) => item.id === product.id)) {
                        handleRemoveFromCart(product)
                    } else {
                        handleAddToCart(product)
                    }

                }}
            >
                <div className="flex px-3 py-2 justify-center">
                    <Bag />
                    {/* Add To Cart */}
                    {
                        cartItems.some((item) => item.id === product.id) ? 'Remove From Cart' : 'Add To Cart'
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
