import DayCard from "../../components/dayCard";

const events = [
    { date: '17:00 - 17:30', name: 'Open Gate & Registrasi' },
    { date: '17:30 - 17:50', name: 'Penjelasan Teknis' },
    { date: '17:50 - 18:00', name: 'Pembukaan oleh Juri/MC' },
    { date: '18:00 - 18:25', name: 'Match 1 Round 1' },
    { date: '18:25 - 18:50', name: 'Match 1 Round 2' },
    { date: '18:50 - 19:00', name: 'Istirahat' },
    { date: '19:05 - 19:30', name: 'Match 2 Round 1' },
    { date: '19:30 - 19:55', name: 'Match 2 Round 1' },
    { date: '19:55 - 20:20', name: 'Penutupan' },
];

function Maret5() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret5
