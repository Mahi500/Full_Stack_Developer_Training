
function reversal(){
    var num=653;
    var s=0;
    var n;
    while(num>0)
    {
        n=num%10;
        
        s=s*10+n;
        
        num=Math.floor(num/10);
    }
    
    document.write(s);
    
}

function palindrome(){
    var num=555;
    var s=0;
    var n;
    while(num>0)
    {
        n=num%10;
        s=s*10+n;
        num=Math.floor(num/10);
    }

    if(s===555)

    {

        document.write("palindrome");
    }
    else
    {
        document.write("Not a palindrome");
    }

}

function sumdigits(){
    var num=324;
    var sum=0;
    var n;
    while(num>0)
    {
        n=num%10;
        sum=sum+n;
        num=Math.floor(num/10);
    }

    document.write(sum);
}