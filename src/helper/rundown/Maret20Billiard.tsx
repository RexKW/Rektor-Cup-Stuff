import DayCard from "../../components/dayCard";

const events = [
    { date: '19:45 - 20:00', name: 'Registrasi Peserta' },
    { date: '20:00 - 20:50', name: 'Babak juara 3 (2 meja)BO3' },
    { date: '20:50 - 20:53', name: 'Rotasi pemain ' },
    { date: '21:00 - 21:50', name: 'Babak final (2 meja)BO3' },
    { date: '21:50 - 21:53', name: 'Rotasi pemain ' },
    { date: '21:53 - 21:58', name: 'Penutupan' },

];

function Maret20Billiard() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret20Billiard
