# Book Library App 📚 📑

A React application for managing a personal book library. Users can add, delete, and mark books as favorites, as well as filter their book collection.

## Features

- Add books manually with title and author
- Add random books from a predefined list
- Add random books via API
- Mark books as favorites
- Filter books by title and author
- Filter favorite books
- Delete books
- Highlight matching text in search results

## Technologies Used 🛠️

- React
- Redux Toolkit
- Express (backend API)
- React Icons
- CSS

## Project Structure 📌

```
src/
├── components/
│   ├── BookForm/
│   ├── BookList/
│   ├── Filter/
│   └── Error/
├── redux/
│   ├── slices/
│   └── store.js
├── data/
└── utils/
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/galagrin/book_reader_app.git
```

2. Install dependencies
```bash
npm install
```

3. Start the backend server
```bash
node index.js
```

4. Start the React application
```bash
npm start
```

## Backend API Endpoints

- GET `/random-book` - Returns a random book immediately
- GET `/random-book-delayed` - Returns a random book after 2 seconds delay




