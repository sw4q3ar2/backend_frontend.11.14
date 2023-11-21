import TablaSorView from "./TablaSorView.js";

class TablaView{
    #lista
    constructor(szuloElem,lista){
        this.szuloElem = szuloElem;
        this.#lista = lista;
        console.log(this.#lista)
        this.tablaMegjelenit();
        console.log(this.#lista);
    }

    tablaMegjelenit(){
        let txt = '<table class="table table-bordered"></table>';
        this.szuloElem.append(txt);
        this.tableElem=this.szuloElem.children("table");
        for (const key in this.#lista) {
            new TablaSorView(this.#lista[key], this.tableElem);
            console.log(this.#lista[key])
        }
    }
}

export default TablaView