import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import githubIcon from "@/public/assets/github-icon.svg"
import githubIconDark from "@/public/assets/github-icon-dark.svg"
import linkedinIcon from "@/public/assets/linkedin-icon.svg"
import linkedinIconDark from "@/public/assets/linkedin-icon-dark.svg"
import notionIcon from "@/public/assets/notion-icon.svg"
import notionIconDark from "@/public/assets/notion-icon-dark.svg"

const Footer = () => {

  return (
    <section className="flex justify-between w-full mb-1 fixed bottom-0 py-1 pr-[10%] z-10 bg-transparent">
        <Link href="https://jordicastro.github.io/">
            <h6>Jordi Castro</h6>
        </Link>

        <div className='flex gap-2'>
            <Link href="https://github.com/jordicastro" >
                <Image className="dark:hidden" src={githubIcon} alt="GitHub Logo" width={18} height={18} />
                <Image className="hidden dark:block" src={githubIconDark} alt="GitHub Logo" width={18} height={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/jordicastr0/" >
            <Image className="dark:hidden" src={linkedinIcon} alt="GitHub Logo" width={18} height={18} />
            <Image className="hidden dark:block" src={linkedinIconDark} alt="GitHub Logo" width={18} height={18} />


            </Link>
            <Link href="https://almond-dill-2de.notion.site/Documentation-for-note-app-ebe81c178d484b49b018b1532d448ebe" >
            <Image className="dark:hidden" src={notionIcon} alt="GitHub Logo" width={18} height={18} />
            <Image className="hidden dark:block" src={notionIconDark} alt="GitHub Logo" width={18} height={18} />
            </Link>
        </div>
    </section>
  )
}

export default Footer