import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
    { date: '11:00 - 11:30', name: 'Briefing Panitia' },
    { date: '11:30 - 13:00', name: 'Persiapan' },
    { date: '13:00 - 13:10', name: 'Open Gate' },
    { date: '13:10 - 13:20', name: 'Performance Biola' },
    { date: '13:20 - 13:23', name: 'Opening' },
    { date: '13:23 - 13:24', name: 'Doa Pembuka' },
    { date: '13:24 - 13:26', name: 'Indonesia Raya' },
    { date: '13:26 - 13:29', name: 'Hymne UC' },
    { date: '13:29 - 13:29', name: 'MC Time' },
    { date: '13:29 - 13:32', name: 'Sambutan Ketua Pelaksana Rektor Cup' },
    { date: '13:32 - 13:33', name: 'MC Time' },
    { date: '13:33 - 13:36', name: 'Sambutan Presiden Student Council' },
    { date: '13:36 - 13:36', name: 'MC Time' },
    { date: '13:36 - 13:39', name: 'Sambutan Rektor' },
    { date: '13:39 - 13:40', name: 'MC Time' },
    { date: '13:40 - 13:40', name: 'School Of Business and Management' },
    { date: '13:40 - 13:42', name: 'Penampilan Parade ACC' },
    { date: '13:42 - 13:44', name: 'Penampilan Parade BMI' },
    { date: '13:44 - 13:44', name: 'Penampilan Parade IBM' },
    { date: '13:44 - 13:46', name: 'School Of Psychology' },
    { date: '13:46 - 13:48', name: 'Penampilan Parade PSY' },
    { date: '13:48 - 13:50', name: 'School Of Communication Science and Media Business' },
    { date: '13:50 - 13:50', name: 'Penampilan Parade FIKOM' },
    { date: '13:50 - 13:52', name: 'School Of Tourism' },
    { date: '13:52 - 13:52', name: 'Penampilan Parade HTEB' },
    { date: '13:52 - 13:54', name: 'Penampilan Parade CB' },
    { date: '13:54 - 13:56', name: 'Penampilan Parade FTP' },
    { date: '13:56 - 13:58', name: 'School Of Medicine' },
    { date: '13:58 - 13:58', name: 'Penampilan Parade MED' },
    { date: '13:58 - 14:00', name: 'School Of Creative Industry' },
    { date: '14:00 - 14:00', name: 'Penampilan Parade VCD' },
    { date: '14:00 - 14:02', name: 'Penampilan Parade INA' },
    { date: '14:02 - 14:02', name: 'Penampilan Parade FDB' },
    { date: '14:02 - 14:04', name: 'School Of Information Technology' },
    { date: '14:04 - 14:06', name: 'Penampilan Parade IMT' },
    { date: '14:06 - 14:08', name: 'Penampilan Parade ISB' },
    { date: '14:08 - 14:10', name: 'MC Time' },
    { date: '14:10 - 14:20', name: 'Peresmian Rektor Cup 2025' },
    { date: '14:20 - 14:22', name: 'MC Time' },
    { date: '14:22 - 14:37', name: 'Performance UKM Resonance' },
    { date: '14:37 - 14:39', name: 'Doa Penutup' },
    { date: '14:39 - 14:44', name: 'Closing' }
];

function Rundown3Mar() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Rundown3Mar;
