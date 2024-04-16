import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import bannerImg1 from "../../../assets/Image/pexels-thirdman-5256816.jpg"
import bannerImg2 from "../../../assets/Image/pexels-alexander-suhorucov-6457568.jpg"
import bannerImg3 from "../../../assets/Image/pexels-sora-shimazaki-5673497.jpg"

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1 relative">
                <img src={bannerImg1} className="h-[100vh] w-full" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center pl-24 bg-black bg-opacity-50">
                    <div className="text-white p-4 space-y-4">
                        <h2 className="text-6xl font-bold">Discover the world <br />of Business</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Rerum ratione accusamus, nulla sint quae quidem.</p>
                        <button className="py-2 px-4 rounded-2xl border-2 border-red-700 hover:bg-red-700"> Read More </button>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide2 relative">
                <img src={bannerImg2} className="h-[600px] w-full" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center pl-24 bg-black bg-opacity-50">
                    <div className="text-white mt-5 p-4 space-y-4">
                        <h2 className="text-6xl font-bold">
                            Crowdsourcing & <br />Alternative Finance</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Rerum ratione accusamus, nulla sint quae quidem.</p>
                        <button className="py-2 px-4 rounded-2xl border-2 border-red-700 hover:bg-red-700"> Read More </button>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide3 relative">
                <img src={bannerImg3} className="h-[600px] w-full" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center pl-24 bg-black bg-opacity-50">
                    <div className="text-white mt-5 p-4 space-y-4">
                        <h2 className="text-6xl font-bold">Global Trade & <br />Contracts</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Rerum ratione accusamus, nulla sint quae quidem.</p>
                        <button className="py-2 px-4 rounded-2xl border-2 border-red-700 hover:bg-red-700"> Read More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;