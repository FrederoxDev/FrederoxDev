import MarketingImg from "../assets/portfolio/Image-3.png";

export function BeyondRescue() {
    return (
        <>
            <div className="bg-[url('./assets/portfolio/corkboard.png')] w-full">
                <p className="text-black text-3xl text-center">
                    Beyond Rescue
                </p>

                <div className="flex justify-center mt-4">
                    <img src={MarketingImg} alt="Marketing" />
                </div>
            </div>
            <div className="bg-blue-500 ">
                <div className="flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/MNRdehuVPGQ?si=2wEBVltqD3F_JK05"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="mt-10  mb-10"
                    >
                    </iframe>
                    <div>
                        <p>Downloads</p>
                    </div>
                </div>
            </div>
        </>
    );
}
