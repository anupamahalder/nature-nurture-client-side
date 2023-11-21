import PropType from 'prop-types';
const DatePick = ({setServiceDate,serviceDate}) => {
    return (
        <div className='mx-auto bg-green-200'>
            <h1>Select Date to take Service: {serviceDate}</h1>
            <input type="date" onChange={e => setServiceDate(e.target.value)}/>
            {console.log(serviceDate)}
        </div>
    );
};
// Adding proptypes 
DatePick.propTypes ={
    setServiceDate: PropType.func.isRequired,
    serviceDate: PropType.string
}
export default DatePick;