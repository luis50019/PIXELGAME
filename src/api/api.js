const API_KEY = "5b4c2d56f06c4566b635bd18e6b1b9ab"
const BASE_URL = "https://api.rawg.io/api/"
export const getGametop = async () => {
	try {
		const response = await fetch(`${BASE_URL}games?key=${API_KEY}&search="halo"`);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.log(error)
	}
}

export const getAllGames = async () => {
	try {
		const response = await fetch(`${BASE_URL}games?key=${API_KEY}`);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.log(error)
	}
}


