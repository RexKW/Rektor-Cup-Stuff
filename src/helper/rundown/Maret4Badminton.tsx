import DayCard from "../../components/dayCard";

const events = [
    { date: '16:45 - 17:00', name: 'Open Gate & Registrasi' },
    { date: '17:00 - 17:30', name: 'Match 1 (Lap 1) & Match 3 (Lap 2)' },
    { date: '17:30 - 17:40', name: 'Istirahat' },
    { date: '17:40 - 18:10', name: 'Match 2 (Lap 1) & Match 4 (Lap 2)' },
    { date: '18:10 - 18:20', name: 'Istirahat' },
    { date: '18:20 - 18:50', name: 'Team Menang Vs GT Tim 1 (Lap 1) & Team Menang Vs GT Tim 11 (Lap 2) ' },
    { date: '18:50 - 19:00', name: 'Istirahat' },
    { date: '19:00 - 19:30', name: 'Team Menang Vs GT Tim 7 (Lap 1) & Team Menang Vs GT Tim 12 (Lap 2) ' },
    { date: '19:30 - 20:15', name: 'Penutupan' },
];

function Maret4Badminton() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret4Badminton
