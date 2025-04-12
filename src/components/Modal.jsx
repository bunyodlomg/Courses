import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
const Modal = ({ onSubmit }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const handleSubmit = (e) => {
        if (name.length && phone.length && date.length) {
            setIsOpen(false);
            onSubmit({ name, phone, date });
        }
    };

    return (
        <div>
            {/* Modalni ochish tugmasi */}
            <button
                onClick={() => setIsOpen(true)}
                className="animate-btn mt-4 text-[26px] text-white font-medium uppercase px-6 py-4 rounded-xl hover:bg-[#451219] transition duration-300 shadow-[rgba(252,77,102,0.25)_0px_30px_60px_-12px_inset,rgba(164,26,45,0.3)_0px_18px_36px_-18px_inset] bg-gradient-to-r from-[#fc4d66] to-[#a41a2d]"
            >
                Ro'yxatdan O'tish
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)} // Fon bosilganda yopiladi
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-full max-w-xl relative"
                        onClick={(e) => e.stopPropagation()} // Modal ichini bosganda yopilmaydi
                    >
                        {/* Yopish tugmasi */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2  hover:text-black text-xl"
                        >
                            &times;
                        </button>

                        {/* Kontent */}
                        <div className="p-6">
                            <h3 className="text-4xl text-center mb-6 font-medium">
                                Standart tarifiga ro'yxatdan o'tish
                            </h3>
                            <div className="mb-4">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    autoComplete="on"
                                    placeholder="Ism Familyangiz"
                                    className="w-full border border-slate-400 rounded px-3 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-800"
                                />
                            </div>
                            <PhoneInput
                                defaultCountry="uz"
                                value={phone}
                                onChange={setPhone}
                                style={{
                                    padding: "4px", width: "100%", marginBottom: "20px"
                                }}
                                inputProps={{
                                    required: true,
                                    autoComplete: "on",
                                    className: "text-gray-950 h-[52px] border border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800 rounded"
                                }}
                            />
                            <h3>Suhrob Meliboyevni qancha vaqtdan beri kuzatasiz?</h3>
                            <div className="relative flex flex-col rounded-xl bg-white shadow mb-5">
                                <nav className="flex min-w-[240px] flex-col gap-1 p-2">
                                    <label className="flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-slate-100 rounded-lg transition-all">
                                        <input onChange={(e) => setDate(e.target.value)} type="radio" name="duration" value="1month" className="accent-black" />
                                        <span className="text-sm">1 oydan beri</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-slate-100 rounded-lg transition-all">
                                        <input onChange={(e) => setDate(e.target.value)} type="radio" name="duration" value="6months" className="accent-black" />
                                        <span className="text-sm">6 oydan beri</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-slate-100 rounded-lg transition-all">
                                        <input onChange={(e) => setDate(e.target.value)} type="radio" name="duration" value="1year" className="accent-black" />
                                        <span className="text-sm">1+ yildan beri</span>
                                    </label>
                                </nav>
                            </div>

                            <button onClick={handleSubmit} className="w-full uppercase font-semibold bg-black text-white py-2 rounded hover:bg-opacity-85 transition">
                                Ro'yxatdan o'tish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
