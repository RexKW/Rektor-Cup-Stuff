import DayCard from "../../components/dayCard";

const events = [
    { date: '17:40 - 18:00', name: 'Registrasi Peserta' },
    { date: '18:00 - 18:10', name: 'Pembuka' },
    { date: '18:10 - 18:30', name: 'Round Semifinal' },
    { date: '18:30 - 18:45', name: 'Istirahat' },
    { date: '18:45 - 18:50', name: 'Penentuan Warna dan Penentuan Urutan Peserta 1,2,3' },
    { date: '18:50 - 19:10', name: 'Seluruh Pemenang di Semifinal Match Bergantian (Final)' },
    { date: '19:10 - 19:15', name: 'Istirahat' },
    { date: '19:15 - 19:35', name: 'Seluruh Pemenang di Semifinal Match Bergantian (Final)' },
    { date: '19:35- 19:40', name: 'Istirahat' },
    { date: '19:40 - 20:00', name: 'Seluruh Pemenang di Semifinal Match Bergantian (Final)' },
    { date: '20:00 - 20:10', name: 'Closing' },
];

function Maret7Catur() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  )
}

export default Maret7Catur
