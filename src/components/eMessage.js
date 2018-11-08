import Vue from 'vue';
import Utils from 'utils';

let instance;
let instances = [];
let seed = 1;


var Message = function(options) {
    let TipsConstructor = Vue.extend(require('./e-message.vue'));

    // if (Vue.prototype.$isServer) return;
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    let userOnClose = options.closehandler;
    let id = 'tips_' + seed++;

    options.closehandler = function() {
        Message.close(id, userOnClose);
    };

    instance = new TipsConstructor({
        data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    instance.dom.style.zIndex = Utils.nextZIndex();
    instances.push(instance);
    return instance.vm;
};



Message.close = function(id, userOnClose) {
    let index = instances.findIndex(item => item.id === id);
    if(index >= 0){
        if (typeof userOnClose === 'function') {
            userOnClose(instances[index]);
        }
        instances.splice(index, 1);
    }
};

export default Message;