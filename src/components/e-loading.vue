
	<template>
	<e-mask
    v-show="modalShow"
    :zIndex="zIndex" 
    :opacity="maskOpacity"
    :class="[
        customClass ? `${customClass}-mask` : ''
    ]">

    <div  
        class="e-loading"
        :class="[
            customClass
        ]">

        <div class="icon"></div>&nbsp;{{text}}
    </div>
</e-mask>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-loading",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    props: {
        zIndex: {
            type: Number,
            default: 0
        },
        maskOpacity: {
            type: Number,
            default: .6
        },
        text: {
            type: String,
            default:"加载中",
        }
    },
    data(){
        return {
            // zIndex: 0,
            // maskOpacity: 0,
            customClass: '',
            modalShow: true
        };
    },

    destroyed(){

    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	@keyframes rodate-loading{
    0% {
        transform:rotate(0deg);
    }
    50%{
        transform:rotate(180deg);
    }
    100%{
        transform:rotate(360deg);
    }
}
.e-loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 70px;
    color: #fff;
    background-color:#000;
    .icon{
        width:36px;
        height:36px;
        display:block;
        background-image:url("http://oxynujxpj.bkt.clouddn.com/loading.png");
        background-position:center center;
        background-repeat:no-repeat;
        background-size:36px 36px;
        animation:rodate-loading linear 2s infinite;
    }
}
</style>