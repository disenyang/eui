
	<template>
	<div class="e-mask" @click="clickHandler"
    :style="{'z-index': zIndex, 'background-color': `rgba(0, 0, 0, ${opacity})`}">
    <slot></slot>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-mask",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        },
        preview:false
    },
    props: {
        zIndex: {
            type: Number,
            default: 0
        },
        opacity: {
            type: Number,
            default: .3
        }
    },

    methods: {
        clickHandler(){
            this.$emit('click');
        }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-black);
}
</style>