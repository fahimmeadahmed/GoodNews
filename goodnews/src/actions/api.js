// import axios, { AxiosResponse } from "axios";
import axios from "axios";

const baseUrl = "http://localhost:53780/api/";



export default {

    nList(url = baseUrl + 'NList/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id)
            //     create: newRecord => axios.post(url, newRecord),
            //     update: (id, updateRecord) => axios.put(url + id, updateRecord),
            //     delete: id => axios.delete(url + id)
            // }
        }
    }
}
