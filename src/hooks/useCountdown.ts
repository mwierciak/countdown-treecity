import { useEffect, useState } from 'react';

export const useCountdown = (initialTime: number, callback: () => void, interval = 1000) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const customInterval = setInterval(() => {
            if(time > 0) setTime((prev) => prev - interval);
        }, interval);

        if(time === 0) {
            callback();
            clearInterval(customInterval);
        }

        return () => clearInterval(customInterval);
    }, [time]);

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
}