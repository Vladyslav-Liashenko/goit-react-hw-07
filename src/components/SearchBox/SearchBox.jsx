import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);

  const handleSearchChange = e => {
    dispatch(setFilter(e.target.value.trim().toLowerCase()));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleSearchChange}
        value={filterState}
      />
    </div>
  );
};
