<template>
	<div class="e-nav" :class="[direction]" :style="{width:width,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,boxShadow:boxShadow,color:color}">
    <!-- 一级 -->
    <div class="item"  v-for="(item,index) in navs">
        <div class="item-wrapper" @click="clickItem(item)" :class="{selected:item==selectedItem}">
          <div class="icon"><img :src="item.icon"></div>
          <div class="name">{{item.name}}</div>
          <div class="item-expand-icon" v-show="item.children && item.children.length!=0" :class="{action:item.showChildren}"></div>
        </div>
        <div class="item-children" :style="{height:(item.children&& item.showChildren?item.children.length*60:0)+'px'}" >
          <!-- 二级 -->
          <div class="item"  v-for="(item2,index) in item.children">
            <div class="item-wrapper" @click="clickItem(item2)" :class="{selected:item2==selectedItem}">
              <div class="icon"><img :src="item2.icon"></div>
              <div class="name">{{item2.name}}</div>
            </div>
            <div class="item2-children" :style="{height:(item2.children&& item2.showChildren?item2.children.length*60:0)+'px'}">
              <!-- 三级 -->
              <div class="item"  v-for="(item3,index) in item2.children">
                <div class="item-wrapper" @click="clickItem(item3)" :class="{selected:item3==selectedItem}">
                  <div class="icon"><img :src="item3.icon"></div>
                  <div class="name">{{item3.name}}</div>
                </div>
                <div class="item-children" :style="{height:(item3.children&& item3.showChildren?item3.children.length*60:0)+'px'}">
                  
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
  	name:"e-nav",
  	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
  	data(){
          return {
              selectedItem:null
          }
      },
      config:{
          insert:{
              inner:false,
              before:true,
              after:true
          }
      },
      computed:{
          
      },
      created(){
          console.log("route",this.$route);
      },
      methods:{
          clickItem(item){
              if(item.url){
                  this.$router.push({path:item.url}); 
              }else{
                  item.showChildren = !item.showChildren;
              }

              this.selectedItem = item;
              
          }
      },
      props:{
          direction:{
              type:[String],
              default:"vertical",
              values:[
                  {lab:"垂直",val:"vertical"},
                  {lab:"水平",val:"horizontal"}
              ],
              name:"方向",
              desc:"方向"
          },
          navs:{
              type:[Array],
              default:[
                  
              ],
              name:"导航数据",
              desc:"导航数据"
          }
      }
  }
</script>
<style>
    @import '../../public/styles/var.css';
  	.e-nav{
      color:#fff;
      background-color: #333;
      &.vertical{
          height:100%;
          width:64px;
          
      }
      
      .item{
          
          .item-wrapper{
            text-align:center;
            display:flex;
            flex-direction:column;
            justify-content:center;
            cursor:pointer;
            height: 60px;
            position: relative;
            &:hover{
                background-color:#666;
            }
            &.selected{
              background-color:#666;
            }
            .icon{
                img{
                    width:24px;
                    height:24px;
                }
            }
            .name{
                font-size: 12px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .item-expand-icon{
              position:absolute;
              right:6px;
              top:40px;
              border-left:4px solid transparent;
              border-right:4px solid transparent;
              border-top:6px solid #ddd;
              width:0px;
              height:0px;
              transition:0.3s linear;
              &.action{
                  transform:rotate(180deg);
              }
            }
          }
          
          .item-children{
            transition: all 0.3s ease;
            background-color: #444;
            height: auto;
            overflow: hidden;
            &.hideChildren{
              height: 0px;
              
            }
          }
      }

      .slide-enter-active {
        transition: all .3s ease;
    }
    .slide-leave-active {
      transition: all .3s ease;
    }
}
</style>