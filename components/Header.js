import Image from 'next/image'
import { MenuIcon, TranslateIcon, XIcon } from '@heroicons/react/solid'
import {useState, useEffect} from 'react'
const Header = () => {
    const [drawer, setOpenDrawer] = useState(false)
    const openDrawer = (e) =>{
        e.preventDefault()
        setOpenDrawer(true)
    }
    const closeDrawer = (e) =>{
        e.preventDefault()
        setOpenDrawer(false)
    }
    return (
        <div className="header">
            <div className="flex fixed top-0 justify-between items-center z-50 h-16 p-2 px-4 shadow-md w-full bg-white lg:px-32">
                <div className="h-12 w-12 relative">
                    <Image src="/logo.svg" layout="fill" objectFit="cover"/>
                    
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex space-x-8 items-center">
                        <li className="p-4 bg-blue-800 text-white rounded-2xl">Home</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Contact</li>
                        <li>Projects</li>
                        <li>Apply for funding</li>
                        <li>Opportunities in Nchanga</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <MenuIcon onClick={openDrawer} className="h-8 w-8 text-blue-900"/>
                </div>
            </div>
            <div className={`${drawer? 'right-0 h-screen transition duration-200 ease-linear': '-right-full transform duration-500 ease-linear'} fixed transform duration-300 w-full h-screen top-0 text-gray-600 bg-white z-50 p-2 flex flex-col`}>
            {/* Header */}
                <div className="flex justify-between pt-2 px-1">
                    {/* <TranslateIcon onClick={closeDrawer} className="h-12 bg-gray-200 p-2 text-gray-600 rounded-full"/> */}
                    <XIcon onClick={closeDrawer} className="h-12 bg-gray-200 p-2 text-gray-600 rounded-full"/>
                </div>
                
                {/* Nav Menu Drawer menu */}
                <div className="flex flex-col items-center mt-5 h-full">
                    <p className="text-3xl font-bold p-4">MENU</p>
                    {/* <div className="grid grid-cols-3 space-x-3">
                        <MenuItems icon={<QuestionMarkCircleIcon className="h-10 w-10 text-center"/>} title="The Problem" route="./theproblem"/>
                        <MenuItems icon={<BeakerIcon className="h-10 w-10 text-center"/>} title="The Solution"/>
                        <MenuItems icon={<BadgeCheckIcon className="h-10 w-10 text-center"/>} title="The Impact"/>
                    </div> */}
                    <div className="flex lg:hidden flex-col items-center space-y-4 w-full mt-5">
                        <p className="font-bold">Home</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">About</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">News</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Projects</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Apply for funding</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Opportunities in Nchanga</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Support</p>
                        
                    </div>
                </div>
            {/* Body */}
            {/* Footer */}
        </div>
        </div>


    )
}

export default Header
