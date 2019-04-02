const LOAD_DB_OK = 'LOAD_DB_OK';
const LOAD_DB_FAIL ='LOAD_DB_FAIL';
const PATH_DB = '/db.json';
export function loadDB() {
  return dispatch => {
    dispatch({
        type: 'LOAD_DB_REQUESTED'
    });
    fetch(PATH_DB)
        .then (result=>result.json())
        .then(result => {
            dispatch({
                type: LOAD_DB_OK,
                db: result.invoices
            })
        })
        .catch(fail => {
            dispatch({
                type: LOAD_DB_FAIL,
                errors: fail
            })
        })
  }
}