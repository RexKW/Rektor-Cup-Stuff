import DayCard from "../../components/dayCard";

const events = [
    { date: '17:40 - 17:50', name: 'Registrasi Peserta' },
    { date: '17:50 - 18:00', name: 'Pengumuman Aturan, Mosi dan Draw Release' },
    { date: '18:00 - 18:15', name: 'Case Building' },
    { date: '18:15 - 19:05', name: 'Pertandingan 1 ' },
    { date: '19:05 - 19:10', name: 'Komentar Juri' },
    { date: '19:10 - 19:20', name: 'Istirahat' },
    { date: '19:20 - 19:25', name: 'Registrasi Ulang' },
    { date: '19:25 - 19:35', name: 'Pengumuman Mosi dan Draw Release' },
    { date: '19:35 - 19:50', name: 'Case Building' },
    { date: '19:50 - 20:40', name: 'Pertandingan 2' },
    { date: '20:40 - 20:50', name: 'Briefing next day' },
];

function Maret10Debate() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret10Debate
