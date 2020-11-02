let x = 1; // 전역

function test1(){
    let x = 10;
    prints();
}

function prints(){
    
    console.log(x);
}


test1();
prints();