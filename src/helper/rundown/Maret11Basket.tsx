import DayCard from "../../components/dayCard";

const events = [
    { date: '16:40 - 16:55', name: 'Registrasi Peserta' },
    { date: '16:55 - 17:15', name: 'B1 vs B3 (Group B)' },
    { date: '17:15 - 17:35', name: 'A2 vs A3 (Group A)' },
    { date: '17:35 - 17:55', name: 'B2 vs B3 (Group B)' },
    { date: '17:55 - 18:10', name: 'Persiapan Pertandingan Putra' },
    { date: '18:10 - 19:00', name: 'B1 vs G (5x5 Putra)' },
    { date: '19:00 - 19:50', name: 'B2 vs J (5x5 Putra)' },
    { date: '19:50 - 20:40', name: 'B3 vs K (5x5 Putra)' },
    { date: '20:40 - 20:55', name: 'Penutup' },

];

function Maret11Basket() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret11Basket
