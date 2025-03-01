import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
  { date: '13:00 - 13:30', name: 'Panitia Berkumpul, Persiapan dan cek perlengkapan & sound' },
  { date: '13:30 - 14:00', name: 'Briefing panitia & panitia stand by' },
  { date: '14:00 - 14:25', name: 'OPEN GATE (prepare peserta)' },
  { date: '14:25 - 14:40', name: 'Registrasi' },
  { date: '14:40 - 14:45', name: 'Opening MC & Mengumumkan adanya vote most favorite band' },
  { date: '14:45 - 14:48', name: 'Sambutan Juri' },
  { date: '14:48 - 14:51', name: 'MC Chit Chat & menyambut peserta pertama' },
  { date: '14:51 - 15:01', name: 'PSY' },
  { date: '15:01 - 15:04', name: 'Komentar juri & MC menyambut peserta selanjutnya' },
  { date: '15:04 - 15:14', name: 'COM' },
  { date: '15:14 - 15:17', name: 'Komentar juri & MC menyambut peserta selanjutnya' },
  { date: '15:17 - 15:27', name: 'VCD' },
  { date: '15:27 - 15:30', name: 'Komentar juri & MC menyambut peserta selanjutnya' },
  { date: '15:30 - 15:40', name: 'IBM' },
  { date: '15:40 - 15:43', name: 'Komentar juri' },
  { date: '15:43 - 15:46', name: 'MC say thankyou Lomba Band & mengumumkan vote most favorite band ditutup saat akan awarding band' },
  { date: '15:46 - 15:49', name: 'Hitung Kertas Poin Penjurian' },
  { date: '15:49 - 15:51', name: 'Closing' },
  { date: '16:37 - 16:40', name: 'Pengumuman pemenang & most fav' }
];

function Rundown21Mar() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Rundown21Mar;
