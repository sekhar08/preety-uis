import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {

    const links = [
        { href: '/guide', title: 'Guide' },
        { href: '/pricing', title: 'Pricing' },
        { href: '/login', title: 'Login' },
    ]


  return (
    <div className='flex items-center justify-between px-4'>
        <Link href="/">
          <Image
            draggable={false}
            loading="lazy"
            src="/finta-logo-light.svg"
            alt="Logo"
            width={96}
            height={96}
            className="w-24 h-24"
          />
        </Link>

        <div className='flex items-center gap-8'>
            {links.map((link,index) => (
                <Link key={index} href={link.href} className='text-neutral-800 font-medium hover:text-neutral-500 transition duration-200'>
                    {link.title}
                </Link>
            ))}
            <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white  font-bold shadow-lg text-shadow-md tracking-wide">Start free trail</button>
        </div>
    </div>
  )
}

export default Navbar