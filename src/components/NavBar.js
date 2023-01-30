
import { SiTwitter, SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = ({ userDevice }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleMobileMenu = () => {
        const inverseShowMobileMenu = !showMobileMenu
        setShowMobileMenu(inverseShowMobileMenu)
    }
    return (
        <div className={`fixed z-50 h-full w-screen inset-0`}>
            <div className={`${showMobileMenu ? "w-screen" : "w-0"} transition-width transition-slowest duration-1000 ease absolute bg-white  h-full flex items-center justify-center`}>
                <div className={`${showMobileMenu ? "" : "hidden"} w-[85%] h-[85%] p-10 border-y-2 border-black flex items-center justify-center`}>
                    <div className="text-[6.3vh] text-custom-theme-purple text-center tracking-wider text-clip leading-none font-anton">
                        WE'RE<br /> <span className="whitespace-nowrap overflow-hidden ">COMING SOON.</span>
                    </div>

                </div>
                <div className={`absolute top-2 right-2 `}>
                    <AiOutlineClose size={30} color={"black"} onClick={handleMobileMenu} />
                </div>

            </div>
            <div className="min-h-[5.5%] mobile:h-[7%] flex  flex-grow items-center justify-center bg-black ">
                <div className={`font-anton tracking-wider text-white ${userDevice === 'mobile' ? "ml-auto text-[3.7vh] pl-12" : "text-[3.3vh]"}`}>LAZYNAIRE</div>
                <div className={`ml-auto pr-3 ${userDevice === 'mobile' ? "" : "hidden"}`}><HiMenuAlt4 size={30} color={"white"} onClick={handleMobileMenu} /></div>

            </div>

            <div className={`${userDevice === 'laptop' || userDevice === 'tablet' ? "" : "hidden"} flex h-[5.5%] flex-grow flex-row items-center justify-center space-x-16 bg-custom-theme-purple`}>
                <span className={` text-white font-neueHaas tracking-widest font-semibold ${userDevice === 'laptop' ? 'text-[1.9vh]' : ''} ${userDevice === 'tablet' ? 'text-[2.4vh]' : ''}  `}>WE'RE COMING SOON.</span>
            </div>
            <div className={`absolute z-50 bottom-8 w-full ${showMobileMenu ? "hidden" : ""}`}>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <a
                        className="rounded-full bg-custom-theme-purple p-2"
                        href=" https://twitter.com/lazynaire_club"
                    >
                        <SiTwitter size={30} color={"white"} />
                    </a>
                    <a
                        className="rounded-full bg-custom-theme-purple p-2"
                        href="https://discord.gg/lazynaireclub"
                    >
                        <SiDiscord size={30} color={"white"} />
                    </a>

                    <a
                        className="rounded-full bg-custom-theme-purple p-2"
                        href="mailto:lazynaire.nft@gmail.com"
                    >
                        <MdEmail size={30} color={"white"} />
                    </a>
                </div>
            </div>
        </div >
    );
};

export default NavBar;
