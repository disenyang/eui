
	<template>
	<span class="e-tip">
    <transition name="e-tip-fade" @after-leave="doDestroy">
        <div v-show="showPopper" :class="['e-tip-popper', 'is-'+effect]" ref="popper">
            {{content}}
        </div>
    </transition>
    <slot></slot>
</span>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-tip",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
		return {
            showPopper:false,
            timer: null
		}
	},
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    created(){
        const vnode = this.$slots.default[0];
        const data = vnode.data = vnode.data || {};
        const on = vnode.data.on = vnode.data.on || {};
        this.appendToBody=false;
        if(typeof(this.value)=="undefined"){
            if(this.mode=="hover"){
                on.mouseenter = this.addEventHandle(on.mouseenter, this.handleShowPopper);
                on.mouseleave = this.addEventHandle(on.mouseleave, this.handleClosePopper);
            }else if(this.mode=="click"){
                on.click = this.addEventHandle(on.click, this.handleClickPopper);
            }else if(this.mode=="control"){

            }
        }
    },
    watch:{
        value(val){
            this.showPopper = val;
            if(val){
               //this.domOn(document.body, "click", this.handleClosePopper);
            }
        }
    },
	methods:{
        addEventHandle(old, fn) {
            return old ? Array.isArray(old) ? old.concat(fn) : [old, fn] : fn;
        },
		handleShowPopper() {
            this.showPopper = true;
        },
        handleClickPopper() {
            this.showPopper = !this.showPopper;
        },
        handleClosePopper() {
            this.showPopper = false;
        },
        close() {
            this.value = false;
        },
        clearTimer() {
            clearTimeout(this.timer);
        },
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (this.value) {
                        this.close();
                    }
                }, this.duration);
            }
        }
	},
    mounted() {
        this.referenceElm = this.$el;
        if(typeof(this.value)!="undefined" || this.mode=="control"){
            this.showPopper = this.value;   
        }
    },
    unProps:{
        "v-model":{
            type:String,
            name:"绑定",
            desc:"绑定"
        },
        "v-if":{"name":"是否创建","desc":"是否创建"},"v-show":{"name":"是否显示","desc":"是否显示"},"click":{"name":"单击事件","desc":"单击事件","propType":"event"},"dblclick":{"name":"双击事件","desc":"双击事件","propType":"event"},"mouseover":{"name":"鼠标over","desc":"鼠标over","propType":"event"},"mouseout":{"name":"鼠标离开","desc":"鼠标离开","propType":"event"}
    },
	props:{
        value:{
            type:String
        },
		content:{
            type:String,
            name:"文本",
            desc:"文本",
		},
        mode:{
            type:String,
            name:"模式",
            desc:"模式",
            default:"hover",
            values:[
                {
                    lab:"鼠标悬浮",
                    val:"hover"
                },
                {
                    lab:"鼠标单击",
                    val:"click"
                },
                {
                    lab:"自由控制",
                    val:"control"
                }
            ]
		},
		placement:{
			type:String,
			default:'top',
            name:"位置",
            desc:"位置",
		},
        effect:{
			type:String,
			default:'black',
            name:"主题",
            desc:"显示的默认提供的主题",
		},
        duration:{
			type:String,
			default:2000,
            name:"显示时长"
		},
        transition: {
            type: String,
            default: 'fade',
            name:"过渡动画"
        }
	}
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-tip{
    display: inline-block;
    position:relative;
}
/*TODO if 的简化，以及根据不同的传入参数使用不同的属性*/
@define-mixin arrow-ele $direction-name{

    @if $direction-name == top {
        margin-bottom: 10px;

        .popper--arrow{
            bottom: -5px;
            border-bottom-width: 0;

            &::after{
                bottom: 1px;
                margin-left: -4px;
                border-bottom-width: 0;
            }
        }
    }

    @if $direction-name == bottom {
        margin-top: 10px;

        .popper--arrow{
            top: -5px;
            border-top-width: 0;

            &::after{
                top: 1px;
                margin-left: -4px;
                border-top-width: 0;
            }
        }
    }

    @if $direction-name == left {

        margin-right: 10px;

        .popper--arrow{
            right: -5px;
            border-right-width: 0;

            &::after{
                right: 1px;
                bottom: -4px;
                margin-left: -4px;
                border-right-width: 0;
            }
        }
    }

    @if $direction-name == right {
        margin-left: 10px;

        .popper--arrow {
            left: -5px;
            border-left-width: 0;

            &::after{
                left: 1px;
                bottom: -4px;
                border-left-width: 0;
            }
        }
    }

}

