import {axiosInstance} from '../index'


export default class Api {

    static fetchFact(category) {
        return axiosInstance.get('/jokes/random', category ? {params: {category}} : null)
            .then(raw => raw.data)
    }

    static fetchCategories() {
        return axiosInstance.get('/jokes/categories')
            .then(raw => raw.data)
    }
}