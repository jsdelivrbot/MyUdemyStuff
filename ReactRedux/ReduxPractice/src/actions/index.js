// so this function is actually the action creator.
// the plain object being returned is the actual action.
// which should have the type/payload convention.

export function selectBook (book){
    // selectBook is an actioncreater it needs to return an action
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}