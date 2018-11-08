
	<template>
	<transition name="e-message-fade">
    <div class="e-message"
        v-show="visible"
        :class="[
                type ? 'e-message-' + type : '',
            ]"
        @mouseenter="clearTimer"
        @mouseleave="startTimer">
        <div class="e-message-icon">
            <e-icon :name="typeTrans"></e-icon>
        </div>
        <div class="e-message-label">{{message}}</div>
        <div class="e-message-close" @click="close"></div>
    </div>
</transition>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-message",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            type: "success",
            visible: false,
            duration: 3000,
            timer: null,
            message: '',
            closehandler: null,
            closed: false
        }
  	},
  	created(){
        
    },
	mounted(){
        this.$nextTick(function() {
            this.startTimer();
        })
        this.visible = this.value;
    },
    watch:{
        value(val){
            this.visible = val;
        },
        closed(newVal) {
            if (newVal) {
                this.visible = false;
                this.$el.addEventListener('transitionend', this.destroyElement);
            }
        }
    },
	config:{
        insert:{
            inner:false,
            before:true,
            after:true
        },
        preview:true
    },
    computed: {
        typeTrans(){
            return this.type == 'success' ? 'check-circle-o' : 
                        this.type == 'error' ? 'close-circle-o' : 
                        this.type == 'warn' ? 'exclamation-circle-o' : '';
        }
    },
    methods:{
        destroyElement() {
            this.$el.removeEventListener('transitionend', this.destroyElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close() {
            this.closed = true;
            if (typeof this.closehandler === 'function') {
                this.closehandler(this);
            }
        },
        clearTimer() {
            clearTimeout(this.timer);
        },

        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration);
            }
        }
    },
    unProps:{
        
    },
    props:{
        value:{
            type:Boolean
        }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	@define-mixin tip-type $color $border-color $icon-url{
    color: var(--color-white);
    background-color: $color;
    border-color: $border-color;
}
.e-message{
    position:fixed;
    left: 50%;
    top: 20px;
    transform: translate(-50%, 20px);
    border-radius: 2px;
    height: 36px;
    line-height: 34px;
    border-width: 1px;
    background-color:#7bd259;
    border-style: solid;
    z-index:100;
    box-shadow:0 2px 4px 0 rgba(0,0,0,0.15);
    transition: opacity 0.3s, transform .4s;
    .e-message-icon{
        float: left;
        width: 39px;
        height: 34px;
        line-height: 38px;
        text-align: center;
        vertical-align: middle;
        font-size: 17px;
    }

    .e-message-label{
        font-size: 14px;
        margin: 0 39px;
        min-width: 80px;
        max-width: 560px;
    }

    .e-message-close{
        position: absolute;
        width: 10px;
        height: 12px;
        right: 9px;
        top: 11px;
        cursor: pointer;
        &:before,&:after{
            content: "";
            display: block;
            position: absolute;
            top: 5px;
            left: -2px;
            margin: 0 auto;
            width: 14px;
            height: 1px;
            background-color: var(--color-white);
            z-index: 1;
        }
        &:before{
            transform: rotate(-45deg);
        }
        &:after{
            transform: rotate(45deg);
        };
    }


    &.e-message-warn{
        @mixin tip-type var(--color-warn-light) var(--color-warn-dark);

    }
    &.e-message-success{
        @mixin tip-type var(--color-success-light) var(--color-success-dark);
    }
    &.e-message-error{
        @mixin tip-type var(--color-danger-light) var(--color-danger-dark);
    }
}
.e-message-fade-enter,
.e-message-fade-leave-active {
    opacity: 0;
    transform: translate(-50%, -100%);
}
</style>