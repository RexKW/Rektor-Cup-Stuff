import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
    { date: '16:00 - 16:30', name: 'Kumpul Panitia dan Juri' },
    { date: '16:30 - 17:00', name: 'Briefing Panitia dan Juri' },
    { date: '17:00 - 17:30', name: 'Open Gate & Registrasi' },
    { date: '17:30 - 17:50', name: 'Penjelasan Teknis' },
    { date: '17:50 - 18:00', name: 'Pembukaan oleh Juri/MC' },
    { date: '18:00 - 18:25', name: 'Match 1 Round 1' },
    { date: '18:25 - 18:50', name: 'Match 1 Round 2' },
    { date: '18:50 - 19:00', name: 'Istirahat' },
    { date: '19:00 - 19:05', name: 'MC Time' },
    { date: '19:05 - 19:30', name: 'Match 2 Round 1' },
    { date: '19:30 - 19:55', name: 'Match 2 Round 2' },
    { date: '19:55 - 20:20', name: 'Penutupan' },
    { date: '20:20 - 21:20', name: 'Evaluasi' }
];

function Rundown5Mar() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event, index) => (
        <DayCard key={index} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Rundown5Mar;
