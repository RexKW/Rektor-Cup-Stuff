import DayCard from "../../components/dayCard";

const events = [
    { date: '16:40 - 16:55', name: 'Registrasi Peserta' },
    { date: '16:55 - 17:15', name: 'lose _ vs lose _ (Juara 3)' },
    { date: '17:15 - 17:35', name: 'Win _ vs Win _ (Juara 1 & 2) ' },



];

function Maret13Basket() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret13Basket
