
	<template>
	<i class="e-icon" :class="['e-icon-' + name, {
        'e-icon-spin': name=='loading' || name=='loading-3-quarters'
        }]">
</i>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-icon",
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
        
    },
    unProps:{
        
    },
    props:{
        name:{
            type:[String],
            name:"名称"
        }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	[class*="e-icon-"]{
        font-family: 'CasionIcon' !important;

        display: inline-block;

        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        
        /* Enable Ligatures ================ */
        letter-spacing: 0;
        -webkit-font-feature-settings: "liga";
        -moz-font-feature-settings: "liga=1";
        -moz-font-feature-settings: "liga";
        -ms-font-feature-settings: "liga" 1;
        -o-font-feature-settings: "liga";
        font-feature-settings: "liga";

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

.e-icon-step-forward:before { content: "\e600"; }
.e-icon-step-backward:before { content: "\e601"; }
.e-icon-forward:before { content: "\e602"; }
.e-icon-backward:before { content: "\e603"; }
.e-icon-caret-right:before { content: "\e604"; }
.e-icon-caret-left:before { content: "\e605"; }
.e-icon-caret-down:before { content: "\e606"; }
.e-icon-caret-up:before { content: "\e607"; }
.e-icon-right-circle:before { content: "\e608"; }
.e-icon-circle-right:before { content: "\e608"; } /*// antd@1.x compatibility alias: right-circle*/
.e-icon-caret-circle-right:before { content: "\e608"; } /*// antd@1.x compatibility alias: right-circle*/
.e-icon-left-circle:before { content: "\e609"; }
.e-icon-circle-left:before { content: "\e609"; } /*// antd@1.x compatibility alias: left-circle*/
.e-icon-caret-circle-left:before { content: "\e609"; } /*// antd@1.x compatibility alias: left-circle*/
.e-icon-up-circle:before { content: "\e60a"; }
.e-icon-circle-up:before { content: "\e60a"; } /*// antd@1.x compatibility alias: up-circle*/
.e-icon-caret-circle-up:before { content: "\e60a"; } /*// antd@1.x compatibility alias: up-circle*/
.e-icon-down-circle:before { content: "\e60b"; }
.e-icon-circle-down:before { content: "\e60b"; } /*// antd@1.x compatibility alias: down-circle*/
.e-icon-caret-circle-down:before { content: "\e60b"; } /*// antd@1.x compatibility alias: down-circle*/
.e-icon-right-circle-o:before { content: "\e60c"; }
.e-icon-circle-o-right:before { content: "\e60c"; } /*// antd@1.x compatibility alias: right-circle-o*/
.e-icon-caret-circle-o-right:before { content: "\e60c"; } /*// antd@1.x compatibility alias: right-circle-o*/
.e-icon-left-circle-o:before { content: "\e60d"; }
.e-icon-circle-o-left:before { content: "\e60d"; } /*// antd@1.x compatibility alias: left-circle-o*/
.e-icon-caret-circle-o-left:before { content: "\e60d"; } /*// antd@1.x compatibility alias: left-circle-o*/
.e-icon-up-circle-o:before { content: "\e60e"; }
.e-icon-circle-o-up:before { content: "\e60e"; } /*// antd@1.x compatibility alias: up-circle-o*/
.e-icon-caret-circle-o-up:before { content: "\e60e"; } /*// antd@1.x compatibility alias: up-circle-o*/
.e-icon-down-circle-o:before { content: "\e60f"; }
.e-icon-circle-o-down:before { content: "\e60f"; } /*// antd@1.x compatibility alias: down-circle-o*/
.e-icon-caret-circle-o-down:before { content: "\e60f"; } /*// antd@1.x compatibility alias: down-circle-o*/
.e-icon-verticle-left:before { content: "\e610"; }
.e-icon-verticle-right:before { content: "\e611"; }
.e-icon-rollback:before { content: "\e612"; }
.e-icon-retweet:before { content: "\e613"; }
.e-icon-shrink:before { content: "\e614"; }
.e-icon-arrows-alt:before { content: "\e615"; }
.e-icon-arrow-salt:before { content: "\e615"; } /*// antd@1.x compatibility alias: arrows-alt*/
.e-icon-reload:before { content: "\e616"; }
.e-icon-double-right:before { content: "\e617"; }
.e-icon-double-left:before { content: "\e618"; }
.e-icon-arrow-down:before { content: "\e619"; }
.e-icon-arrow-up:before { content: "\e61a"; }
.e-icon-arrow-right:before { content: "\e61b"; }
.e-icon-arrow-left:before { content: "\e61c"; }
.e-icon-down:before { content: "\e61d"; }
.e-icon-up:before { content: "\e61e"; }
.e-icon-right:before { content: "\e61f"; }
.e-icon-left:before { content: "\e620"; }
.e-icon-minus-square-o:before { content: "\e621"; }
.e-icon-minus-circle:before { content: "\e622"; }
.e-icon-minus-circle-o:before { content: "\e623"; }
.e-icon-minus:before { content: "\e624"; }
.e-icon-plus-circle-o:before { content: "\e625"; }
.e-icon-plus-circle:before { content: "\e626"; }
.e-icon-plus:before { content: "\e627"; }
.e-icon-info-circle:before { content: "\e628"; }
.e-icon-info-circle-o:before { content: "\e629"; }
.e-icon-info:before { content: "\e62a"; }
.e-icon-exclamation:before { content: "\e62b"; }
.e-icon-exclamation-circle:before { content: "\e62c"; }
.e-icon-exclamation-circle-o:before { content: "\e62d"; }
.e-icon-close-circle:before { content: "\e62e"; }
.e-icon-cross-circle:before { content: "\e62e"; } /*// antd@1.x compatibility alias: close-circle*/
.e-icon-close-circle-o:before { content: "\e62f"; }
.e-icon-cross-circle-o:before { content: "\e62f"; } /*// antd@1.x compatibility alias: close-circle-o*/
.e-icon-check-circle:before { content: "\e630"; }
.e-icon-check-circle-o:before { content: "\e631"; }
.e-icon-check:before { content: "\e632"; }
.e-icon-close:before { content: "\e633"; }
.e-icon-cross:before { content: "\e633"; } /*// antd@1.x compatibility alias: close*/
.e-icon-customer-service:before { content: "\e634"; }
.e-icon-customerservice:before { content: "\e634"; } /*// antd@1.x compatibility alias: customer-service*/
.e-icon-credit-card:before { content: "\e635"; }
.e-icon-code-o:before { content: "\e636"; }
.e-icon-book:before { content: "\e637"; }
.e-icon-bar-chart:before { content: "\e638"; }
.e-icon-bars:before { content: "\e639"; }
.e-icon-question:before { content: "\e63a"; }
.e-icon-question-circle:before { content: "\e63b"; }
.e-icon-question-circle-o:before { content: "\e63c"; }
.e-icon-pause:before { content: "\e63d"; }
.e-icon-pause-circle:before { content: "\e63e"; }
.e-icon-pause-circle-o:before { content: "\e63f"; }
.e-icon-clock-circle:before { content: "\e640"; }
.e-icon-clock-circle-o:before { content: "\e641"; }
.e-icon-swap:before { content: "\e642"; }
.e-icon-swap-left:before { content: "\e643"; }
.e-icon-swap-right:before { content: "\e644"; }
.e-icon-plus-square-o:before { content: "\e645"; }
.e-icon-frown:before { content: "\e646"; }
.e-icon-frown-circle:before { content: "\e646"; } /*// antd@1.x compatibility alias: frown*/
.e-icon-ellipsis:before { content: "\e647"; }
.e-icon-copy:before { content: "\e648"; }
.e-icon-menu-fold:before { content: "\e658"; }
.e-icon-mail:before { content: "\e659"; }
.e-icon-logout:before { content: "\e65a"; }
.e-icon-link:before { content: "\e65b"; }
.e-icon-area-chart:before { content: "\e65c"; }
.e-icon-line-chart:before { content: "\e65d"; }
.e-icon-home:before { content: "\e65e"; }
.e-icon-laptop:before { content: "\e65f"; }
.e-icon-star:before { content: "\e660"; }
.e-icon-star-o:before { content: "\e661"; }
.e-icon-folder:before { content: "\e662"; }
.e-icon-filter:before { content: "\e663"; }
.e-icon-file:before { content: "\e664"; }
.e-icon-exception:before { content: "\e665"; }
.e-icon-meh:before { content: "\e666"; }
.e-icon-meh-circle:before { content: "\e666"; } /*// antd@1.x compatibility alias: meh*/
.e-icon-meh-o:before { content: "\e667"; }
.e-icon-shopping-cart:before { content: "\e668"; }
.e-icon-save:before { content: "\e669"; }
.e-icon-user:before { content: "\e66a"; }
.e-icon-video-camera:before { content: "\e66b"; }
.e-icon-to-top:before { content: "\e66c"; }
.e-icon-team:before { content: "\e66d"; }
.e-icon-tablet:before { content: "\e66e"; }
.e-icon-solution:before { content: "\e66f"; }
.e-icon-search:before { content: "\e670"; }
.e-icon-share-alt:before { content: "\e671"; }
.e-icon-setting:before { content: "\e672"; }
.e-icon-poweroff:before { content: "\e6d5"; }
.e-icon-picture:before { content: "\e674"; }
.e-icon-phone:before { content: "\e675"; }
.e-icon-paper-clip:before { content: "\e676"; }
.e-icon-notification:before { content: "\e677"; }
.e-icon-mobile:before { content: "\e678"; }
.e-icon-menu-unfold:before { content: "\e679"; }
.e-icon-inbox:before { content: "\e67a"; }
.e-icon-lock:before { content: "\e67b"; }
.e-icon-qrcode:before { content: "\e67c"; }
.e-icon-play-circle:before { content: "\e6d0"; }
.e-icon-play-circle-o:before { content: "\e6d1"; }
.e-icon-tag:before { content: "\e6d2"; }
.e-icon-tag-o:before { content: "\e6d3"; }
.e-icon-tags:before { content: "\e67d"; }
.e-icon-tags-o:before { content: "\e67e"; }
.e-icon-cloud-o:before { content: "\e67f"; }
.e-icon-cloud:before { content: "\e680"; }
.e-icon-cloud-upload:before { content: "\e681"; }
.e-icon-cloud-download:before { content: "\e682"; }
.e-icon-cloud-download-o:before { content: "\e683"; }
.e-icon-cloud-upload-o:before { content: "\e684"; }
.e-icon-environment:before { content: "\e685"; }
.e-icon-environment-o:before { content: "\e686"; }
.e-icon-eye:before { content: "\e687"; }
.e-icon-eye-o:before { content: "\e688"; }
.e-icon-camera:before { content: "\e689"; }
.e-icon-camera-o:before { content: "\e68a"; }
.e-icon-windows:before { content: "\e68b"; }
.e-icon-apple:before { content: "\e68c"; }
.e-icon-apple-o:before { content: "\e6d4"; }
.e-icon-android:before { content: "\e938"; }
.e-icon-android-o:before { content: "\e68d"; }
.e-icon-aliwangwang:before { content: "\e68e"; }
.e-icon-aliwangwang-o:before { content: "\e68f"; }
.e-icon-export:before { content: "\e691"; }
.e-icon-edit:before { content: "\e692"; }
.e-icon-circle-down-o:before { content: "\e693"; }
.e-icon-circle-down:before { content: "\e694"; }
.e-icon-appstore-o:before { content: "\e695"; }
.e-icon-appstore:before { content: "\e696"; }
.e-icon-scan:before { content: "\e697"; }
.e-icon-file-text:before { content: "\e698"; }
.e-icon-folder-open:before { content: "\e699"; }
.e-icon-hdd:before { content: "\e69a"; }
.e-icon-ie:before { content: "\e69b"; }
.e-icon-file-jpg:before { content: "\e69c"; }
.e-icon-like:before { content: "\e64c"; }
.e-icon-like-o:before { content: "\e69d"; }
.e-icon-dislike:before { content: "\e64b"; }
.e-icon-dislike-o:before { content: "\e69e"; }
.e-icon-delete:before { content: "\e69f"; }
.e-icon-enter:before { content: "\e6a0"; }
.e-icon-pushpin-o:before { content: "\e6a1"; }
.e-icon-pushpin:before { content: "\e6a2"; }
.e-icon-heart:before { content: "\e6a3"; }
.e-icon-heart-o:before { content: "\e6a4"; }
.e-icon-pay-circle:before { content: "\e6a5"; }
.e-icon-pay-circle-o:before { content: "\e6a6"; }
.e-icon-smile:before { content: "\e6a7"; }
.e-icon-smile-circle:before { content: "\e6a7"; }   /*antd@1.x compatibility alias: smile*/
.e-icon-smile-o:before { content: "\e6a8"; }
.e-icon-frown-o:before { content: "\e6a9"; }
.e-icon-calculator:before { content: "\e6aa"; }
.e-icon-message:before { content: "\e6ab"; }
.e-icon-chrome:before { content: "\e6ac"; }
.e-icon-github:before { content: "\e6ad"; }
.e-icon-file-unknown:before { content: "\e6af"; }
.e-icon-file-excel:before { content: "\e6b0"; }
.e-icon-file-ppt:before { content: "\e6b1"; }
.e-icon-file-word:before { content: "\e6b2"; }
.e-icon-file-pdf:before { content: "\e6b3"; }
.e-icon-desktop:before { content: "\e6b4"; }
.e-icon-upload:before { content: "\e6b6"; }
.e-icon-download:before { content: "\e6b7"; }
.e-icon-pie-chart:before { content: "\e6b8"; }
.e-icon-unlock:before { content: "\e6ba"; }
.e-icon-calendar:before { content: "\e6bb"; }
.e-icon-windows-o:before { content: "\e6bc"; }
.e-icon-dot-chart:before { content: "\e6bd"; }
.e-icon-bar-chart:before { content: "\e6be"; }
.e-icon-code:before { content: "\e6bf"; }
.e-icon-api:before { content: "\e951"; }
.e-icon-plus-square:before { content: "\e6c0"; }
.e-icon-minus-square:before { content: "\e6c1"; }
.e-icon-close-square:before { content: "\e6c2"; }
.e-icon-close-square-o:before { content: "\e6c3"; }
.e-icon-check-square:before { content: "\e6c4"; }
.e-icon-check-square-o:before { content: "\e6c5"; }
.e-icon-fast-backward:before { content: "\e6c6"; }
.e-icon-fast-forward:before { content: "\e6c7"; }
.e-icon-up-square:before { content: "\e6c8"; }
.e-icon-down-square:before { content: "\e6c9"; }
.e-icon-left-square:before { content: "\e6ca"; }
.e-icon-right-square:before { content: "\e6cb"; }
.e-icon-right-square-o:before { content: "\e6cc"; }
.e-icon-left-square-o:before { content: "\e6cd"; }
.e-icon-down-square-o:before { content: "\e6ce"; }
.e-icon-up-square-o:before { content: "\e6cf"; }
.e-icon-loading:before { content: "\e64d"; }
.e-icon-loading-3-quarters:before { content: "\e6ae"; }
.e-icon-bulb:before { content: "\e649"; }
.e-icon-select:before { content: "\e64a"; }
.e-icon-addfile:before,
.e-icon-file-add:before { content: "\e910"; }
.e-icon-addfolder:before,
.e-icon-folder-add:before { content: "\e914"; }
.e-icon-switcher:before { content: "\e913"; }
.e-icon-rocket:before { content: "\e90f"; }
.e-icon-dingding:before { content: "\e923"; }
.e-icon-dingding-o:before { content: "\e925"; }
.e-icon-bell:before { content: "\e64e"; }
.e-icon-disconnect:before { content: "\e64f"; }
.e-icon-database:before { content: "\e650"; }
.e-icon-compass:before { content: "\e6db"; }
.e-icon-barcode:before { content: "\e652"; }
.e-icon-hourglass:before { content: "\e653"; }
.e-icon-key:before { content: "\e654"; }
.e-icon-flag:before { content: "\e655"; }
.e-icon-layout:before { content: "\e656"; }
.e-icon-login:before { content: "\e657"; }
.e-icon-printer:before { content: "\e673"; }
.e-icon-sound:before { content: "\e6e9"; }
.e-icon-usb:before { content: "\e6d7"; }
.e-icon-skin:before { content: "\e6d8"; }
.e-icon-tool:before { content: "\e6d9"; }
.e-icon-sync:before { content: "\e6da"; }
.e-icon-wifi:before { content: "\e6d6"; }
.e-icon-car:before { content: "\e6dc"; }
.e-icon-copyright:before { content: "\e6de"; }
.e-icon-schedule:before { content: "\e6df"; }
.e-icon-user-add:before { content: "\e6ed"; }
.e-icon-user-delete:before { content: "\e6e0"; }
.e-icon-usergroup-add:before { content: "\e6dd"; }
.e-icon-usergroup-delete:before { content: "\e6e1"; }
.e-icon-man:before { content: "\e6e2"; }
.e-icon-woman:before { content: "\e6ec"; }
.e-icon-shop:before { content: "\e6e3"; }
.e-icon-gift:before { content: "\e6e4"; }
.e-icon-idcard:before { content: "\e6e5"; }
.e-icon-medicine-box:before { content: "\e6e6"; }
.e-icon-red-envelope:before { content: "\e6e7"; }
.e-icon-coffee:before { content: "\e6e8"; }
.e-icon-trademark:before { content: "\e651"; }
.e-icon-safety:before { content: "\e6ea"; }
.e-icon-wallet:before { content: "\e6eb"; }
.e-icon-bank:before { content: "\e6ee"; }
.e-icon-trophy:before { content: "\e6ef"; }
.e-icon-contacts:before { content: "\e6f0"; }
.e-icon-global:before { content: "\e6f1"; }
.e-icon-shake:before { content: "\e94f"; }
.e-icon-fork:before { content: "\e6f2"; }
.e-icon-spin:before {
  display: inline-block;
  animation: loadingCircle 1s infinite linear;
}
</style>