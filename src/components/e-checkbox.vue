
	<template>
	<label class="e-checkbox">
    <span class="e-checkbox-input" @click="checkClick">
        <span class="checked" v-if="isChecked"></span>
        <span class="unchecked" v-if="!isChecked"></span>
    </span>
    <span class="e-checkbox-label">
        {{label}}
    </span>
</label>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-checkbox",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
     data() {
        return {
            selfModel: false,
            focus: false
        }
    },
    props: {
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
        },
        checkValue:{
            type:String,
            default:"",
            name:"选中值",
            desc:"选中状态的值",
        },
        uncheckValue:{
            type:String,
            default:"",
            name:"未选中值",
            desc:"未选中状态的值"
        },
        disabled:{
            type:String,
            default:"",
            name:"禁用",
            desc:"禁用"
        }
    },
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    computed: {
       isChecked(){
            return this.value === this.checkValue;
        }
    },
    methods: {
        checkClick(){
            this.value=!this.value;
            this.$emit("input",this.value);
        }
    },
    created(){

    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-checkbox{
    display:inline-block;
    white-space: nowrap;
    .e-checkbox-input{
        display:inline-block;
        vertical-align: text-bottom;
        .checked{
            display:block;
            width: 16px;
            height: 16px;
            background-color:#438beb;
            border-radius:2px;
            position:relative;
            &:before{
                position:absolute;
                top: 4px;
                left: 4px;
                content: "";
                display: block;
                background:transparent;
                width:8px;
                height: 3px;
                border-left: 1px solid #fff;
                border-bottom: 1px solid #fff;
                transform: rotate(-45deg);
            }
        },
        .unchecked{
            display:block;
            width: 16px;
            height: 16px;
            box-sizing:border-box;
            border:1px solid #ccc;
            background-color:#fff;
            border-radius:2px;
        }
    }
    .e-checkbox-label{
        line-height:16px;
        color: #576166;
        padding-left: 6px;
    }
}
</style>