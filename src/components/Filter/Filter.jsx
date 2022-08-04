import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({value, onChange}) => {
return (
<label className={s.lable}>Find contacts by name
   <input className={s.input} type='text' value={value} onChange={onChange}></input>
</label>
   );
};

Filter.propTypes = {
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
 }