import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header>
            <nav className='flex justify-between p-4 bg-orange-100'>
                <span>Welcome to Full stack learning lab
                </span>
                <div className='flex gap-4'>
                    <button>Theme</button>
                    <Link href="/">Home </Link>
                    <Link href="/learning">Learning</Link>
                    <Link href="/">Sign in </Link>
                    <Link href="/">About us</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header