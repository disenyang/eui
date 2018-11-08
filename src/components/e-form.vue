
	<template>
	<div class="e-form" :style="{width:width,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,color:color,fontWeight:fontWeight,boxShadow:boxShadow}">
    <slot></slot>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-form",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
    data(){
        return {
            fields: []
        };
    },
    config:{
        insert:{
            inner:true,
            before:true,
            after:true
        }
    },
    created(){
        this.$on('e.form.addField', this.addFieldHandler)
        this.$on('e.form.removeField', this.removeFieldHandler)
    },
    methods: {
        addFieldHandler(field){  
            console.log("addField======",field);
            // todo 判重？
            this.fields.push(field);
        },
        removeFieldHandler(field){
            let index = this.fields.indexOf(field);

            if(index > -1){
                this.fields.splice(index, 1);
            }
        },
        validate(){
            let rules = this.rules;
            let result = true;
            for(let ruleKey in rules){
                let rule = rules[ruleKey];
                rule.error=false;
                for(let field of this.fields){
                    if(field.formRule===ruleKey){
                        let value = field.value;
                        if(rule.required){
                            if(!value){
                                rule.error=true;
                                result = false;
                            }else if(rule.validator){
                                rule.validator(value,rule,(message)=>{
                                    rule.message = message;
                                    rule.error=true;
                                });
                                
                                if(rule.error){
                                    result = false;
                                }
                                
                            }
                        }else if(rule.validator){
                            rule.validator(value,rule,(message)=>{
                                rule.message = message;
                                rule.error=true;
                            });
                            if(rule.error){
                                result = false;
                            }
                        }
                    }
                }
            }
            
            
            
            let promise = new Promise((resolve, reject) => {
                if(result){
                    resolve();
                }else{
                    reject();
                }
            });
            
            return promise;
            
        }
    },
    props:{
        rules:{
            type:Object,
            name:"验证规则",
            desc:"验证规则"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-form{
    min-width:100px;
    min-height:100px;
}
</style>