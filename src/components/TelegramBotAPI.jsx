import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TelegramBot = ({ userData, setUserData, tariff }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState('');

    const sendMessage = async () => {
        setIsLoading(true);
        setFeedback('');

        const message = `
📩 Yangi Ro'yxatdan O'tish:
💎 Tarif: ${tariff}
👤 Ismi: ${userData.name}
📱 Telefon: ${userData.phone}
⌛ Kuzatgan vaqt: ${userData.date}
`;


        const botToken = '7660889878:AAGh59OFOLwnDCePN7-79WocUJw6ZoVM0Yw';  // Replace with your Telegram Bot API token
        const chatId = '-1002584302575';  // Replace with the chat ID to which you want to send the message
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;


        try {
            const response = await axios.post(url, {
                chat_id: chatId,
                text: message,
                parse_mode: "HTML"
            });

            if (response.data.ok) {
                setUserData(null)
                setFeedback('Xabar muvaffaqiyatli yuborildi!');
                toast.success("Xabar muvaffaqiyatli yuborildi!")

            } else {
                setFeedback(`Xatolik: ${response.data.description}`);
                toast.error(`Xatolik: ${response.data.description}`)
            }
        } catch (error) {
            setFeedback(`Xatolik: ${error.message}`);
            toast.error(`Xatolik: ${error.message}`)
        } finally {
            setIsLoading(false);
        }
    };

    // Send message when userData changes
    useEffect(() => {
        if (userData) sendMessage();
    }, [userData]);

    return (
        <div>
            {isLoading && <p>Yuborilmoqda...</p>}
            {feedback && <p>{feedback}</p>}
        </div>
    );
};


export default TelegramBot