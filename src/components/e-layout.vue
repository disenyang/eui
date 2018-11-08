
	<template>
	<div class="e-layout" :style="{width:width,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,color:color,fontWeight:fontWeight,boxShadow:boxShadow}">
    <slot></slot>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-layout",
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
            inner:false,
            before:true,
            after:true
        },
        preview:true,
        template:{
            html:`<yii-modal class="templateconfig"
                v-model="modalShow"
                :auto-size="true"
                :height="600"
                :width="880"
                :maskClosable="false"
                :appendToBody="false">
                <template slot="title">模版配置</template>
                <div class="templateconfig-wrapper">
                    <yii-row>
                        <yii-col span="5">
                            行数
                        </yii-col>
                        <yii-col span="15">
                            <yii-input v-model="rows"></yii-input>
                        </yii-col>
                    </yii-row>
                    <yii-row>
                        <yii-col span="5">
                            列数
                        </yii-col>
                        <yii-col span="15">
                            <yii-input v-model="columns"></yii-input>
                        </yii-col>
                    </yii-row>
                </div>
                <template slot="footer">
                    <div class="btns">
                        <button @click="confirm">确定</button>
                        <button @click="close">关闭</button>
                    </div>
                </template>
            </yii-modal>`,
            js:{
                data(){
                    return {
                        modalShow:true,
                        rows:null,
                        columns:null
                    }
                },
                mounted(){
                },
                methods:{
                    //确定
                    confirm(){
                        this.modalShow=false;
                        this.confirmCallback(this);
                    },
                    //关闭
                    close(){
                        this.modalShow = false;
                    },
                    create(){
                        let children=[];
                        let pwidth = 100/this.rows+"%";
                        let pheight = 100/this.columns+"%";

                        for(let i=0;i<this.rows;i++){
                            let row = {name:"e-container",props:{width:"100%",height:pheight,display:"flex"},children:[]};
                            for(let j=0;j<this.columns;j++){
                                let col = {name:"e-container",props:{width:pwidth,height:"100%",display:"flex"}};
                                row.children.push(col);
                            }
                            children.push(row);
                        }
                        return {
                            props:{},children:children
                        };
                    }
                }
            },
            style:`.templateconfig .yii-row{
                margin:10px 10px;
            }`
        }
    },
    methods:{
        
    },
    unProps:{
        
    },
    props:{
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-layout{
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
}
</style>