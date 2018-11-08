
import Vue from 'vue';

const noop = () => {};


const DEFAULT_OPTIONS = {
    title: '确认',
    content: '确认当前操作吗？',
    cancelText: '取消',
    confirmText: '确认',
    onCancel: noop,
    onConfirm: noop,
    customClass: '',
    target: document.body
};

export default function(options){
    
    var Confirm = Vue.extend(require('./e-confirm.vue'));

    options = Object.assign({}, DEFAULT_OPTIONS, options);

    if(typeof options.target === 'string'){
        options.target = document.querySelector(options.target) || DEFAULT_OPTIONS.target;
    }

    var vm = new Confirm().$mount();

    options.target.appendChild(vm.$el);

    Object.assign(vm, {
        title: options.title,
        content: options.content,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
        customClass: options.customClass,
        modalShow: true
    });

    vm.$on('modalCloseClick', dismiss)
    vm.$on('modalMaskClick', dismiss)
    vm.$on('confirmClick', close);
    vm.$on('cancelClick', dismiss);

    function close(){
        if(typeof options.onConfirm !== 'function'){
            return;
        }

        let result = options.onConfirm();

        if(result === false){
            return;
        }

        if(result && typeof result.then === 'function'){
            result.then(() => {
                vm.modalShow = false;
            })
            return;
        }

        vm.modalShow = false;
    }

    function dismiss(){

        if(typeof options.onCancel !== 'function'){
            return;
        }

        let result = options.onCancel();

        if(result === false){
            return;
        }

        if(result && typeof result.then === 'function'){
            result.then(() => {
                vm.modalShow = false;
            })
            return;
        }

        vm.modalShow = false;
    }

};