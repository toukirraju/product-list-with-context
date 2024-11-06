import React from 'react'
import SectionHeader from '../components/Header/SectionHeader'
import ActionHeader from '../components/Header/ActionHeader'

const ProductContainer = ({
  children
}) => {
  return (
    <div className="pt-16 sm:pt-24 lg:pt-40">
      <SectionHeader />
      <ActionHeader />

      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* <!-- Card --> */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
