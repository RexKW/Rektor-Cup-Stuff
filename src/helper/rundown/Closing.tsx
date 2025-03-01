import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
  { date: '13:00 - 13:30', name: 'Panitia Berkumpul, Persiapan dan cek perlengkapan & sound' },
  { date: '13:30 - 14:00', name: 'Briefing panitia & panitia stand by' },
  { date: '14:00 - 14:25', name: 'OPEN GATE (Prepare Band + prepare peserta)' },
  { date: '14:25 - 14:40', name: 'Registrasi' },
  { date: '14:40 - 14:45', name: 'Opening MC & Mengumumkan adanya vote most favorite band' },
  { date: '14:45 - 14:48', name: 'Sambutan Juri' },
  { date: '14:48 - 14:51', name: 'MC Chit Chat' },
  { date: '14:51 - 15:01', name: 'PSY' },
  { date: '15:01 - 15:04', name: 'Komentar juri' },
  { date: '15:04 - 15:14', name: 'COM' },
  { date: '15:14 - 15:17', name: 'Komentar juri' },
  { date: '15:17 - 15:27', name: 'VCD' },
  { date: '15:27 - 15:30', name: 'Komentar juri' },
  { date: '15:30 - 15:40', name: 'IBM' },
  { date: '15:40 - 15:43', name: 'Komentar juri' },
  { date: '15:43 - 15:46', name: 'MC say thankyou Lomba Band & mengumumkan vote most favorite band ditutup saat akan awarding band' },
  { date: '15:46 - 15:51', name: 'Opening' },
  { date: '15:51 - 15:53', name: 'Doa pembuka' },
  { date: '15:53 - 15:56', name: '"Indonesia Raya"' },
  { date: '15:56 - 16:00', name: '"Hymne UC"' },
  { date: '16:00 - 16:02', name: 'MC Time' },
  { date: '16:02 - 16:07', name: 'Sambutan Ketua Pelaksana' },
  { date: '16:07 - 16:08', name: 'MC Time' },
  { date: '16:08 - 16:13', name: 'Sambutan Presiden SC' },
  { date: '16:13 - 16:14', name: 'MC Time' },
  { date: '16:14 - 16:19', name: 'Sambutan Perwakilan Student Affairs' },
  { date: '16:19 - 16:20', name: 'MC Time' },
  { date: '16:20 - 16:25', name: 'Play StoryLine PDD' },
  { date: '16:25 - 16:35', name: 'Closing' },
  { date: '16:35 - 16:37', name: 'MC Time' },
  { date: '16:37 - 16:40', name: 'Awarding Art (Dance)' },
  { date: '16:40 - 16:43', name: 'Awarding Art (Band)' },
  { date: '16:43 - 16:44', name: 'MC Time' },
  { date: '16:44 - 16:51', name: 'Performance' },
  { date: '16:51 - 16:52', name: 'MC Time' },
  { date: '16:52 - 16:55', name: 'Awarding Learning (Catur)' },
  { date: '16:55 - 16:58', name: 'Awarding Learning (Debat)' },
  { date: '16:58 - 17:01', name: 'Awarding Learning (COC)' },
  { date: '17:01 - 17:02', name: 'MC Time' },
  { date: '17:02 - 17:09', name: 'Performance' },
  { date: '17:09 - 17:10', name: 'MC Time' },
  { date: '17:10 - 17:13', name: 'Awarding Sport (Futsal)' },
  { date: '17:13 - 17:16', name: 'Awarding Sport (Badminton)' },
  { date: '17:16 - 17:19', name: 'Awarding Sport (Billiard Putra)' },
  { date: '17:19 - 17:22', name: 'Awarding Sport (Billiard Putri)' },
  { date: '17:22 - 17:25', name: 'Awarding Sport (Basket Putra)' },
  { date: '17:25 - 17:28', name: 'Awarding Sport (Basket Putri)' },
  { date: '17:28 - 17:29', name: 'MC Time' },
  { date: '17:29 - 17:32', name: 'Awarding E-Sport (PUBG)' },
  { date: '17:32 - 17:35', name: 'Awarding E-Sport (Mobile Legends)' },
  { date: '17:35 - 17:36', name: 'MC Time' },
  { date: '17:36 - 17:41', name: 'Awarding best Supporter' },
  { date: '17:41 - 17:44', name: 'Penyerahan Piala' },
  { date: '17:44 - 17:49', name: 'Peresmian penutupan Rektor Cup 2025' },
  { date: '17:49 - 17:53', name: 'Dokumentasi' },
  { date: '17:53 - 17:54', name: 'MC Time' },
  { date: '17:54 - 17:58', name: 'After Movie' },
  { date: '17:58 - 18:03', name: 'SNS' },
  { date: '18:03 - 18:23', name: 'Drama Musikal' },
  { date: '18:23 - 18:27', name: 'Closing' },
  { date: '18:27 - 19:27', name: 'DJ' },
  { date: '19:27 - 21:27', name: 'Clear Area' }
];

function Closing() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Closing;
