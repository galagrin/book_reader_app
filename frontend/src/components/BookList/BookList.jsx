import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs';
import { deleteBook, toggleFavorite, selectBooks } from '../../redux/slices/booksSlice';
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice';

import './BookList.css';

const BookList = () => {
    const books = useSelector(selectBooks);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());

        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());

        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;

        return matchesTitle && matchesAuthor && matchesFavorite;
    });

    const highlightMatch = (text, filter) => {
        if (!filter) return text;

        const regex = new RegExp(`(${filter})`, 'gi');

        return text.split(regex).map((substr, i) => {
            if (substr.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substr}
                    </span>
                );
            }
            return substr;
        });
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, index) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++index}. {highlightMatch(book.title, titleFilter)} by{' '}
                                <strong>{highlightMatch(book.author, authorFilter)}</strong> ({book.sourse})
                            </div>
                            <div className="book-actions">
                                <span onClick={() => handleToggleFavorite(book.id)}>
                                    {book.isFavorite ? (
                                        <BsBookmarkHeartFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkHeart className="star-icon" />
                                    )}
                                </span>

                                <button onClick={() => handleDeleteBook(book.id)}>delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
