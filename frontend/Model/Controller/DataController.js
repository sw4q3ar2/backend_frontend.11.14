import DataService from "../Modell/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

class DataController {
    constructor(){
        this.dataService = new DataService();

        this.dataService.getAxiosData("api/writers", this.megjelenit);
        this.dataService.postAxiosData("api/writers", {
            nev: "jenőő",
            szul: 1989,
        });
        this.dataService.putAxiosData("api/writers", {
            id: 1,
            nev: "Atirt Jozsef",
            szul: 1905,
        });
        this.dataService.deleteAxiosData("api/writers", 15);
    }
    
    megjelenit(list){
        new TablaView($(".tablazat"),list);
    }
}
export default DataController