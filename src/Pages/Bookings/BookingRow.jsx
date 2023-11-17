import PropTypes from 'prop-types';
const BookingRow = ({booking}) => {
    const {name,price,duration,image,availability,email,bookingTime,bookingDate} = booking;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="service image" />
                        </div>
                    </div>
                    </div>
            </td>
            <td>{name}</td>
            <td>₹ {price}</td>
            <td>{bookingDate}<br/>{bookingTime}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
            </tr>
    );
};
// Added proptypes 
BookingRow.propTypes={
    booking: PropTypes.object.isRequired,
}
export default BookingRow;