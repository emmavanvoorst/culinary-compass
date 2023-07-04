import Calendar from 'react-calendar';

const ArtCalendar = () => {
    return (
        <div className='app'>
          <h1 className='text-center'>React Calendar</h1>
          <div className='calendar-container'>
            <Calendar />
          </div>
        </div>
      );
}

export default ArtCalendar;