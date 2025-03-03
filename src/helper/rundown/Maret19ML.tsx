import DayCard from "../../components/dayCard";

const events = [
    { date: '17:00 - 17:15', name: 'Registrasi Peserta' },
    { date: '17:15 - 17:25', name: 'Pembuka dan Pengumuman Aturan' },
    { date: '17:25 - 17:35', name: 'Persiapan Match & Masuk Room' },
    { date: '17:35 - 18:00', name: 'Match 1 (Babak 1)' },
    { date: '18:05 - 18:15', name: 'Pergantian Tim, Persiapan Match & Masuk Room' },
    { date: '18:15 - 18:40', name: 'Match 2 (Babak 2 & Babak Kekalahan 1)' },
    { date: '18:40 - 18:50', name: 'Pergantian Tim, Persiapan Match & Masuk Room' },
    { date: '18:50 - 19:15', name: 'Match 3 (Babak 3 & Babak Kekalahan 2)' },
    { date: '19:15 - 19:25', name: 'Pergantian Tim, Persiapan Match & Masuk Room' },
    { date: '19:25 - 19:50', name: 'Match 4 (Babak Kekalahan 3)' },
    { date: '19:50 - 20:00', name: 'Pergantian Tim, Persiapan Match & Masuk Room' },
    { date: '20:00 - 20:25', name: 'Match 5 (Babak Kekalahan 4)' },
    { date: '20:25 - 20:35', name: 'Pergantian Tim, Persiapan Match & Masuk Room' },
    { date: '20:35 - 21:00', name: 'Match 6 (Babak Kekalahan 5)' },
    { date: '21:00 - 21:15', name: 'ISHOMA' },
    { date: '21:15 - 21:25', name: 'Penutupan' },
];

function Maret19ML() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Maret19ML;
