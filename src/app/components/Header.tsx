import { Bell, Heart, Search, Settings, SlidersHorizontal } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className='container px-5'>
                <div className='relative flex justify-between items-center pb-36 pt-4 sm:py-4'>
                    <div className="text-lg sm:text-2xl font-bold text-primary-default">
                        MORENT
                    </div>
                    <div className='absolute w-full sm:w-[30vw] top-16 sm:top-auto sm:left-40 md:left-60 flex justify-between items-center'>
                        <input
                            type="text"
                            placeholder="Search something here"
                            className="w-full sm:w-[30vw] rounded-lg sm:rounded-2xl border border-gray-300 px-10 py-2.5 sm:py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-default text-sm sm:text-md"
                        />
                        <button className="absolute left-3 text-secondary-light-300">
                            <Search size={18} />
                        </button>
                        <button className="sm:absolute right-0 sm:flex sm:justify-end sm:items-center sm:pr-2 border border-gray-300 sm:border-none ml-2 sm:h-8 sm:w-8 rounded-lg sm:rounded-md text-secondary-light-300 p-2.5 sm:p-0">
                            <SlidersHorizontal size={18} />
                        </button>

                    </div>

                    <div className='flex justify-between items-center gap-3'>
                        <button className="hidden sm:block relative p-2 rounded-full bg-gray-100 hover:bg-gray-300">
                            <Heart size={16} strokeWidth={2.25} fill="black" />
                        </button>
                        <button className="hidden sm:block relative p-2 rounded-full bg-gray-100 hover:bg-gray-300">
                            <Bell size={16} strokeWidth={2.25} fill="black" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <button className="hidden sm:block relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <Settings size={16} strokeWidth={2.25} />
                        </button>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300">
                            <img
                                src="/images/Image.png"
                                alt="Profile"
                                className="rounded-full"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header