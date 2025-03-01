import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
    { date: '16:30 - 17:00', name: 'Kumpul Panitia' },
    { date: '17:00 - 17:10', name: 'Briefing Panitia' },
    { date: '17:10 - 17:25', name: 'Registrasi Peserta' },
    { date: '17:25 - 17:35', name: 'Pembuka dan Pengumuman Aturan' },
    { date: '17:35 - 17:40', name: 'Peserta Mobile ke ruang masing-masing' },
    { date: '17:40 - 18:00', name: 'ISHOMA' },
    { date: '18:00 - 18:10', name: 'Persiapan Masuk Room (in-game)' },
    { date: '18:10 - 18:55', name: 'Match 1 (Miramar)' },
    { date: '18:55 - 19:00', name: 'Istirahat' },
    { date: '19:00 - 19:05', name: 'Persiapan Masuk Room (in-game)' },
    { date: '19:05 - 19:50', name: 'Match 2 (Erangel)' },
    { date: '19:50 - 19:55', name: 'Istirahat' },
    { date: '19:55 - 20:00', name: 'Persiapan Masuk Room (in-game)' },
    { date: '20:00 - 20:40', name: 'Match 3 (Vikendi)' },
    { date: '20:40 - 20:45', name: 'Mobile ke Theater Lt. 9' },
    { date: '20:45 - 20:55', name: 'Penutupan + Eval' }
];

function Rundown18Mar() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event, index) => (
        <DayCard key={index} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Rundown18Mar;
