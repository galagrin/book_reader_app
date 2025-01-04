import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    setAuthorFilter,
    selectTitleFilter,
    selectAuthorFilter,
    setOnlyFavoriteFilter,
    resetFilters,
    selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handelResetfilters = () => {
        dispatch(resetFilters());
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFilterChange = () => {
        dispatch(setOnlyFavoriteFilter());
    };

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="filter by title..."
                        onChange={handleTitleFilterChange}
                        value={titleFilter}
                    />
                </div>

                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="filter by author..."
                        onChange={handleAuthorFilterChange}
                        value={authorFilter}
                    />
                </div>

                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFilterChange} />
                        Only Favorite
                    </label>
                </div>

                <button type="button" onClick={handelResetfilters}>
                    Reset filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
