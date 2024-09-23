const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			
			signup: async (email, password) =>  {
				try {
					const response = await fetch('https://turbo-spork-v6p9xg7r7qrpfw76w-3001.app.github.dev/api/signup', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ 
							email: email,
							password: password,
							is_active: true
						 })
					});
			
					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.msg || 'Error en el signup');
					}
			
					const data = await response.json();
					console.log('Signup exitoso:', data);
				} catch (error) {
					console.error('Error:', error.message);
				}
			},

			login: async (email, password) =>  {
				try {
					const response = await fetch('https://turbo-spork-v6p9xg7r7qrpfw76w-3001.app.github.dev/api/login', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ 
							email: email,
							password: password
						 })
					});
			
					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.msg || 'Error en el login');
					}
			
					const data = await response.json();
					console.log('Login exitoso:', data);
				} catch (error) {
					console.error('Error:', error.message);
				}
			}
			
		}
	};
};

export default getState;
