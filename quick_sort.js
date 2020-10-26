const quickSortStable = arr => {
    if(arr.length < 2){
        return arr;
    }

    const pivot = [arr[0]];
    const left = [];
    const right = [];

    arr.forEach((item, index) => {
        if(index >= 1){
            if(item < pivot){
                left.push(item);
            }else if(item > pivot){
                right.push(item);
            } else {
                pivot.push(item);
            }
        }
    });
        
    
    // console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
    return quickSortStable(left).concat(pivot, quickSortStable(right));
}

const sortArray = quickSortStable([9,5,4,2,8,6,1,3,7]);
console.log(sortArray);

