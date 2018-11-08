
	<template>
	<div class="e-select-option"
    @click="handleOptionClick">
    <slot></slot>    
    {{label}}
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-select-option",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            isSelected:false,
            index: -1
        }
  	},
  	created(){
        // console.log("-------option-----------created------");
        if(this.$parent){
            this.$parent.options.push(this);
            this.$parent.optionsCache.push(this);
            this.$parent.optionsCount++;
            this.index = this.$parent.options.indexOf(this);
        }
        
    },
	mounted(){
        
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
        handleOptionClick(){
            this.dispatch("e-select", "handleOptionClick", this);
        }
    },
    unProps:{
        
    },
    props:{
        value: {
            default:false,
            name:"标题",
            desc:"标题",
        },
        label: {
            type:String,
            default:"",
            name:"标题",
            desc:"标题",
        }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-select-option{
    cursor:pointer;
    line-height:30px;
    padding-left:10px;
    &:hover{
        background-color:var(--color-hover-background-common);
        color:#fff;
    }
}
</style>