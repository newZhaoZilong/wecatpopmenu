//index.js
//获取应用实例
const app = getApp()

Page({
  showMenu(){
    
  },
  onLoad(){
    var b = this.getPromise();
    b
    .then((res)=>{
      console.log("start3");
    })
  },
  getPromise(){
    var p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("start1");
          resolve();
      },2000);
    })
    return p
    .then((res)=>{
      console.log("start2");
    })
    // .then((res)=>{
    //   console.log("start3");
    // })
  }
})
