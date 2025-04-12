import { useState } from 'react';
import TelegramBot from './TelegramBotAPI';
import Modal from './Modal';
import { Toaster } from 'react-hot-toast';

const SendMessage = ({ tariff }) => {
    const [userData, setUserData] = useState(null);

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Modal onSubmit={setUserData} />
            {userData && <TelegramBot userData={userData} setUserData={setUserData} tariff={tariff} />}
        </div>
    );
};

export default SendMessage;
