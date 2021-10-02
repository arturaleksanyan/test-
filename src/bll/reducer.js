 const initialState={
   cats: []
 }
 
 
 const reducer=(state =initialState, action)=>{
           
        switch (action.type) {
          case 'cat':
            return  {...state, cats: action.value}     
        default:
            return {...state};
            
        }     
 };

 export default reducer;