import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import {
    selectTitleFilter,
    selectAuthorFilter,
} from "../../redux/slices/filterSlice";

import "./BookList.css";

const BookList = () => {
    const books = useSelector((state) => state.books);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);

    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());

        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());

        return matchesTitle && matchesAuthor;
    });

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
                                {++index}. {book.title} by{" "}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        handleToggleFavorite(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkHeartFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkHeart className="star-icon" />
                                    )}
                                </span>

                                <button
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
