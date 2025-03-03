import DayCard from "../../components/dayCard";

const events = [
    { date: '19:45 - 20:00', name: 'Registrasi Peserta' },
    { date: '20:00 - 20:15', name: 'Babak 13 besar 1 (2 meja)BO1 (ISB VS IBM,BMI VS VCD)' },
    { date: '20:15 - 20:18', name: 'Rotasi pemain ' },
    { date: '20:18 - 20:33', name: 'Babak 13 besar 2 (2 meja)BO1 (MED VS CBZ,ARS VS COM)' },
    { date: '20:33 - 20:36', name: 'Rotasi pemain ' },
    { date: '20:36 - 20:51', name: 'Babak 13 besar 3 (1 meja)BO1 (IMT VS HTEB)' },
    { date: '20:51 - 20:54', name: 'Rotasi pemain ' },
    { date: '20:54 - 21:09', name: 'Babak 8 besar 1 (2 meja)BO1 (FTP VS W,W VS W)' },
    { date: '21:09 - 21:12', name: 'Rotasi pemain ' },
    { date: '21:12 - 21:27', name: 'Babak 8 besar 2 (2 meja)BO1 (ACC VS W,PSY VS W)' },
    { date: '21:27 - 21:30', name: 'Rotasi pemain' },
    { date: '21:30 - 21:45', name: 'Babak semifinal (2 meja)BO1 W VS W)' },
    { date: '21:45 - 21:48', name: 'Rotasi pemain ' },
    { date: '21:48 - 21:51', name: 'Penutupan' },

];

function Maret19Billiard() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret19Billiard
