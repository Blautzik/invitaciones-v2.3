import {useState, useEffect} from 'react';
import {EyesomeRegular} from '../../utils/fonts';
// ... (Countdown component remains the same)
export const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = new Date(targetDate) - now;

            if (difference > 0) {
                setTimeLeft({
                    Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    Min: Math.floor((difference / 1000 / 60) % 60),
                    Seg: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={`grid grid-cols-4 gap-4 ${EyesomeRegular.className}`}>
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                    <div className="text-4xl font-bold text-gray-800">{value}</div>
                    <div className="text-lg font-bold text-slate-900">{unit}</div>
                </div>
            ))}
        </div>
    );
};
