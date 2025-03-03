import DayCard from "../../components/dayCard";

const events = [
    { date: '15:30 - 15:45', name: 'Open Gate' },
    { date: '15:45 - 16:00', name: 'Registrasi' },
    { date: '16:00 - 16:06', name: 'Opening' },
    { date: '16:06 - 16:09', name: 'Sambutan Juri' },
    { date: '16:09 - 16:19', name: 'Penampilan dari ACC' },
    { date: '16:19 - 16:29', name: 'Penampilan dari VCD' },
    { date: '16:29 - 16:39', name: 'Penampilan dari FTP' },
    { date: '16:39 - 16:49', name: 'Penampilan dari COM' },
    { date: '16:49 - 16:59', name: 'Penampilan dari MED' },
    { date: '16:59 - 17:09', name: 'Break' },
    { date: '17:09 - 17:19', name: 'Penampilan dari FDB' },
    { date: '17:19 - 17:29', name: 'Penampilan dari PSY' },
    { date: '17:29 - 17:39', name: 'Penampilan dari IMT' },
    { date: '17:39 - 17:49', name: 'Penilaian Juri' },
    { date: '17:49 - 17:59', name: 'Closing' },

];

function Maret14Dance() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret14Dance
