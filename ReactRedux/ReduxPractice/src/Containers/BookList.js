import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever returned shows up as props in booklist
    // takes state what is returned form here shows up as props in the container
    return {
        books: state.books
    };
}

// this is what actually connects react and redux
export default connect(mapStateToProps)(BookList);