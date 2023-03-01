const b=[];

const r=[]; 
for(let i=0;i<=5;i++)
{
    
    r[i]=parseInt(Math.random()*55);
    
}


for(let i=0;i<=5;i++)
{
    
    var a=prompt("Nhap so may man cua ban!");
    b[i]=parseInt(a);
    while(isNaN(a) || a>55|| a<0)
    {
        a=prompt("Nhap so may man cua ban!");
    b[i]=parseInt(a);
    }
    
}
var count=0;
for(let i=0;i<=5;i++)
{
    for(let j=0;j<=5;j++)
    {
        if(r[j]==b[i])
        {
            count++;
        }
    }
}

console.log(r);
console.log(b);
console.log(count);



if (count==3)
{
    alert("Ban trung 200.000 vnd!");
  
}  
else if(count==4)
    {
        alert("Ban trung 1.700.000 vnd!");
    }
    else if(count==5)
    {
        alert("Ban trung 82.500.000 vnd!")
    }
    else if(count==4)
    {
        alert("Ban trung 30.000.000.000 vnd!");
    }
    else
    {
        alert("chúc bạn may mắn lần sau");
    }