
	<template>
	<div class="e-router-link" @click="clickLink">
     {{label}}
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-router-link",
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
        preview:true
    },
    methods:{
        clickLink(){
            this.$router.push(this.to);
        }
    },
    unProps:{
        
    },
    props:{
       to:{
            type:Object,
            name:"路由对象"
       },
       label:{
            type:String,
            name:"标签"
       }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-router-link{
    display:inline-block;
    color:var(--color-link);
    cursor:pointer;
}
</style>