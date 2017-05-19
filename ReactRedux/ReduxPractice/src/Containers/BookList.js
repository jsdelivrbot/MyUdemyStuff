import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index';

class BookList extends Component {
    renderList() {
        return this
            .props
            .books
            .map((book) => {
                return (
                    <li
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className="list-group-item">
                        {book.title}
                    </li>
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
    // whatever returned shows up as props in booklist takes state what is returned
    // form here shows up as props in the container
    return {books: state.books};
}

// anything returned from this function will end up as props on the book list
// container now we can call this.props.selectBook because of this stuff.
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called the result should be passed to all of our
    // reducers.
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

// this is what actually connects react and redux promote booklist from
// component to container it needs to know about this new dispatch method
// selectbook make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);