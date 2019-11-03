import {create} from './create.js';
import Div from '../container.js';
import css from './listview.css';


const PROPERTY_SYMBOL = Symbol("property");
const ATTRIBUTE_SYMBOL = Symbol("attribute");
const EVENT_SYMBOL = Symbol("event");
const STATE_SYMBOL = Symbol("state");

let styleElement = document.createElement('style');
styleElement.innerHTML = css;
styleElement.setAttribute('scoped', '');
document.getElementsByTagName('head')[0].appendChild(styleElement);


export default class ListView {
    constructor(config) {
        this[PROPERTY_SYMBOL] = Object.create(null);
        this[ATTRIBUTE_SYMBOL] = Object.create(null);
        this[EVENT_SYMBOL] = Object.create(null);
        this[STATE_SYMBOL] = Object.create(null);


        this[PROPERTY_SYMBOL].children = [];

        this.created();
    }

    appendTo(element) {
        element.appendChild(this.root);
        this.mounted();
    }

    created() {
        this.root = document.createElement("div");
        this.root.classList.add('listview');
        this.render().appendTo(this.root);
    }

    mounted() {

    }

    unmounted() {

    }

    update() {

    }

    render() {
        let data = this[ATTRIBUTE_SYMBOL]['data'] || [];
        return <div>
            {
                data.map(item => {
                    return <div style="width: 924px; height: 960px; margin: 28px; background-color: #fefefe; border-radius: 36px;">
                        <div style="display: flex; height: 164px;">
                            <div style="width: 50%; margin: 40px;">
                                {item.title}
                            </div>
                            <div style="width: 50%;">
                                <div style="font-size: 40px; margin: 43px; float: right; text-align: center; color: #FFFFFF; width: 160px; height: 72px; line-height: 68px; background-image: linear-gradient(90deg, #fec900 0%, #feac00 100%), linear-gradient(#ffffff, #ffffff); background-blend-mode: normal, normal; border-radius: 36px;">
                                    进店>
                                </div>
                            </div>
                        </div>

                        <div style="padding-left:34px; display: flex; align-items: center; font-size:36px; height:98px; background:rgba(245,245,245,1); border-radius:16px; margin: 0 35px;">
                            好店君：该店已被1.3万人关注，快来关注吧！
                        </div>

                        <div style="display: flex; margin: 25px 34px 131px 34px;">
                            <div style="width: 626px; height: 626px;  margin-right: 15px;">
                                <img src={item.pictures[0]} alt="" style="width: 100%; height: 100%; border-radius: 36px;"/>
                            </div>
                            <div style="width: 308px; height: 626px; display: flex; flex-direction: column;">
                                <div style="width: 100%; height: 50%; margin-bottom: 5px;">
                                    <img src={item.pictures[1]} alt="" style="width: 100%; height: 100%; border-radius: 36px;"/>
                                </div>
                                <div style="width: 100%; height: 50%;">
                                    <img src={item.pictures[1]} alt="" style="width: 100%; height: 100%; border-radius: 36px;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>;
    }

    addStyle() {

    }

    appendChild(child) {
        this.children.push(child);
        child.appendTo(this.root);
    }


    get children() {
        return this[PROPERTY_SYMBOL].children;
    }

    getAttribute(name) {
        if (name === "style") {
            return this.root.getAttribute("style");
        }
        return this[ATTRIBUTE_SYMBOL][name]
    }

    setAttribute(name, value) {
        if (name === "style") {
            this.root.setAttribute("style", value);
        }
        if (name === 'data') {
            this[ATTRIBUTE_SYMBOL][name] = value;
            this.root.innerHTML = "";
            this.render().appendTo(this.root);
            this.addStyle();
            return value;
        }
        return this[ATTRIBUTE_SYMBOL][name] = value;
    }

    addEventListener(type, listener) {
        if (!this[EVENT_SYMBOL][type])
            this[EVENT_SYMBOL][type] = new Set;
        this[EVENT_SYMBOL][type].add(listener);
    }

    removeEventListener(type, listener) {
        if (!this[EVENT_SYMBOL][type])
            return;
        this[EVENT_SYMBOL][type].delete(listener);
    }

    triggerEvent(type, ...args) {
        if (!this[EVENT_SYMBOL][type]) {
            return;
        }

        for (let event of this[EVENT_SYMBOL][type]) {
            event.call(this, ...args);
        }

    }
}