@define-mixin arrow-color $direction-name $color-name $border-color{
    @if $direction-name == top {
        &.$color-name .popper--arrow {
            border-top-color: $border-color;
            &::after{
                border-top-color: $border-color;
            }
        }
    }

    @if $direction-name == bottom {
        &.$color-name .popper--arrow {
            border-bottom-color: $border-color;
            &::after{
                border-bottom-color: $border-color;
            }
        }
    }

    @if $direction-name == left {
        &.$color-name .popper--arrow {
            border-left-color: $border-color;
            &::after{
                border-left-color: $border-color;
            }
        }
    }

    @if $direction-name == right {
        &.$color-name .popper--arrow {
            border-right-color: $border-color;
            &::after{
                border-right-color: $border-color;
            }
        }
    }

}
.e-tip-popper{
    line-height: 18px;
    font-size: 12px;
    letter-spacing: 0;
    text-align: center;
    position: relative;
    padding: 5px;
    box-shadow: var(--box-shadow-hover-common);
    min-width: 36px;
    max-width: 240px;
    border-radius:2px;
    transition: opacity 0.3s;
    &.is-blue{
        background: var(--color-primary);
        color: var(--color-white);
    }

    &.is-black{
        background: var(--color-black);
        color: var(--color-white);
    }

    &.is-white{
        background: var(--color-white);
        color: var(--color-font);
        border: 1px solid var(--color-font);
        .popper--arrow{
            &::after{
                display: block;
            }

        }
    }
    .popper--arrow,
    .popper--arrow::after{
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .popper--arrow{
        border-width: 5px;
    }

    .popper--arrow::after{
        content: " ";
        border-width: 4px;
        display: none;
    }

    &[x-placement^="top"] {
        @mixin arrow-ele top;
        @mixin arrow-color top is-blue var(--color-primary);
        @mixin arrow-color top is-white var(--color-white);
        @mixin arrow-color top is-black var(--color-black);
        &.is-white .popper--arrow {
            border-top-color: var(--color-font);
        }
    }

    &[x-placement^="bottom"] {
        @mixin arrow-ele bottom;
        @mixin arrow-color bottom is-blue var(--color-primary);
        @mixin arrow-color bottom is-white var(--color-white);
        @mixin arrow-color bottom is-black var(--color-black);
        &.is-white .popper--arrow {
            border-bottom-color: var(--color-font);
        }
    }

    &[x-placement^="left"] {
        @mixin arrow-ele left;
        @mixin arrow-color left is-blue var(--color-primary);
        @mixin arrow-color left is-white var(--color-white);
        @mixin arrow-color left is-black var(--color-black);
        &.is-white .popper--arrow {
            border-left-color: var(--color-gray80);
        }
    }

    &[x-placement^="right"] {
        @mixin arrow-ele right;
        @mixin arrow-color right is-blue var(--color-primary);
        @mixin arrow-color right is-white var(--color-white);
        @mixin arrow-color right is-black var(--color-black);
        &.is-white .popper--arrow {
            border-right-color: var(--color-font);
        }
    }
}
.e-tip-fade-enter,
.e-tip-fade-leave-active {
    opacity: 0;
}
</style>