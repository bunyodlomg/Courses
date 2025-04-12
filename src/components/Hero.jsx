import { IoCalendarSharp } from "react-icons/io5";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section className="container min-h-screen px-5 md:px-32 scroll-smooth">
            <Navbar />
            <div className="flex flex-col-reverse md:flex-row items-center justify-between py-10 gap-10">
                {/* Text Section */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="3000"
                     className="text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2 bg-[#cc263e] rounded-3xl p-4 md:p-5 text-white w-full max-w-xs md:max-w-md">
                        <IoCalendarSharp size={40} className="animate-pulse" />
                        <div className="text-left">
                            <p className="leading-[10px] text-sm md:text-base text-slate-100">Vebinar kuni</p>
                            <h3 className="text-3xl md:text-5xl">15-mart</h3>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-10 max-w-xl px-2">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold -tracking-[1px] md:-tracking-[2px]">
                            2025 yilda kripto bozorida qo‘rquvsiz daromad qiling
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-md">
                            Kursga ro'yxatdan o'tish uchun pastdagi tugmani bosing
                        </p>
                    </div>
                    <a
                        href="#pricing"
                        className="animate-btn mt-10 md:mt-14 w-full max-w-md text-2xl md:text-3xl lg:text-4xl bg-[#cc263e] px-6 py-5 md:py-8 rounded-3xl font-semibold text-white uppercase text-center"
                    >
                        Ro‘yxatdan o‘tish
                    </a>
                </div>

                {/* Image Section */}
                <div data-aos="fade-up"
                    data-aos-duration="3000"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <img className="w-full object-contain" src="/man.png" alt="man photo" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
