export default class RestoService {
    getMenu = async () => {
        const url = `http://localhost:3000/menu`
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Fail to fetch ${url}, status: ${response.status}`)
        }

        return await response.json();
    }
}