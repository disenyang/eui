
	<template>
	<div class="e-table">
    <table>
        <div class="hidden"><slot></slot></div>
        <tr>
            <th v-for="(column,index) in columns">
                {{column.title}}
                <e-checkbox v-if="column.multipleSelection"></e-checkbox>
            </th>
        </tr>
        <tr v-for="(row,rowIndex) in dataList">
            <td v-for="(column,colIndex) in columns">
                <e-table-cell :column="column" :row="rowIndex" :col="colIndex" :line="row"></e-table-cell>
            </td>
        </tr>
    </table>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-table",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            columns: []
        }
  	},
    preview(vm){
        vm.columns=[
            {
                title:"列1",
                relate:"col1",
                multipleSelection:true
            }
        ],
        vm.dataList=[
            {
                col1:"数据1"
            }
        ]
    },
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    created(){
        
    },
    mounted(){
        console.log("columns",this.columns);
    },
    unProps:{
       childrenDefine:{
            type:String,
            name:"内部定义",
            desc:"内部定义"
        },
       "v-if":{"name":"是否创建","desc":"是否创建"},"v-show":{"name":"是否显示","desc":"是否显示"},"click":{"name":"单击事件","desc":"单击事件","propType":"event"},"dblclick":{"name":"双击事件","desc":"双击事件","propType":"event"},"mouseover":{"name":"鼠标over","desc":"鼠标over","propType":"event"},"mouseout":{"name":"鼠标离开","desc":"鼠标离开","propType":"event"} 
    },
    props:{
        dataList:{
            type:Array,
            default:[],
            name:"列表数据",
            desc:"列表数据"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-table{
    width:100%;
    table{
        border-spacing: 0;
        border-collapse: collapse;
        width: 100%;
        min-height:50px;
        border:var(--border-common);
        tr{
            th{
                background-color: #eeeeee;
                padding: 8px;
                text-align: center;
                line-height: 25px;
                border-right: 1px solid var(--color-border-common);
                vertical-align: middle;
                word-wrap: break-word;
                word-break: break-all;
                color: #666;
            }
            td{
                height: 30px;
                color: #666;
                border-right: 1px solid var(--color-border-common);
                border-top:1px solid var(--color-border-common);
                text-align: center;
                padding: 5px;
                a{
                    color: #4ab3fb;
                }
                &.op{
                    padding: 5px;
                }
            }

        }
        
    }
    .hidden{
        display:none;
    }
}
</style>