import { Bell, Heart, Search, Settings, SlidersHorizontal } from 'lucide-react'
import React from 'react'

const temp = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Logo and Description - Full width on mobile, normal on desktop */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-blue-600">MORENT</span>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Navigation Grid - Stacks on mobile, grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">About</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">How it works</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Featured</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Partnership</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Business Relation</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Community</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Events</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Blog</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Podcast</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Invite a friend</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Socials</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Discord</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Instagram</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Facebook</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms & Condition</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy & Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Stacks on mobile, flex on desktop */}
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">©2024 MORENT. All rights reserved</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy & Policy</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>  
    
    // header 
    <header className="bg-white shadow-md">
    <div className="container relative mx-auto flex items-start sm:items-center justify-between py-20 sm:py-4 px-6">
        <div className='flex flex-col justify-between ite sm:flex-row sm:justify-between sm:items-center w-full sm:w-1/2'>
            <div className="text-2xl font-bold text-primary-default sm:mx-5">
                MORENT
            </div>
            <div className="relative w-full flex justify-around items-center mt-3 sm:mt-0">
                <input
                    type="text"
                    placeholder="Search something here"
                    className="w-full rounded-md border border-gray-300 pl-8 pr-10 py-2 sm:py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500 text-[0.25rem] sm:text-[0.5rem] mr-2"
                />
                <button className="absolute left-3 text-secondary-light-300">
                    <Search size={12} />
                </button>
                <button className="relative sm:absolute border border-gray-300 hover:border-primary-default sm:right-7 top-0 sm:top-2 p-1 sm:p-0 h-6 w-6  sm:w-0 sm:h-0 rounded-md sm:ml-0  text-secondary-light-300">
                    <SlidersHorizontal size={12} />
                </button>
            </div>


        </div>
        <div className="flex items-center sm:gap-4 mx-0 sm:mx-1">
                    <button className="hidden sm:block relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Heart size={16} strokeWidth={2.25} fill="black"/>

                    </button>
                    <button className="hidden sm:block relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Bell size={16} strokeWidth={2.25} fill="black"/>
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                    </button>
                    <button className="hidden sm:block relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Settings size={16} strokeWidth={2.25} />                        
                    </button>
        
                    {/* Profile Picture */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300">
                        <img
                            src="/images/Image.png"
                            alt="Profile"
                            className="rounded-full"
                        />
                    </div>
                </div>
    </div>
</header>

    )
}

export default temp