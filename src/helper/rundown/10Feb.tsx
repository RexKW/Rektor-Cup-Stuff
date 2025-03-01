import React from 'react';
import DayCard from '../../components/dayCard'; // Adjust the path as needed

const events = [
  { date: '13:00 - 13:30', name: 'Persiapan' },
  { date: '13:20 - 13:50', name: 'Briefing Panitia' },
  { date: '13:50 - 14:00', name: 'Open Gate' },
  { date: '14:00 - 14:15', name: 'Performance Dance' },
  { date: '14:15 - 14:20', name: 'Opening' },
  { date: '14:20 - 14:21', name: 'Doa Pembuka' },
  { date: '14:21 - 14:23', name: 'Menyanyikan Indonesia Raya' },
  { date: '14:23 - 14:26', name: 'Menyanyikan Hymne UC' },
  { date: '14:26 - 14:29', name: 'Sambutan Ketua UKM Basket Universitas Ciputra' },
  { date: '14:30 - 14:33', name: 'Sambutan Ketua Pelaksana Rektor Cup 2025' },
  { date: '14:33 - 14:36', name: 'Sambutan Presiden Student Council' },
  { date: '14:37 - 14:40', name: 'Sambutan Perwakilan SA' },
  { date: '14:40 - 14:43', name: 'Sambutan Wakil Pelaksana Rektor Cup 2025' },
  { date: '14:45 - 14:55', name: 'Peresmian UC CHAMPIONS 2025' },
  { date: '14:57 - 14:59', name: 'Doa Penutup' },
  { date: '14:59 - 15:04', name: 'Doa Penutup' }
];

const Rundown10Feb = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
};

export default Rundown10Feb;
