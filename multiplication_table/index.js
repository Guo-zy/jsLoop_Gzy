/*## requirement

Create new index.js file, write program output 9*9 times table. The output is as follows：

```
1*1=1
2*1=2 2*2=4
3*1=3 3*2=6 3*3=9
……
9*1=9 9*2=18 9*3=27 …… 9*9=81

```*/
for(let i = 1; i < 10; i ++){
    var res = "";
    for(let j = 1; j <= i; j ++){
        res += i + "*" + j + "=" + (i * j) + " ";
    }
    console.log(res);
}



