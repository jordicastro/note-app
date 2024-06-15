import Link from 'next/link'
import React from 'react'

const Navbar = () => {



  return (
    <nav className="flex justify-between">
        <Link href={"/"}>
          Home
        </Link>
        <div>
        <button>Dark Mode Icon</button>
        <button>Drop Down Menu</button>
        </div>
    </nav>
  )
}

export default Navbar