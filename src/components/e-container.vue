
	<template>
	<div class="e-contrainer" :style="{width:width,display:display,flexDirection:direction,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,color:color,fontWeight:fontWeight,boxShadow:boxShadow}">
    <slot></slot>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-container",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            
        }
  	},
  	created(){
        
    },
	mounted(){
        
    },
	config:{
        insert:{
            inner:true,
            before:false,
            after:false
        },
        preview:true
    },
    methods:{
        
    },
    unProps:{
        
    },
    props:{
        display:{
            type:String,
            name:"显示方式",
            desc:"显示方式",
            propType:"style",
            values:[
                {
                    lab:"行级显示",
                    val:"inline"
                },
                {
                    lab:"块级显示",
                    val:"block"
                },
                {
                    lab:"行块显示",
                    val:"inline-block"
                },
                {
                    lab:"弹性盒子",
                    val:"flex"
                }
            ]
        },
        direction:{
            name:"方向",
            type:Number,
            default:"row",
            desc:"方向",
            propType:"style",    
            values:[
                {
                    lab:"水平",
                    val:"row"
                },
                {
                    lab:"垂直",
                    val:"column"
                }
           ]     
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-contrainer{
    width:100%;
}
</style>