import React from 'react';

const Books = (props) => {
    return(
        <div className="table-responsive-sm">
        <table className="table">
            <thead>
                <tr>
                <th className="text-primary">Id</th>
                <th className="text-primary">Name</th>
                <th className="text-primary">Author</th>
                <th className="text-primary">Year</th>
                <th className="text-primary">ISBN</th>
                <th className="text-primary">Edit</th>
                <th className="text-primary">Delete</th>
                </tr>
            </thead>
            <tbody className="text-light">
                {props.books.length > 0 ? (
                    props.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>{book.isbn}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={() => {
                                        props.editBook(book)
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.deleteBook(book.id)
                                    }}
                                    className="btn btn-sm btn-danger"
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Books Available</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default Books;