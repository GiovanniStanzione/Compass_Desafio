import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com/users'
})

/*export const busca = async() => {
    const resposta = await api.get(url);
    setDado(resposta.data);
}*/