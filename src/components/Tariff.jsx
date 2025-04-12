import { FaUnlock } from "react-icons/fa";
import SendMessage from "./SendMessage";

const Tariff = () => {
    return (
        <section id="pricing" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                O’zingiz uchun qulay tarifni tanlang
            </h3>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {/* Standart */}
                <div
                    data-aos="zoom-in-right"
                    className="bg-white p-6 rounded-3xl shadow-lg border w-full max-w-sm">
                    <h4 className="my-8 text-2xl sm:text-4xl font-bold text-[#8b1f38] uppercase">Standart</h4>
                    <ul className="flex flex-col items-start gap-5">
                        <li className="flex items-center gap-3">
                            <FaUnlock size={25} color="#8b1f38" />
                            <p className="w-full sm:w-56">Kursning barcha onlayn darsliklari</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaUnlock size={25} color="#8b1f38" />
                            <p className="w-full sm:w-56">Kurator bilan yopiq telegram guruhga qo'shilish</p>
                        </li>
                    </ul>
                    <button className="my-6 w-full bg-[#e9e9e9] hover:bg-[#aba8a8] px-8 py-3 rounded-xl font-semibold uppercase text-lg shadow-lg">
                        Batafsil ma'lumot
                    </button>
                    <p className="text-base font-semibold sm:text-3xl my-5">6 200 000 UZS</p>
                    <SendMessage tariff={"Standart"} />
                </div>

                {/* Premium */}
                <div
                    data-aos="flip-up"
                    data
                    className="bg-[#ffe187] p-6 rounded-3xl shadow-lg border w-full max-w-sm">
                    <h4 className="my-8 text-2xl sm:text-4xl font-bold text-[#8b1f38] uppercase">Premium</h4>
                    <ul className="flex flex-col items-start gap-5">
                        <li className="flex items-center gap-3">
                            <FaUnlock size={25} color="#8b1f38" />
                            <p className="w-full sm:w-56">Standart tarifidagi barcha imkoniyatlar</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaUnlock size={25} color="#8b1f38" />
                            <p className="w-full sm:w-56">
                                <b>Suhrob Meliboyev</b> bilan haftalik zoom darslar
                            </p>
                        </li>
                    </ul>
                    <button className="my-6 w-full bg-[#e9e9e9] hover:bg-[#aba8a8] px-8 py-3 rounded-xl font-semibold uppercase text-lg shadow-lg">
                        Batafsil ma'lumot
                    </button>
                    <p className="text-base font-semibold sm:text-3xl my-5">7 500 000 UZS</p>
                    <SendMessage tariff={"Premium"} />
                </div>

                {/* VIP */}
                <div
                    data-aos="zoom-in-left"
                    className="bg-[#b60000] p-6 rounded-3xl shadow-lg border w-full max-w-sm">
                    <h4 className="my-8 text-2xl sm:text-4xl font-bold text-white uppercase">Vip</h4>
                    <ul className="flex flex-col items-start gap-5">
                        <li className="flex items-center gap-3">
                            <FaUnlock size={25} color="#ffb800" />
                            <p className="w-full sm:w-56 text-white">Barcha Premium tarifidagi imkoniyatlar</p>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaUnlock size={25} color="#ffb800" />
                            <p className="w-full sm:w-56 text-white">
                                <b>Suhrob Meliboyev</b> bilan 3 marta oflayn yoki onlayn uchrashuv
                            </p>
                        </li>
                    </ul>
                    <button className="my-6 w-full bg-[#e9e9e9] hover:bg-[#aba8a8] px-8 py-3 rounded-xl font-semibold uppercase text-lg shadow-lg">
                        Batafsil ma'lumot
                    </button>
                    <p className="text-base text-white font-semibold sm:text-3xl my-5">28 000 000 UZS</p>
                    <SendMessage tariff={"VIP"} />
                </div>
            </div>
        </section>
    );
};

export default Tariff;
