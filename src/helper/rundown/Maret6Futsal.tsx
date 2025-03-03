import DayCard from "../../components/dayCard";

const events = [
    { date: '16:40 - 16:55', name: 'Registrasi Peserta' },
    { date: '16:55 - 17:10', name: 'Tim 2 vs Tim 3 (Babak 1)' },
    { date: '17:10 - 17:15', name: 'Istirahat' },
    { date: '17:15 - 17:30', name: 'Tim 2 vs Tim 3 (Babak 2)' },
    { date: '17:30 - 17:35', name: 'Persiapan Tim Selanjutnya' },
    { date: '17:35 - 17:50', name: 'Tim 4 vs Tim 5 (Babak 1)' },
    { date: '17:50 - 17:55', name: 'Istirahat' },
    { date: '17:55 - 18:10', name: 'Tim 4 vs Tim 5 (Babak 2)' },
    { date: '18:10 - 18:15', name: 'Persiapan Tim Selanjutnya' },
    { date: '18:15 - 18:30', name: 'Tim 8 vs Tim 9 (Babak 1)' },
    { date: '18:30 - 18:35', name: 'Istirahat' },
    { date: '18:35 - 18:50', name: 'Tim 8 vs Tim 9 (Babak 2)' },
    { date: '18:50 - 18:55', name: 'Persiapan Tim Selanjutnya' },
    { date: '18:55 - 19:10', name: 'Tim 10 vs Tim 11 (Babak 1)' },
    { date: '19:10 - 19:15', name: 'Istirahat' },
    { date: '19:15 - 19:30', name: 'Tim 10 vs Tim 11 (Babak 2)' },
    { date: '19:30 - 19:35', name: 'Persiapan Tim Selanjutnya' },
    { date: '19:35 - 19:50', name: 'Tim menang vs GT Tim 1 (Babak 1)' },
    { date: '19:50 - 19:55', name: 'Istirahat' },
    { date: '19:55 - 20:10', name: 'Tim menang vs GT Tim 1 (Babak 2)' },
    { date: '20:10 - 20:15', name: 'Persiapan Tim Selanjutnya' },
    { date: '19:55 - 20:20', name: 'Penutupan' },
];

function Maret6Futsal() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret6Futsal
