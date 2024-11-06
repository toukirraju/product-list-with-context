import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import { ActionProvider, CategoryProvider, ProductProvider } from './providers'

const App = () => {
  return (
    <ActionProvider>
      <CategoryProvider>
        <ProductProvider>
          <Header />

          <Hero />

          <Products />

          <Footer />
        </ProductProvider>
      </CategoryProvider>
    </ActionProvider>
  )
}

export default App
