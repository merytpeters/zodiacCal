import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import ZodiacCard from './components/ZodiacCard';
import zodiacData from './data/zodiacData';
import './styles/App.css';

const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [zodiacSign, setZodiacSign] = useState(null);
    const [error, setError] = useState('');

    const handleDateChange = (date) => {
        console.log('Received date:', date); // Debugging log
        if (!date || !(date instanceof Date) || isNaN(date)) {
            console.log('Invalid date received.'); // Debugging log
            setError('Please select a valid date.');
            setZodiacSign(null);
            return;
        }

        console.log('Valid date received:', date); // Debugging log
        setSelectedDate(date); // Correctly set the selected date
        setError('');
        const sign = determineZodiacSign(date); // Determine the zodiac sign
        if (sign) {
            console.log('Zodiac sign determined:', sign.name); // Debugging log
            setZodiacSign(sign);
        } else {
            console.log('No zodiac sign matched.'); // Debugging log
            setZodiacSign(null);
            setError('Please select a valid date.');
        }
    };

    const determineZodiacSign = (date) => {
        const month = date.getMonth() + 1; // Months are zero-indexed
        const day = date.getDate();

        console.log('Determining zodiac sign for:', { month, day }); // Debugging log

        for (const zodiac of zodiacData) {
            const [startMonth, startDay] = zodiac.dateRange[0];
            const [endMonth, endDay] = zodiac.dateRange[1];

            if (
                (month === startMonth && day >= startDay) ||
                (month === endMonth && day <= endDay) ||
                (month > startMonth && month < endMonth) ||
                (startMonth > endMonth && // Handles zodiac signs spanning across years (e.g., Capricorn)
                    ((month === startMonth && day >= startDay) || 
                     (month === endMonth && day <= endDay) || 
                     (month > startMonth || month < endMonth)))
            ) {
                console.log('Matched zodiac:', zodiac.name); // Debugging log
                return zodiac;
            }
        }

        console.log('No zodiac match found.'); // Debugging log
        return null;
    };

    const formatDateRange = (dateRange) => {
        const [start, end] = dateRange;
        const startFormatted = `${start[0].toString().padStart(2, '0')}/${start[1].toString().padStart(2, '0')}`;
        const endFormatted = `${end[0].toString().padStart(2, '0')}/${end[1].toString().padStart(2, '0')}`;
        return `${startFormatted} - ${endFormatted}`;
    };

    return (
        <div className="app-container">
            <h1 className="title">Zodiac Sign Calculator</h1>
            <DatePicker onDateChange={handleDateChange} />
            {error && <p className="error">{error}</p>}
            {zodiacSign && (
                <>
                    {console.log('Rendering ZodiacCard with:', zodiacSign)} {/* Debugging log */}
                    <ZodiacCard
                        sign={zodiacSign.name}
                        dateRange={formatDateRange(zodiacSign.dateRange)} // Format the date range
                        description={zodiacSign.description}
                        image={zodiacSign.image}
                        color={zodiacSign.color}
                    />
                </>
            )}
            <footer className="footer">
                <p className="footer-text">© 2025 Zodiac Sign Calculator</p>
                <p className="footer-text">Created by Meryt Peters</p>
                <p className="footer-text">All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;