import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
  #leiro={};
  #urlapElemLista=[];
  #osszesElemValidE=true;
  #urlapAdat = {};
  constructor(szuloElem, leiro) {
    this.szuloElem = szuloElem;
    this.#leiro = leiro;
    this.szuloElem.append("<form>")
    this.formElem = this.szuloElem.children("form");
    this.#urlapOsszerak();
    this.submitElem=$("#submit")
    this.submitElem.on("click",()=>{
      event.preventDefault();
      this.#osszesElemValidE= true;
      this.#urlapElemLista.forEach(elem=>{
        console.log(elem);
        console.log(elem.valid);
        this.#osszesElemValidE=this.#osszesElemValidE && elem.valid
      })
      if(this.#osszesElemValidE){
        console.log("Valid az űrlap")
        this.#urlapElemLista.forEach(elem =>{
          this.#urlapAdat[elem.key]=elem.value
        })
      }else{
        console.log("Nem valid az űrlap")
      }
      this.#esemenyLetrehozas("valid");
    })
  }
  #urlapOsszerak(){
   
    for (const key in this.#leiro) {
      switch (this.#leiro[key].tipus) {
        case "text":
          //this.#textElem(key);
          this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key],this.formElem));
          break;
        case "number":
          this.#urlapElemLista.push(new NumberUrlapElem(key, this.#leiro[key],this.formElem));
          break;
        default:
          console.log("Ez az űrlap elem még nem készült el")
          break;
        }   
    }
    let txt="<input type='submit' id='submit' value='OK'>"
    this.formElem.append(txt);
  }
  
 

  #esemenyLetrehozas(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {detail:this});
    window.dispatchEvent(esemenyem);
  }
  get urlapAdat(){
    return this.#urlapAdat
  }
}
export default UrlapView;