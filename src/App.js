import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";


const App = () => {
    const [userDevice, setUserDevice] = useState("");

    useEffect(() => {
        let screenWidth = window.innerWidth;

        if (screenWidth < 640) {
            setUserDevice("mobile");


        }
        else if (screenWidth < 821) {
            setUserDevice("tablet");
        }

        else {
            setUserDevice("laptop");

        }
        window.addEventListener("resize", handleResize)
    }, [])

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setUserDevice("mobile");

        }
        else if (screenWidth < 821) {
            setUserDevice("tablet");
        }

        else {
            setUserDevice("laptop");

        }

    }



    console.log(userDevice)

    let imageLayout = "";
    if (userDevice === "laptop") {
        imageLayout = (
            <>

                <div className="absolute flex h-full w-screen justify-center">
                    <img className="h-full w-screen" src="/images/merged/Desktop_Back_01.png" alt="Desktop_Back_01" />
                </div>
                <div className="absolute flex h-full w-screen items-end justify-center">
                    <div className={`shrink-0 h-[85%] `}>
                        <img className="h-full " src="/images/merged/Desktop_Middle_01_2.png" alt="Desktop_Middle_01" />
                    </div>
                </div>

                <div className="absolute z-40 flex h-full w-screen items-end justify-center">
                    <div className={`shrink-0 h-[78%] `}>
                        <img className="h-full" src="/images/merged/Desktop_Front_01.png" alt="Desktop_Middle_01" />
                    </div>
                </div>


            </>
        );
    } else if (userDevice === "mobile") {

        imageLayout = (
            <>
                {/* <div className="absolute flex h-screen w-screen justify-center items-end ">
                    <div className="shrink-0">
                        <img className="h-[420px] w-[790px] " src="/images/merged/Mobile_Back_01.png" alt="car_pink" />
                    </div>
                </div>
                <div className="absolute z-30 h-screen w-screen flex justify-center items-end">
                    <div className="shrink-0">
                        <img className="h-[450px] w-[750px]" src="/images/merged/Mobile_Front_01.png" alt="car_pink" />
                    </div>
                </div> */}

                <div className="absolute flex inset-0 h-full w-screen justify-center items-end ">
                    <div className="h-[60%]">
                        <img className="h-full object-cover" src="/images/merged/Mobile_Back_01.png" alt="car_pink" />
                    </div>
                </div>
                <div className="absolute z-30 inset-0  h-full w-screen flex justify-center items-end">
                    <div className="h-[60%] ">
                        <img className="h-full object-cover" src="/images/merged/Mobile_Front_01.png" alt="car_pink" />
                    </div>
                </div>
            </>
        );
    } else if (userDevice === "tablet") {

        imageLayout = (
            <>

                <div className="absolute flex inset-0  h-full w-screen justify-center">
                    <img className="h-full w-screen" src="/images/merged/Desktop_Back_01.png" alt="Desktop_Back_01" />
                </div>
                <div className="absolute flex inset-0 h-full w-screen items-end justify-center">
                    <div className={`shrink-0 h-[78%]`}>
                        <img className="h-full " src="/images/merged/Tablet_Middle_01.png" alt="Desktop_Middle_01" />
                    </div>
                </div>

                <div className="absolute z-40 inset-0  flex h-full w-screen items-end justify-center">
                    <div className={`shrink-0 h-[75%]`}>
                        <img className="h-full" src="/images/merged/Tablet_Front_01.png" alt="Desktop_Middle_01" />
                    </div>
                </div>


            </>
        );
    }

    return (

        <div className="relative flex h-full w-screen flex-col overflow-hidden">
            <NavBar userDevice={userDevice} />

            <div className="absolute inset-0   h-full w-full justify-center  text-center">
                {/* <div className={`absolute z-20  ${userDevice === 'mobile' ? 'bottom-[63vh]' : 'bottom-[68vh]'}  w-full bg-white bg-opacity-0 text-center font-anton font-normal tracking-wider text-custom-theme-purple leading-none  mobile:text-[58px] tablet:text-[15.2vh] laptop:text-[150px]`}>
                        <p className={`${screenHeight < 500 ? '' : ''}`}>HOME TO {userDevice === 'mobile' ? <br /> : ''} ALL.</p>
                    </div> */}
                <div className={`absolute z-20  ${userDevice === 'mobile' ? 'bottom-[60vh]' : 'bottom-[68vh]'}  w-full bg-white bg-opacity-0 text-center font-anton font-normal tracking-wider text-custom-theme-purple leading-none mobile:text-[10.2vh] laptop:text-[13.8vh]`}>
                    <p className={``}>HOME TO {userDevice === 'mobile' ? <br /> : ''} ALL.</p>
                </div>



                {imageLayout}

            </div>

        </div>


    );
};

export default App;
