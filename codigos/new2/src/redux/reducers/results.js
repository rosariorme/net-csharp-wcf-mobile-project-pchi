const defaultValue = [
{ id:0, txt: "hola" }
];

function reducer(state = defaultValue, {type, payload}){
	
	switch(type){
		default:
			return state;
	}
}
export default reducer;