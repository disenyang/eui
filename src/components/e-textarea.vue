
	<template>
	<div class="e-textarea" :style="{width:width,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,borderRadius:borderRadius,color:color,fontWeight:fontWeight}">
    <textarea class="e-textarea-textarea" :rows="rows" :placeholder="placeholder"   
        :value="value"
        @input="elInputHandler"
        @mouseenter="elMouseenterHandler"
        @mouseleave="elMouseleaveHandler"
        @mouseover="elMouseoverHandler"
        @mouseout="elMouseoutHandler"
        @dblclick="elDblclickHandler"></textarea>
    <div class="count-length">
        <span v-if="counter=='true'||counter===true">{{counterValue}}</span>
        <span v-if="(counter=='true'||counter===true) && maxLength">/</span>
        <span v-if="maxLength">{{maxLength}}</span>
    </div>
</div>    
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-textarea",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            counterValue:"0"
        }
  	},
    methods:{
        elInputHandler(e){
            if(e.target.composing){
                return;
            }
            let val = e.target.value;
            let counterValue=val.length;
            if(this.maxLength){
                if(counterValue>this.maxLength){
                    val = val.substring(0,this.maxLength);
                    e.target.value = val;
                }else{

                }
            }else{
            }
            
            this.$emit('input', val);
            this.counterValue=val.length;
        },
        elFocusHandler(e){
            this.$emit('focus', e);
        },
        elBlurHandler(e){
            this.$emit('blur', e);
        },
        elDblclickHandler(e){
            this.$emit('dblclick', e);
        },
        elClickHandler(e){
            this.$emit('click', e);
        },
        elMouseoverHandler(e){
            this.$emit('mouseover', e);
        },
        elMouseoutHandler(e){
            this.$emit('mouseout', e);
        },
        elMouseenterHandler(e){
            this.$emit('mouseenter', e);
        },
        elMouseleaveHandler(e){
            this.$emit('mouseleave', e);
        }
    },
    created(){
        this.dispatch("e-form", 'e.form.addField', this);
    },
    watch: {
        value: {
            immediate: false,
            handler(newVal){
                this.$emit('change', newVal);
            }
        }
    },
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    unProps:{
        "v-model":{
            type:String,
            name:"绑定",
            desc:"绑定"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    },
    props:{
        value: {
            type: [String, Number],
            default: ''
        },
        rows:{
            type:Number,
            default:4,
            name:"行数",
            desc:"行数"
        },
        formRule:{
            type:String,
            name:"表单规则",
            desc:"表单规则"
        },
        minLength:{
            type:Number,
            name:"最小长度",
            desc:"最小长度"
        },
        maxLength:{
            type:Number,
            name:"最大长度",
            desc:"最大长度"
        },
        counter:{
            type:Boolean,
            name:"字符计数",
            desc:"字符计数",
            default:false
        },
        placeholder:{
            type:String,
            name:"提示信息",
            desc:"提示信息"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-textarea{
    width:100%;
    
    line-height: 24px;
    font-size: 12px;
    border:var(--border-common);
    color: #576166;
    border-radius: 2px;
    appearance: none;
    outline: none;
    box-sizing: border-box;
    resize: none;
    background-color:#fff;
    transition:0.3s linear; 
    position:relative;
    &:hover{
        border-color:var(--color-border-hover);
        box-shadow: var(--box-shadow-hover-common);
    }
    .e-textarea-textarea{
        padding: 5px 10px;
        border:none;
        appearance: none;
        outline: none;
        box-sizing: border-box;
        resize: none;
        width:100%;
        height:100%;
        color:var(--color-font);
    }
    .count-length{
        position:absolute;
        right:1px;
        font-size:12px;
        color:#888;
        padding:0 10px;
        height:30px;
        bottom:1px;
    }
}
</style>