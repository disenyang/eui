
// import Vue from 'Vue';

import { prefix } from 'utils';

import routers from 'business/router';

export default function(Vue){
  var routerMap = [
    ...routers(Vue)
  ];

  return routerMap;
}
