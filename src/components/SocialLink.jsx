import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';

const SocialLink = () => {
    const socialLink = [
        {
            id: 1,
            child: (<>
                LinkedIn <FaLinkedin size={30} />
            </>),
            href: 'https://www.linkedin.com/in/thobio-joseph-529a29133/'
        },
        {
            id: 2,
            child: (<>
                GitHub <FaGithub size={30} />

            </>),
            href: 'https://github.com/thobio'
        },
        {
            id: 3,
            child: (<>
                Mail <HiOutlineMail size={30} />

            </>),
            href: 'mailto:mailme@thobiojoseph.com'
        },
        {
            id: 4,
            child: (<>
                Resume <BsPersonLinesFill size={30} />

            </>)
            , href: './Resume.pdf',
            download: true,
        },
    ];
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {socialLink.map(socialLink => (
                    <li key={socialLink.id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300'>
                        <a href={socialLink.href} className="flex justify-between items-center w-full text-white" download={socialLink.download} target='_blank' rel="noreferrer">
                            {socialLink.child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLink