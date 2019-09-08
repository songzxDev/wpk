import Tab from "./tabs.js";
import Div from "./container.js";

function myCreate(Class, attributes, ...children) {
    let object = new Class();
    for (let name in attributes) {
        object.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        object.appendChild(child);
    }

    return object;
}


let c = <Tab style="width: 100%; height:400px;">
    <Div tab-title="推荐" style="background-color:red;"></Div>
    <Div tab-title="有趣的店" style="background-color:green;"></Div>
    <Div tab-title="品牌新店" style="background-color:yellow;"></Div>
</Tab>;
c.appendTo(document.body);