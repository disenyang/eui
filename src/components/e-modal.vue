
	<template>
	 <transition 
        :name="transitionName"
        v-on:after-leave="destroyElement">
    <div class="e-modal-wrapper"
            v-show="modalShow"
            :style="{'z-index': actualZIndex}"
            @click.self="maskClickHanlder">
        <div class="e-modal" :class="{'e-modal-middle':size=='middle','e-modal-large':size=='large','e-modal-small':size=='small'}">
            <div class="e-modal-header" ref="header">
                <slot name="header">
                    <div class="e-modal-header-title"><slot name="title">我是标题党</slot></div>
                    <e-button icon="cross"
                        v-if="closable" 
                        type="text"
                        size="small"
                        fontSize="20px"
                        color="gray"
                        class="e-modal-header-close"
                        @click="closeClickHanlder"></e-button>
                </slot>
            </div>
            <div class="e-modal-body">
                <slot name="body"></slot>
            </div>
            <div class="e-modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-modal",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            transitionName:"fade-in",
            modalShow:false
        }
  	},
  	created(){
        
    },
	mounted(){
        this.modalShow = this.value;
    },
    computed:{
        actualZIndex(){
            return this.addZIndex();
        }
    },
    watch: {
        value(newVal){
            this.modalShow = newVal;
        },
        modalShow(newVal){
            this.$emit('input', newVal);
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
    methods:{
         destroyElement() {
            if(this.isRemove){
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            }else{
                this.$emit('after-leave');
            }
        },
        closeClickHanlder(){
            this.value=false;
        }
    },
    unProps:{
        
    },
    props:{
        value: {
            type: Boolean
        },
        size: {
            type: Boolean,
            name:"尺寸",
            default:"middle"
        },
        closable: {
            type: Boolean,
            default: true,
            name:"可以关闭"
        }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-modal-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-modal-block-background);
    .e-modal{
        background-color:#fff;
        position:absolute;
        border:1px solid #aaa;
        border-radius:3px;
        .e-modal-header{
            height:40px;
            line-height:50px;
            font-size:16px;
            position:relative;
            .e-modal-header-title{
                padding-left:10px;
            }
            .e-modal-header-close{
                position:absolute;
                top:10px;
                right:10px;
            }
        }
        .e-modal-body{
            height:calc(100% - 90px);
            width:100%;
            overflow:auto;
            padding:10px;
            box-sizing:border-box;
        }
        .e-modal-footer{
            text-align:right;
            height:40px;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            padding:10px;
            box-sizing:border-box;
        }
        &.e-modal-middle{
            width:50%;
            height:50%;
            left:25%;
            top:25%;
        }
        &.e-modal-large{
            width:70%;
            height:70%;
            left:15%;
            top:15%;
        }
        &.e-modal-small{
            width:30%;
            height:30%;
            left:35%;
            top:35%;
        }
    }
}
</style>