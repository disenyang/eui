
	
<script>
	import Utils from 'utils';
	export default {
	name:"e-column",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
    data(){
        return {
            
        }
  	},
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    mounted(){
        let column = {
            title: this.title,
            relate: this.relate,
            width: this.width,
            height: this.height,
            align: this.align,
            //className: this.className,
            render: this.$scopedSlots.default,
            selectDisable: this.selectDisable,
            //columns: this.columns,
            //fixed: this.getFixed(),
            multipleSelection: this.multipleSelection,
            //selectDate: this.selectDate,
            //self: this,
            //styleName: this.styleName,
            formatter: this.formatter,
        };
        this.pushColumn(column, this.$parent);
        
    },
    methods: {
        pushColumn(column, parent){
            if(!column) return;
            if(!parent.columns){
                parent.$set(parent, "columns", []);
            }
            // 第一列是多选框，且当前是单选时，过滤掉
            if(parent.columns.length == 0 && column.multipleSelection && parent.singleSelection) return;

            // 当列中间出现多选框时，过滤掉
            if(parent.columns.length > 0 && column.multipleSelection) return;

            parent.columns.push(column);
        },
        click(){
            this.$emit("click");
        }
    },
    render(h){
            // console.log("-------table-column-----------render------", this.title);
        return h("div", this.$slots.default);
    },
    unProps:{
        
    },
    props:{
        title:{
            type:String,
            name:"标题",
            desc:"标题"
        },
        relate:{
            type:String,
            name:"关联字段",
            desc:"关联字段"
        },
        width:{
            type:String,
            name:"宽度",
            desc:"宽度"
        },
        height:{
            type:String,
            name:"高度",
            desc:"高度"
        },
        align:{
            type:String,
            name:"内容位置",
            desc:"内容位置"
        },
        multipleSelection:{
            type:Boolean,
            name:"是否多选",
            desc:"是否多选"
        },
        selectDisable: {
            type:Function
        },
        render: {
            type:Function
        },
        formatter: {
            type: [Array, Object, Function],
            default(){
                return []
            }
        }
    }
}    
</script>
<style>
    @import '../../public/styles/var.css';
	
</style>