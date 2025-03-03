import DayCard from "../../components/dayCard";

const events = [
    { date: '14:25 - 14:40', name: 'Registrasi Peserta' },
    { date: '14:40 - 14:45', name: 'Opening MC' },
    { date: '14:45 - 14:48', name: 'Sambutan Juri' },
    { date: '14:48 - 14:51', name: 'MC Chit Chat' },
    { date: '14:51 - 15:01', name: 'PSY' },
    { date: '15:01 - 15:04', name: 'Komentar Juri' },
    { date: '15:04 - 15:14', name: 'COM' },
    { date: '15:14 - 15:17', name: 'Komentar Juri' },
    { date: '15:17 - 15:27', name: 'VCD' },
    { date: '15:27 - 15:30', name: 'Komentar Juri' },
    { date: '15:30 - 15:40', name: 'IBM' },
    { date: '15:40 - 15:43', name: 'Komentar Juri' },
    { date: '15:43 - 15:46', name: 'Penutupan MC' },
];

function Maret21Art() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {events.map((event) => (
        <DayCard key={event.date} date={event.date} name={event.name} />
      ))}
    </div>
  );
}

export default Maret21Art;
