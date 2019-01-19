const initialstate = {
	products :  [
		{
			name: 'Sledgehammer',
			price: 125.75
		},
		{
			name: 'Axe',
			price: 190.50
		},
		{
			name: 'Bandsaw',
			price: 562.13
		},{
			name: 'Chisel',
			price: 12.9
		},
		{
			name: 'Hacksaw',
			price: 18.45
		}
	],
	//storing cart data in local storage so that after refershing browser we can track cart items
	//cart items - not saving in array like structure, saving it in object with key as 'product' name so that it will easy for adding/updating/deleting cart item
	cart : window.localStorage.getItem('>>-ahadf_ffhnh') ? JSON.parse(window.localStorage.getItem('>>-ahadf_ffhnh')) : {}
}

export default initialstate;