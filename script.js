alert('Hope you enjoy')
function init()
{
    const out=document.getElementById("output");
    const chars=['\\','|','/','—'];
    let index=0;
    let count=0;
    function animate(){
       out.innerHTML=("▫️").repeat((count/10)%30)+chars[index];
       index++;
       count++;
       count%=100;
       index%=4;
       setTimeout(animate,100);
    }
    setTimeout(animate,100);
}