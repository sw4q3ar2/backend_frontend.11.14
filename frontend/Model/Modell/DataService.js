class DataService {
    constructor() {
        axios.defaults.baseURL = "http://localhost:8000/";
    }

    getAxiosData(url, callback){
        //console.log(url);
        axios
            .get(url)
            .then(function (response){
                //console.log(response);
                //console.log(response.data);
                //console.log(response.status);
                //console.log(response.statusText);
                //console.log(response.headers);
                //console.log(response.config);
                callback(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
            .finally(function (){
                console.log("finally booooi");
            });
    }

    postAxiosData(url, data){
        console.log(data);
        axios
            .post(url, data)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }

    putAxiosData(url, data){
        console.log(data);
        console.log(`${url}/${data.id}`);
        axios
            .put(`${url}/${data.id}`)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }

    deleteAxiosData(url, id){
        console.log(`${url}/${id}`);
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }
}

export default DataService