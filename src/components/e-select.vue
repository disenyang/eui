
	<template>
	<div class="e-select" :style="{width:width,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,color:color,fontWeight:fontWeight,boxShadow:boxShadow}" @click="visible=!visible">
    {{label}}
    <div class="e-select-icon" :class="{action:visible}">
    </div>
   
    <transition name="fade">
        <div class="e-selects" :style="{'min-width':minWidthMin}" v-show="visible">
            <slot></slot>
            <div class="no-data" v-if="isEmpty">
                {{emptyText}}
            </div>
        </div>
    </transition>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-select",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            visible:false,
            placement:"bottom-end",
            minWidthMax:"",
            minWidthMin:"",
            label:"",
            selected:null,
            optionsCount: 0,
            options: [],
            optionsCache: []
        }
  	},
    computed:{
        isEmpty(){
            // return this.options == undefined || this.options.length < 1;
            return this.optionsCount < 1;
        }
    },
  	created(){
        this.dispatch("e-form", 'e.form.addField', this);
    },
    watch:{
        visible(val){
            if(val){
                this.updateMenuPosition();
            }
        },
        options(val){
            this.setSelected();
        },
        value(val, old) {
            console.log("value input事件", Date.now());
            this.setSelected();
            // this.$emit('change', this.value, this.selected.index);
            this.$emit('change', val, old);
            // 多选时新增在次执行，减少在<transition-group @after-leave="updateMenuPosition"> 执行
            if(this.multipleSelf && (val && old && (val.length > old.length))){
                this.updateMenuPosition();
            }
            //this.dispatch('FormItem', 'yii.form.change', this.value);
        }
    },
	mounted(){
        this.$on('handleOptionClick', this.handleOptionSelect);
        this.domOn(document.body, "click", this.bodyClickHandler);
        this.initValue();
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
        initValue(){
            this.setSelected();
        },
        updateMenuPosition(){
            this.minWidthMin = this.$el.getBoundingClientRect().width + 'px';
            let ele = this.$el.lastChild; 
            this.popperElm = ele;
            this.visibleArrow = false;
            this.referenceElm = this.$el;
            this.updatePopper();
        },
        handleOptionSelect(option){
            this.$emit("input",option.value);
            this.label = option.label;
            this.visible = false;
        },
        bodyClickHandler(e) {
            var tar = e.target;
            var triggerEl = this.$el;
            var popperEl = this.popperElm;
            if(triggerEl && triggerEl.contains(tar)
                || popperEl && popperEl.contains(tar)){
                return;
            }
            this.visible=false;
        },
        // 设置选中值
        setSelected(){
            this.$nextTick(()=>{
                if(this.multipleSelf){
                    let result = [];
                    this.value.forEach( value => {
                        result.push(this.getOptionFromValue(value))
                    });
                    this.selected = result;
                }else{
                    let option = this.getOptionFromValue(this.value);
                    this.label = option && option.label;
                    this.selected = option;
                }
            });

        },
        getOptionFromValue(value) {
            let option = {};
            for(let i = 0 ; i < this.optionsCache.length ; i++) {
                if(this.optionsCache[i].value === value){
                    option = this.optionsCache[i];
                    break;
                }
            }

            return option;
        }
    },
    unProps:{
        
    },
    props:{
        value: {
            required: true
        },
        emptyText: {
            default: "暂无数据"
        },
        formRule:{
            type:String,
            name:"表单规则",
            desc:"表单规则"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-select{
    border:var(--border-common);
    min-width:100px;
    height:36px;
    position:relative;
    transition:0.3s linear; 
    cursor:pointer;
    width:200px;
    position:relative;
    box-sizing:border-box;
    line-height:36px;
    padding-left:10px;
    color:var(--color-font);
    background-color:var(--color-white);
    .e-select-icon{
        position:absolute;
        right:6px;
        top:12px;
        border-left:8px solid transparent;
        border-right:8px solid transparent;
        border-top:10px solid #888;
        width:0px;
        height:0px;
        transition:0.3s linear;
        &.action{
            transform:rotate(180deg);
        }
    }
    &:hover{
        border-color:var(--color-border-hover);
        box-shadow: var(--box-shadow-hover-common);
    }
}
.e-selects{
    margin:10px 0;
    max-height: 300px;
    overflow: auto;
    position:absolute;
    box-sizing:border-box;
    background-color:#fff;
    border:var(--border-common);
    box-shadow:var(--box-shadow-hover-common);
    .no-data{
        line-height:36px;
        text-align:center;
    }
}
</style>