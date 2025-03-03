import DayCard from "../../components/dayCard";

const events = [
    { date: '16:45 - 17:00', name: 'Registrasi Peserta' },
    { date: '17:00 - 17:30', name: 'Pemenang Q1 Vs Pemenang Q2' },
    { date: '17:30 - 18:00', name: 'Pemenang Q3 Vs Pemenang Q4' },
    { date: '18:00 - 18:30', name: 'Kalah SF1 Vs Kalah SF2' },
    { date: '18:30 - 18:40', name: 'Istirahat' },
    { date: '18:40 - 19:10', name: 'Pemenang SF 1 Vs SF 2' },
    { date: '19:10 - 19:20', name: 'Istirahat' },
    { date: '19:20 - 19:50', name: 'Team Menang Vs GT Tim 7 (Lap 1) & Team Menang Vs GT Tim 12 (Lap 2) (Final) ' },
    { date: '19:50 - 20:05', name: 'Penutupan' },
];

function Maret5Badminton() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret5Badminton
