import DayCard from "../../components/dayCard";

const events = [
    { date: '16:40 - 16:55', name: 'Registrasi Peserta' },
    { date: '16:55 - 17:15', name: 'A1 vs A2 (Group A)' },
    { date: '17:15 - 17:35', name: 'B1 vs B2 (Group B)' },
    { date: '17:35 - 17:55', name: 'A1 vs A3 (Group A)' },
    { date: '17:55 - 18:10', name: 'Persiapan Pertandingan Putra' },
    { date: '18:10 - 19:00', name: 'A vs B (5x5 Putra)' },
    { date: '19:00 - 19:50', name: 'C vs D (5x5 Putra)' },
    { date: '19:50 - 20:40', name: 'E vs F (5x5 Putra)' },
    { date: '20:50 - 21:30', name: 'H vs I (5x5 Putra)' },
    { date: '21:30 - 21:45', name: 'Penutup' },
];

function Maret10Basket() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret10Basket
