import db from '../db.json';
const LOAD_DB_OK = 'LOAD_DB_OK';
// const LOAD_DB_FAIL ='LOAD_DB_FAIL';
const LOAD_DB_REQUESTED = 'LOAD_DB_REQUESTED';
export function loadDB() {
  return dispatch => {
    dispatch({
        type: LOAD_DB_REQUESTED
    });
    // fetch(db)
    //     .then (result=>result.json())
    //     .then(result => {
    //         dispatch({
    //             type: LOAD_DB_OK,
    //             db: result.invoices
    //         })
    //     })
    //     .catch(fail => {
    //         dispatch({
    //             type: LOAD_DB_FAIL,
    //             errors: fail
    //         })
    //     })
    dispatch({
        type: LOAD_DB_OK,
        db: db.invoices
    })
    
  }
}