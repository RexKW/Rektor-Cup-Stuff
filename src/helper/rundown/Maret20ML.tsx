import DayCard from "../../components/dayCard";

const events = [
    { date: '17:10 - 17:25', name: 'Registrasi Peserta' },
    { date: '17:25 - 17:35', name: 'Pembuka dan Pengumuman Aturan' },
    { date: '17:35 - 17:45', name: 'Persiapan Match & Masuk Room' },
    { date: '17:45 - 18:10', name: 'Match 1 (Semifinal)' },
    { date: '18:10 - 18:20', name: 'Pergantian Tim & First Pick Match 2' },
    { date: '18:20 - 19:35', name: 'Match 2 BO 2 (Juara 3)' },
    { date: '19:35 - 19:45', name: 'Pergantian Tim & First Pick Match 3' },
    { date: '19:45 - 21:00', name: 'Match 3 BO 2 (Final)' },
    { date: '21:00 - 21:15', name: 'ISHOMA' },
    { date: '21:15 - 21:25', name: 'Penutupan & Announcements Finalist MLBB' },
];

function Maret20ML() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Maret20ML;
