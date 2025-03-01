import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
    { date: '16:00 - 16:30', name: 'Kumpul Panitia dan Juri' },
    { date: '16:30 - 17:00', name: 'Briefing Panitia dan Juri' },
    { date: '17:00 - 17:30', name: 'Open Gate & Registrasi' },
    { date: '17:30 - 17:50', name: 'Penjelasan Teknis' },
    { date: '17:50 - 18:00', name: 'Pembukaan oleh Juri/MC' },
    { date: '18:00 - 18:25', name: 'Match 1 Round 1' },
    { date: '18:25 - 18:35', name: 'Istirahat' },
    { date: '18:35 - 19:00', name: 'Match 1 Round 2' },
    { date: '19:00 - 19:10', name: 'Istirahat' },
    { date: '19:10 - 19:20', name: 'Penutupan & Pengumuman' },
    { date: '19:20 - 20:20', name: 'Evaluasi' }
];

function Rundown4Mar() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Rundown4Mar;
