let a = $(".a");
let b = $(".b");
let c = $(".c");
let d = $(".d");
let e = $(".e");
let f = $(".f");
let g = $(".g");
let h = $(".h");
let di = $("div");
// TweenLite.to(one, 1, { left: "100px" });
$(".btn").on("click", function() {
  // one.css("background", "red");
  // TweenLite.to("#rect",1,{top:"400px",scale:2})
});
new Promise(function(resolve, reject) {
  TweenLite.to(a, 4, { scale: 5, opacity: 1 });
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then(function(r) {
    return new Promise(function(resolve, reject) {
      TweenLite.to(b, 4, { scale: 7, opacity: 1 });
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(function(r) {
      return new Promise(function(resolve, reject) {
        TweenLite.to(c, 4, { scale: 3, opacity: 1 });
        setTimeout(() => {
          resolve();
        }, 3000);
      }).then(function(r) {
        TweenLite.to(d, 4, { scale: 6, opacity: 1 });
      });
    });
  })

  .catch(function(reason) {});
