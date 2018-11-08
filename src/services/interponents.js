let install = Vue => {

  if (install.installed) return;

  Vue.http.interceptors.push(function(request, next) {
    // ...
    // 请求发送前的处理逻辑
    // ...
    // ...
            // 请求发送前的处理逻辑
            // ...

            next(function(response) {
              // ...
              // 请求发送返回的处理逻辑
              // ...

              if(!response){
                this.eMessage({
                  type: "error", 
                  message: "当前请求存在问题", 
                });
                return response;
              }
              switch(parseInt(response.status)){
                case -1:
                case 404:
                  this.eMessage({
                    type: "error", 
                    message: "当前网络不可用，请重试", 
                  });
                  response && (response.ok = false);
                  break;
                case 200:
                  let json = response.data;

                  if (json) {
                    var errno = json.meta?json.meta.errno:json.code;
                    var msg = json.meta?json.meta.msg:json.msg;
                    response.data.errno = errno;
                    response.data.msg = msg;
                    if (response.data.result) {
                      if (response.data.result.current_page) {
                        response.data.currentPage = response.data.result.current_page;
                      }

                      if (response.data.result.page_size) {
                        response.data.pageSize = response.data.result.page_size;
                      }

                      if (response.data.result.page) {
                        if (response.data.result.page.totalRecord) {
                          response.data.result.page.total = response.data.result.page.totalRecord;
                        }
                      }

                    }

                    if(Number(errno) === 200 || Number(errno) === 0){

                    }else if(/^d{4}401$/.test(errno)){ // TODO登录失效

                      let closehandler = (function(_this){
                        return function(){ 

                          window.top.location = "http://java1.rongyi.com/bsoms/user/login";
                          _this.$router.push({ name: 'login'});
                        };
                      })(this);

                      Vue.prototype.eMessage({
                        type: "error", 
                        message: msg, 
                        closehandler: closehandler
                      });

                      response.ok = false;
                    }else{
                      Vue.prototype.eMessage({type: "error", message: msg});
                      response.ok = false;
                    }
                  }

                  break;
                default: 
                  Vue.prototype.eMessage({
                    type: "error", 
                    message: "当前网络存在问题【"+response.statusText+"】"
                  });
                  response && (response.ok = false);
              }

              Vue.prototype.eLoading.hide();
              // ...
              // 请求发送后的处理逻辑
              // ...
              // 根据请求的状态，response参数会返回给successCallback或errorCallback
              return response;
        });;
  });

  install.installed = true;
};

module.exports = {
  install
};