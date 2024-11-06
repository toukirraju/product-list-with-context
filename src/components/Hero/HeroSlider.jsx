import React from 'react'

const HeroSlider = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
        >
            <div
                className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
            >
                <div className="flex items-center  space-x-6 lg:space-x-8">
                    <marquee direction="down" className="grid flex-1  space-y-8 grid-cols-1 ">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </marquee>
                    <marquee direction="up" className="grid flex-1  space-y-8 grid-cols-1 ">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1540827109409-17f40944f276?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1610419993549-7429619cdbd1?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </marquee >
                    <marquee direction="down" className="grid flex-1  space-y-8 grid-cols-1 ">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1597196526281-fe4861daa915?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider
