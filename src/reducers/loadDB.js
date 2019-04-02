const defaultState = {loading:false, db: null, errors: null};
export default function db(state = defaultState, action){
  switch (action.type){
    case "LOAD_DB_REQUESTED":
     return {loading:true};
    case "LOAD_DB_OK":
     return{loading:false, db:action.db,errors:null};
    case "LOAD_DB_FAIL":
     return {loading:false, db:null, errors:action.errors};
    case "ADD_INVOICE":
      return {
        loading: state.loading,
        errors:state.errors,
        db:[...state.db, action.payload]
      };
    case "DELETE_INVOICE":
      return {
        loading: state.loading,
        errors:state.errors,
        db:[...state.db.filter(e=>e.id !== action.payload)]
      }
    default:
    return state;
  }
}