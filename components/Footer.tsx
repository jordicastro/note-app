import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex justify-between mb-1">
        <Link href="https://jordicastro.github.io/">
            <p>Jordi Castro</p>
        </Link>

        <div className='flex gap-2'>
            <Link href="https://github.com/jordicastro" >
                <Image src="public/assets/github_logo.svg" alt="GitHub Logo" width={30} height={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/jordicastr0/" >
                <Image src="public/assets/linkedin_logo.svg" alt="LinkedIn Logo" width={30} height={30} />
            </Link>
            <Link href="https://almond-dill-2de.notion.site/Documentation-for-note-app-ebe81c178d484b49b018b1532d448ebe?pvs=4" >
                <Image src="public/assets/notion_logo.svg" alt="Notion Logo" width={30} height={30} />
            </Link>
        </div>
    </div>
  )
}

export default Footer