
	<template>
	<div class="e-upload" >
    <div class="help" v-if="help">{{help}}</div>
    <div class="e-upload-wrapper">
        <div class="e-upload-btn" :style="{width:imageWidth,height:imageHeight}" v-for="(img,index) in images">
            <div class="e-upload-input" v-if="!img.value">
                <e-icon type="stroke" :style="{fontSize:fontSize}" class="icon" width="100%"  height="100%" name="plus"></e-icon>
                <input type="file" :accept="fileType" :ref="'file'+index"  class="file" @change="upload(img,index)">
            </div>    
            <div class="e-upload-img" @mouseenter="img.showDel=true" @mouseleave="img.showDel=false" v-if="img.value">
                <img :src="img.value">
                <i class="del-icon" v-show="img.showDel" @click="delImage(img)"></i>
            </div>
        </div> 
    </div>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-upload",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
    data(){
        return {
            showDel:false,
            images:[]
        }
  	},
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    watch:{
        value(val){
            this.initValue();
        }
    },
    computed:{
        outHeight:function(){
            
        }
    },
    created(){
        this.initValue();
        this.dispatch("e-form", 'e.form.addField', this);
    },
    mounted(){
        console.log("value",this.value);
    },
    methods:{
        click(){
            this.$emit("click");
        },
        initValue(){
            let valueImages = [];
            let type = typeof(this.value);
            if(type=="string"){
                valueImages = [...this.value.split(this.splitChar)];
            }else if(type=="array"){
                valueImages = this.value;
            }
            let images = [];
            for(let i=0;i<this.size;i++){
                if(i<valueImages.length){
                    images.push({showDel:false,value:valueImages[i]});
                }else{
                    images.push({showDel:false,value:""});
                }
            }
            this.images = images;
        },
        //设置值
        setValue(){
            let values = [];
            for(let i=0;i<this.images.length;i++){
                let img = this.images[i];
                if(img.value){
                    values.push(img.value);
                }
            }
            let type = typeof(this.value);
            if(type=="string"){
                this.value = values.join(this.splitChar);
            }else if(type=="array"){
                this.value = values;
            }
            this.$emit("input",this.value);
        },
        delImage(img){
            img.value="";
            this.setValue();
        },
        upload(img,index){
            let xhr = new XMLHttpRequest();
            
            
            let fileObj = this.$refs['file'+index][0].files[0]; // js 获取文件对象

            if(!fileObj) return 1;

            let formData = new FormData(); // FormData 对象
            formData.append(this.fileName, fileObj); // 文件对象

            xhr.open("post", this.uploadUrl, true);

            xhr.onreadystatechange = (evt) =>{
                // console.log(xhr.readyState, evt);
            };

            // 请求取消
            xhr.onabort = (evt) =>{
            };

            //请求失败
            xhr.onerror = (evt)=>{
            }; 

            //上传进度
            xhr.upload.onprogress = (evt)=>{
                //uploadProgress(evt, options, xhr, context)
            };

            //请求完成
            xhr.onload = (evt)=>{
                let text = xhr.responseText || xhr.response;
                if (!text) {
                    return text;
                }

                try {
                    let json =  JSON.parse(text);
                    //this.options.complete(json);
                    img.value = eval(`json.${this.resultJsonPath}`)
                    this.setValue();
                } catch (e) {
                    return text;
                }
                
                //uploadComplete(evt, options, xhr, context);
            };


            xhr.send(formData); //开始上传，发送form数据

        }
    },
    unProps:{
        "v-if":{"name":"是否创建","desc":"是否创建"},"v-show":{"name":"是否显示","desc":"是否显示"},"click":{"name":"单击事件","desc":"单击事件","propType":"event"},"dblclick":{"name":"双击事件","desc":"双击事件","propType":"event"},"mouseover":{"name":"鼠标over","desc":"鼠标over","propType":"event"},"mouseout":{"name":"鼠标离开","desc":"鼠标离开","propType":"event"}
    },
    props:{
        value:{
        },
        formRule:{
            type:String,
            name:"表单规则",
            desc:"表单规则"
        },
        size:{
            type:Number,
            name:"上传数量",
            default:1,
            desc:"上传数量"
        },
        uploadUrl:{
            type:String,
            name:"接口地址",
            default:"",
            required:true,
            desc:"接口地址"
        },
        fileName:{
            type:String,
            name:"参数名称",
            default:"file",
            desc:"参数名称"
        },
        resultJsonPath:{
            type:String,
            name:"结果路径",
            default:"result",
            desc:"结果路径,接口返回json的url路径"
        },
        splitChar:{
            type:String,
            name:"分隔符号",
            default:",",
            desc:"分隔符号"
        },
        help:{
            type:String,
            name:"帮助说明",
            default:"",
            desc:"帮助说明"
        },
        imageWidth:{
            type:String,
            default:",",
            name:"图片宽度",
            desc:"图片宽度"
        },
        imageHeight:{
            type:String,
            default:",",
            name:"图片高度",
            desc:"图片高度"
        },
        fileType:{
            type:String,
            name:"文件类型",
            default:"*",
            desc:"文件类型"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}    
</script>
<style>
    @import '../../public/styles/var.css';
	.e-upload{
    position: relative;
    
    .help{
        color:var(--color-gray);
        line-height:25px;
        font-size:13px;
    }
    .e-upload-wrapper{
        display:flex;
        flex-direction: row;
        flex-wrap:nowrap;
        align-items:center;
        
        .e-upload-btn{
            margin-right:10px;
            border:1px solid var(--color-border-common);
            .e-upload-input{
                display:flex;
                align-items:center;
                justify-content:center;
                position: relative;
                width: 100%;
                height: 100%;
                cursor: pointer;
                .icon{
                    color:var(--color-border-common);
                    font-size:50px;
                }
                .file{
                    cursor: pointer;
                    position:absolute;
                    width:100%;
                    height:100%;
                    opacity:0;
                }
            }
            .e-upload-img{
                padding:5px;
                box-sizing:border-box;
                position:relative;
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                img{
                    max-width:100%;
                    max-height:100%;
                }
                .del-icon{
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    right: -6px;
                    top: -6px;
                    cursor: pointer;
                    background:#2365a1;
                    border-radius:6px;
                    &:before{
                        content: "";
                        display: block;
                        position: absolute;
                        top: 5px;
                        left: 3px;
                        margin: 0 auto;
                        width: 6px;
                        height: 1px;
                        background-color: var(--color-white);
                        z-index: 1;
                    }

                }
            }
        }
    }
}

</style>