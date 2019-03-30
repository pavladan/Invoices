export default function tracks(state='Invoices',action){
  if(action.type === "CHANGE_PAGE"){
    return action.payload;
  }
  return state;
}