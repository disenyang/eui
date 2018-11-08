import Vue from 'vue';
import Utils from 'utils';
let shown = false;
let vm = null;

const DEFAULT_OPTIONS = {
    text: '加载中',
    customClass: '',
    zIndex: 0,
    maskOpacity: .02,
    target: document.body
};

function remove(){

    if(!vm) return;

    vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
    
    vm.$destroy();
}

function show(options){
    let LoadingConstructor = Vue.extend(require('./e-loading.vue'));
    if(shown){
        return;
    }

    options = Object.assign({}, DEFAULT_OPTIONS, {
        zIndex: Utils.nextZIndex()
    }, options);

    if(typeof options.target === 'string'){
        options.target = document.querySelectorAll(options.target)[0] || DEFAULT_OPTIONS.target;
    }
    
    vm = new LoadingConstructor({
        propsData: options
    }).$mount();
    
    options.target.appendChild(vm.$el);

    vm.modalShow = true;

    shown = true;
}

function hide(){

    remove();

    shown = false;

}

export default {
    show,
    hide
};
