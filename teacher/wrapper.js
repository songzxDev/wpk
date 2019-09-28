const PROPERTY_SYMBOL = Symbol('property');
const ATTRIBUTE_SYMBOL = Symbol('attribute');
const EVENT_SYMBOL = Symbol('event');
const STATE_SYMBOL = Symbol('state');

export default class Wrapper {
    constructor(type) {
        this[ATTRIBUTE_SYMBOL] = Object.create(null); // attribute类型使用此类型创建
        this[PROPERTY_SYMBOL] = Object.create(null); // property类型使用此类型创建
        this[EVENT_SYMBOL] = Object.create(null);
        this[STATE_SYMBOL] = Object.create(null);
        this[PROPERTY_SYMBOL].children = [];
        this.root = document.createElement(type);
    }

    get children() {
        return this[PROPERTY_SYMBOL].children;
    }

    appendTo(element) {
        element.appendChild(this.root);
    }

    appendChild(child) {
        this[PROPERTY_SYMBOL].children.push(child);
        child.appendTo(this.root);
    }


    getAttribute(name) {
        return this.root.getAttribute(name);
    }

    setAttribute(name, value) {
        return this.root.setAttribute(name, value);
    }

    addEventListener(type, listener) {
        if (!this[EVENT_SYMBOL][type]) {
            this[EVENT_SYMBOL][type] = new Set();
        }
        this[EVENT_SYMBOL][type].add(listener);
    }

    removeEventListener(type, listener) {
        if (!this[EVENT_SYMBOL][type]) {
            return;
        }
        this[EVENT_SYMBOL][type].delete(listener);
    }

    triggerEvent(type) {
        if (!this[EVENT_SYMBOL][type])
            return;
        for (let event of this[EVENT_SYMBOL][type]) {
            event.call(this);
        }
    }

}