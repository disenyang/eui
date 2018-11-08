
	
<script>
	import Utils from 'utils';
	export default {
	name:"e-table-cell",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
    props: {
        column: {
            type: Object
        },
        line: {
            type: Object,
        },
        row: Number,
        col: Number,
        selectKey: String, // 选择使用的数据
        emptyDefault: String
    },
    methods: {
        dictionaryShow(){
            if(!this.column.relate) return '';
            let value = this.line[this.column.relate];

            let fm = this.column.formatter;
    
            let fmValue;
            
            

            switch(Object.prototype.toString.call(fm)){
                case '[object Function]':
                    fmValue = fm({line: this.line, column: this.column, row: this.row, col: this.col});
                    break;
                case '[object Array]':
                    if(fm.length < 1){
                        fmValue = value;
                        break;
                    }

                    if(Object.prototype.toString.call(fm[0]) != '[object Object]') {

                        fmValue = fm[value];
                    }else{
                        let temp = fm.find(item => item.value === value);

                        fmValue = temp ? temp.label: value;
                    }
                    break;
                default:
                    let label = fm[value];

                    if(Object.prototype.toString.call(label) == '[object Object]'){
                        label = label.label;
                    }

                    fmValue = label == undefined ? value : label;
            }
            return fmValue == undefined || fmValue === '' ? this.emptyDefault : fmValue;
        }
    },
    render(h){
        if(this.column){
            if(this.column.multipleSelection){ // 多选
                return (
                    <div class="e-table-cell" style="text-align: center;">
                        <e-checkbox 
                            value={ this.selectKey ? this.line[this.selectKey] : this.row} 
                            checkValue={true}
                            uncheckValue={false}
                            disabled={ this.column.selectDisable ? this.column.selectDisable(this.line, this.row, this.column, this.col) : false }></e-checkbox>
                    </div>
                );
            }else if(!this.column.render){ // 普通列
               
                return (
                    <div class="e-table-cell">{ this.dictionaryShow() }</div>
                );
            }else if(this.column.render){ // 自定义列
                return (
                    <div class="e-table-cell">{ this.column.render({line: this.line, column: this.column, row: this.row, col: this.col}) }</div>
                );
            }
        }
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-table-cell{
}
</style>