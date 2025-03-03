import DayCard from "../../components/dayCard";

const events = [
    { date: '17:40 - 18:00', name: 'Registrasi Peserta' },
    { date: '18:00 - 18:10', name: 'Pembuka' },
    { date: '18:10 - 18:30', name: 'Round 1' },
    { date: '18:30 - 18:35', name: 'Istirahat' },
    { date: '18:35 - 18:55', name: 'Round 2' },
    { date: '18:55 - 19:00', name: 'Istirahat' },
    { date: '19:00 - 19:20', name: 'Round 3' },
    { date: '19:20 - 19:25', name: 'Istirahat' },
    { date: '19:25 - 19:45', name: 'Round 4' },
    { date: '19:45 - 19:50', name: 'Istirahat' },
    { date: '19:50 - 20:10', name: 'Round 5' },
    { date: '20:10 - 20:15', name: 'Istirahat' },
    { date: '20:15 - 20:35', name: 'Round 6' },
    { date: '20:35 - 20:40', name: 'Istirahat' },
    { date: '20:40 - 20:50', name: 'Pengumuman peserta yang lolos ke babak semifinal' },
];

function Maret6Catur() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret6Catur
