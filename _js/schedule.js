var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

classes = JSON.parse(localStorage.getItem("classes"));
function grad() {
    var grd = ctx.createLinearGradient(0,0,0,600);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"orange");
    ctx.fillStyle = grd;
}
function black() {
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
}

// ctx.fillRect(0,0,400,400);
console.log("bruh");
for (cl in classes) {
    console.log("eh");
    for (day in classes[cl].days) {
        var x0 = 10 + (160 * classes[cl].days[day]);
        var x1 = 140;
        var y0 = classes[cl].start * 50;
        var y1 = (classes[cl].end - classes[cl].start) * 50 ;
        console.log(x0);
        console.log(y0);
        console.log(x1);
        console.log(y1);
        grad();
        ctx.fillRect(x0,y0,x1,y1);
        black();
        ctx.fillText(classes[cl].course, x0+5, y0+20);
    }
}

