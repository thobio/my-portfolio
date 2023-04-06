import React from 'react'
import ImagesPic from '../assets/simp.png'
import BDRImage from '../assets/BDR.png'
import SnatchitImage from '../assets/snatchit.jpeg'
import BestRateJO from '../assets/BestRateJO.png'
import ProptMe from '../assets/ProptMe.png'
import CLM from '../assets/CLM.png'

const Portfolio = () => {
    const portfolioList = [
        {
            id: 1,
            src: ImagesPic,
            name: "Simplex Living"
        },
        {
            id: 2,
            src: BDRImage,
            name: "BDR (Banned drinker register)"
        },
        {
            id: 3,
            src: SnatchitImage,
            name: "Snatch it.shop"
        },
        {
            id: 4,
            src: BestRateJO,
            name: "BestRateJO"
        },
        {
            id: 5,
            src: ProptMe,
            name: "ProptMe."
        },
        {
            id: 6,
            src: CLM,
            name: "CLM Alliance (Claims and Litigation Management Alliance)"
        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolioList.map(({ id, src, name }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='items-center justify-center flex'>
                                <button className='w-full px-6 py-3 duration-200 hover:scale-105'>{name}</button>
                                {/* //<button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Apple Store</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
// https://apps.apple.com/us/app/simplex-living/id1626939578