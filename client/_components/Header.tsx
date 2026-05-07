import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            <nav className='flex justify-between items-center px-6 sm:px-8 py-4 max-w-7xl mx-auto'>
                {/* Logo/Brand Section */}
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold text-sm'>FS</span>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold text-slate-900'>FullStack Lab</h1>
                        <p className='text-xs text-slate-500'>Learning Hub</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className='hidden sm:flex gap-8 items-center'>
                    <Link href="/" className='text-slate-700 hover:text-blue-600 font-medium transition duration-200'>
                        Home
                    </Link>
                    <Link href="/learning" className='text-slate-700 hover:text-blue-600 font-medium transition duration-200'>
                        Learning
                    </Link>
                    <Link href="/" className='text-slate-700 hover:text-blue-600 font-medium transition duration-200'>
                        About
                    </Link>
                </div>

                {/* Right Section */}
                <div className='flex items-center gap-3'>
                    {/* Theme Toggle */}
                    <button
                        className='p-2 hover:bg-slate-100 rounded-lg transition duration-200'
                        title="Toggle theme"
                    >
                        <svg className='w-5 h-5 text-slate-700' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
                        </svg>
                    </button>

                    {/* Sign In Button */}
                    <Link
                        href="/"
                        className='px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg font-medium transition duration-200 hidden sm:inline-block'
                    >
                        Sign In
                    </Link>

                    {/* Primary CTA */}
                    <Link
                        href="/learning"
                        className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-200 text-sm'
                    >
                        Explore
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className='sm:hidden p-2 hover:bg-slate-100 rounded-lg'>
                        <svg className='w-5 h-5 text-slate-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header