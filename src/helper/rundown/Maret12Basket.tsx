import DayCard from "../../components/dayCard";

const events = [
    { date: '16:40 - 16:55', name: 'Registrasi Peserta' },
    { date: '16:55 - 17:15', name: 'Win group A vs Runner up group B ' },
    { date: '17:15 - 17:35', name: 'Win group B vs Runner up group A ' },
    { date: '17:35 - 17:50', name: 'Persiapan Pertandingan Putra' },
    { date: '17:50 - 18:50', name: 'B4 vs B5 (5x5 Putra)' },
    { date: '18:50 - 19:50', name: 'B6 vs B7 (5x5 Putra)' },
    { date: '19:50 - 20:05', name: 'Penutup' },


];

function Maret12Basket() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret12Basket
