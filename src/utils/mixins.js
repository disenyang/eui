
export default {
    methods:{
       domOn(element, event, handler){
         if (document.addEventListener) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
         }else{
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
         }
       },
       domOff(element, event, handler){
         if (document.addEventListener) {
            if (element && event && handler) {
                element.removeEventListener(event, handler, false);
            }
         }else{
            if (element && event && handler) {
                element.detachEvent('on' + event, handler);
            }
         }
       }  
    }
};
