import DayCard from "../../components/dayCard";

const events = [
    { date: '16:40 - 16:55', name: 'Registrasi Peserta' },
    { date: '17:00 - 18:15', name: 'B8.5 vs B9.5 (5x5 Putra)' },
    { date: '18:15 - 19:30', name: 'B8 vs B9 (5x5 Putra)' },
    { date: '19:30 - 19:45', name: 'Penutup' },



];

function Maret14Basket() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret14Basket
