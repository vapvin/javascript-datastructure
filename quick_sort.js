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

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left >= right){
        return;
    }

    const mid = Math.floor((left + right) / 2);
    const pivot = arr[mid];
   

    const divide = (arr, left, right, pivot) => {
        while(left <= right){
            while(arr[left] < pivot){
                left++;
            }
            while(arr[right] > pivot){
                right--;
            }

            if(left <= right){
                let swap = arr[left];
                arr[left] = arr[right];
                arr[right] = swap;
                left++;
                right--;
            }
        }
        return left;
    }
    const partition = divide(arr, left, right, pivot);;

    quickSort(arr, left, partition - 1);
    quickSort(arr, partition, right);

    return arr;

}

const result = quickSort([3,2,7,5,4,1]);
console.log(result);