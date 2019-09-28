import Text from '../text.js';

// myCreate 拆分到文件里面
export function create(Class, attributes, ...children) {
    // console.log(children);
    let object = new Class();
    for (let name in attributes) {
        if (name.match(/^on-([\s\S]+)$/)) {
            object.addEventListener(RegExp.$1, attributes[name]);
        } else {
            object.setAttribute(name, attributes[name]);
        }

    }
    for (let child of children) {
        if (typeof child === "string") {
            object.appendChild(new Text(child));
        } else {
            object.appendChild(child);
        }
    }

    return object;
}