"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "./Logo"



const navItems = ['Home', 'Videos', 'Models', 'BTS', 'Store', 'Login', 'Join Now']


const Sidebar = () => {

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <div className="fixed w-screen h-auto overflow-x-hidden bg-black z-10 flex justify-between items-center">
                        <div className=" flex flex-row my-5 gap-3 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className="dark:fill-white">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg>
                            <Logo />
                        </div>
                        <div className="flex flex-row gap-5 cursor-pointer">
                            <div className='border-e-2 pe-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" fill='white' viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle><Logo /></SheetTitle>
                    </SheetHeader>
                    {navItems.map((item, index) => {
                        return (
                            <div className="grid gap-4 py-4" key={index}>
                                <SheetClose asChild className="grid grid-cols-1 items-center gap-4 font-medium" >
                                    <div className="cursor-pointer hover:border-b-2 border-red-700">
                                        {item}
                                    </div>
                                </SheetClose>
                            </div>
                        );
                    })}

                </SheetContent>
            </Sheet>
        </div>
    )
}
export default Sidebar;
