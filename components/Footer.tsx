import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from "@/public/assets/github-icon.svg"
import linkedinIcon from "@/public/assets/linkedin-icon.svg"
import notionIcon from "@/public/assets/notion-icon.svg"

const Footer = () => {

  return (
    <section className="flex justify-between mb-1 mt-3">
        <Link href="https://jordicastro.github.io/">
            <h6>Jordi Castro</h6>
        </Link>

        <div className='flex gap-2'>
            <Link href="https://github.com/jordicastro" >
                <Image src={githubIcon} alt="GitHub Logo" width={16} height={16} />
            </Link>
            <Link href="https://www.linkedin.com/in/jordicastr0/" >
                <Image src={linkedinIcon} alt="LinkedIn Logo" width={16} height={16} />
            </Link>
            <Link href="https://almond-dill-2de.notion.site/Documentation-for-note-app-ebe81c178d484b49b018b1532d448ebe" >
                <Image src={notionIcon} alt="Notion Logo" width={16} height={16} />
            </Link>
        </div>
    </section>
  )
}

export default Footer