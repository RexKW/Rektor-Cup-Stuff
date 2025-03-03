import DayCard from "../../components/dayCard";

const events = [
    { date: '17:40 - 17:50', name: 'Registrasi Peserta' },
    { date: '17:50 - 18:00', name: 'Pengumuman Aturan, Mosi dan Draw Release' },
    { date: '18:00 - 18:15', name: 'Case Building' },
    { date: '18:15 - 19:05', name: 'perebutan juara 3' },
    { date: '19:05 - 19:20', name: 'Istirahat' },
    { date: '19:20 - 19:25', name: 'Registrasi Ulang' },
    { date: '19:25 - 19:35', name: 'Mosi dan Draw Release' },
    { date: '19:35 - 20:05', name: 'Case Building' },
    { date: '20:05 - 21:05', name: 'Grand final ' },
    { date: '21:05 - 21:10', name: 'Penutup' },

];

function Maret12Debate() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret12Debate
