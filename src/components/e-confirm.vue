
	<template>
	 <transition 
        :name="transitionName"
        v-on:after-leave="destroyElement">
    <div class="e-confirm-wrapper"
            v-show="modalShow"
            :style="{'z-index': actualZIndex}">
        <div class="e-confirm">
            <div class="e-confirm-header" ref="header">
                <div class="e-modal-header-title">{{title}}</div>
                <e-button icon="cross"
                    v-if="closable" 
                    type="text"
                    size="small"
                    fontSize="14px"
                    color="gray"
                    class="e-modal-header-close"
                    @click="cancelClickHandler"></e-button>
            </div>
            <div class="e-confirm-body">
                <span>{{content}}</span>
            </div>
            <div class="e-confirm-footer">
                <a class="cancel" @click="cancelClickHandler">取消</a>
                <a class="confirm" @click="confirmClickHandler">确认</a>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-confirm",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            transitionName:"fade-in",
            modalShow:false
        }
  	},
  	created(){
        
    },
    watch:{
        value(newVal){
            this.modalShow = newVal;
        },
        modalShow(newVal){
            this.$emit('input', newVal);
        }
    },
    computed:{
        actualZIndex(){
            return this.addZIndex();
        }
    },
	mounted(){
        this.modalShow = this.value;
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
            this.$emit('cancelClick');
        },
        confirmClickHandler(){
            this.$emit('confirmClick');
        },
        cancelClickHandler(){
            this.$emit('cancelClick');
        }
    },
    unProps:{
        
    },
    props:{
        value: {
            type: Boolean
        },
        title:{
            type:String,
            name:"标题",
            default:"确认"
        },
        content:{
            type:String,
            name:"内容",
            default:"确认当前操作吗？"
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
	.e-confirm-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-modal-block-background);
    .e-confirm{
        background-color:#fff;
        position:absolute;
        border:1px solid #aaa;
        border-radius:3px;
        left: 50%;
        top: 50%;
        min-width:280px;
        min-height:150px;
        display:flex;
        flex-direction:column;
        transform: translate3d(-50%, -50%, 0);
        .e-confirm-header{
            height:30px;
            line-height:30px;
            font-size:15px;
            position:relative;
            border:1px solid #ddd;
            .e-modal-header-title{
                padding-left:10px;
                font-weight:bold;
            }
            .e-modal-header-close{
                position:absolute;
                top:0px;
                right:0px;
            }
        }
        .e-confirm-body{
            flex:1;
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            overflow:auto;
            padding:10px;
            box-sizing:border-box;
        }
        .e-confirm-footer{
            text-align:right;
            height:40px;
            display:flex;
            background-color:#f5f8fa;
            align-items:center;
            justify-content:flex-end;
            box-sizing:border-box;
            .cancel{
                cursor:pointer;
                flex:1;
                height:100%;
                display:block;
                line-height:40px;
                text-align:center;
                text-decoration:none;
                color:var(--color-font);
                &:hover{
                    background-color:#edeff2;
                }
            }
            .confirm{
                cursor:pointer;
                flex:1;
                height:100%;
                display:block;
                line-height:40px;
                text-align:center;
                text-decoration:none;
                color:var(--color-primary);
                &:hover{
                    background-color:#edeff2;
                }
            }
        }
    }
}
</style>