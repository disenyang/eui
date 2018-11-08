
	<template>
	<div class="e-input" :style="{width:width,height:height}">
    <input class="e-input-input" :type="type" :class="{error:error}" ref="el" :placeholder="placeholder" :style="{fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,color:color,fontWeight:fontWeight}" :value="value" @input="elInputHandler"
	@mouseenter="elMouseenterHandler"
    @mouseleave="elMouseleaveHandler"
	@mouseover="elMouseoverHandler"
    @mouseout="elMouseoutHandler"
    @dblclick="elDblclickHandler">
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
	name:"e-input",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            counterValue:"0"
        }
  	},
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(newVal,oldValue){
                this.$emit('change', this.value);
            }
        }
    },
    created(){
        this.dispatch("e-form", 'e.form.addField', this);
        this.counterValue=this.value.length;
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
    unProps:{
        "v-model":{
            type:String,
            name:"绑定",
            desc:"绑定"
        },
        "v-if":{"name":"是否创建","desc":"是否创建"},"v-show":{"name":"是否显示","desc":"是否显示"},"click":{"name":"单击事件","desc":"单击事件","propType":"event"},"dblclick":{"name":"双击事件","desc":"双击事件","propType":"event"},"mouseover":{"name":"鼠标over","desc":"鼠标over","propType":"event"},"mouseout":{"name":"鼠标离开","desc":"鼠标离开","propType":"event"}
    },
    props:{
        value: {
            type: [String, Number],
            default: ''
        },
        inType:{
            type:String,
            default:"string",
            name:"数据类型",
            desc:"输入框的类型，int,string,number,natural,negative等",
            values:[
                {
                    lab:"整数",
                    val:"int"
                },
                {
                    lab:"文本",
                    val:"string"
                },
                {
                    lab:"小数",
                    val:"float"
                },
                {
                    lab:"非负整数",
                    val:"natural"
                },
                {
                    lab:"负数",
                    val:"negative"
                },
                {
                    lab:"qq号",
                    val:"qq"
                },
                {
                    lab:"邮箱地址",
                    val:"email"
                },
                {
                    lab:"手机号",
                    val:"mobile"
                },
                {
                    lab:"固定电话",
                    val:"phone"
                },
                {
                    lab:"身份证",
                    val:"idcard"
                },
                {
                    lab:"正则表达式",
                    val:"regular"
                }
            ]
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
        minValue:{
            type:Number,
            name:"最小值",
            desc:"最小值"
        },
        maxValue:{
            type:Number,
            name:"最大值",
            desc:"最大值"
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
        error:{
            type:Boolean,
            name:"错误",
            default:false,
            desc:"错误"
        },
        "type":{
            type:String,
            name:"输入类型",
            default:"text",
            desc:"类型",
            values:[
                {
                    lab:"文本",
                    val:"text"
                },
                {
                    lab:"密码",
                    val:"password"
                }
            ]
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-input{
    display:inline-block;
	
  	height:40px;
  	line-height:40px;
  	
  	outline:none;
    width:200px;
    box-sizing:border-box;
    
    padding:0px;
    position:relative;
    
    .e-input-input{
        border:var(--border-common);
        margin:0px;
        padding-left:10px;
        width:100%;
        height:100%;
        outline:none;
        padding-right:60px;
        transition:0.3s linear;
        box-sizing:border-box;
        border-radius:2px;
        color:var(--color-font);
        appearance:none;
        &:hover{
            border-color:var(--color-border-hover);
            box-shadow: var(--box-shadow-hover-common);
        }
        &.error{
            border-color:var(--color-red);
        }
    }
    .count-length{
        position:absolute;
        right:1px;
        font-size:12px;
        color:#888;
        padding:0 10px;
        top:1px;
        bottom:1px;
    }
    
}
</style>