import { Link } from "react-router-dom";
import MarketingImg from "../assets/portfolio/Image-3.png";

export function BeyondRescue() {
    return (
        <div className="min-h-screen overscroll-none overflow-y-auto">
            <div className="bg-[url('./assets/portfolio/corkboard.png')] w-full">
                <p className="text-white text-6xl text-center pt-10 font-bold font-serif">
                    Beyond Rescue
                </p>

                <div className="flex justify-center mt-4">
                    <img src={MarketingImg} alt="Marketing" />
                </div>
            </div>
            <div className="inset-0 -z-10 bg-[#275E79]
        bg-[linear-gradient(to_right,#98C9E120_1px,transparent_1px),linear-gradient(to_bottom,#98C9E120_1px,transparent_1px)]
        bg-[size:80px_80px]">
                <div className="flex justify-center">
                    <div>
                        <p className="text-center text-white text-4xl font-bold font-serif mt-10">
                            Gameplay
                        </p>
                        <iframe
                            width="840"
                            height="472.5"
                            src="https://www.youtube.com/embed/bl6S4Koo_d4?si=ekpGjbVr5EqgMjhc"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="mt-10  mb-10"
                        >
                        </iframe>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link 
                        className="text-center text-blue-500 text-4xl font-bold font-serif mt-10 bg-white p-4 cursor-pointer"
                        to="https://frederox.itch.io/beyond-rescue"
                    >
                        Play on Itch.io
                    </Link>
                </div>
                <div className="h-20 w-full"></div>
            </div>
        </div>
    );
}
