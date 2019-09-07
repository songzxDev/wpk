import {Carousel} from "./component.js";

function myCreate(Class, attributes){
    let object = new Class();
    for(let name in attributes)
        object.setAttribute(name, attributes[name]);
    return object;
}


let c = <Carousel width="100"></Carousel>;
c.appendTo(document.body);