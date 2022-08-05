import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import action from '../../redux/actions';

export const Filter = () => {

const value = useSelector(getFilter);
const dispatch = useDispatch();

const onChangeFilter = (e) =>  dispatch(action.chahgeFilter(e.target.value));
  
return (
<label className={s.lable}>Find contacts by name
   <input className={s.input} type='text' value={value} onChange={() => onChangeFilter()}></input>
</label>
   );
};

Filter.propTypes = {
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
 }