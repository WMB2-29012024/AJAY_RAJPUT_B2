function every4thElementFromLastIndex(arr){
    let store=[];
    for(let i=(arr.length-1); i>=0;i-=4){
        store.push(arr[i]);
    
    }
    return store
    }
    
    const numArr = every4thElementFromLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    console.log(numArr);
    