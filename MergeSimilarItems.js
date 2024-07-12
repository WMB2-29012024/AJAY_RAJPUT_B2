const items1 = [[2,9],[24,4],[11,1],[16,3],[1,4],[28,3],[23,8],[3,3]], items2 = [[7,6],[12,7],[9,5],[22,4],[6,3],[17,1]]
var mergeSimilarItems = function (items1, items2) {
    let obj = {};
    const arr = [];
    const outputArray = [];

    for (let i = 0; i < items1.length; i++) {
        const currentElement = items1[i];
        if (obj[currentElement[0]]) {
            obj[currentElement[0]] += currentElement[1];
        }else{
            arr.push(currentElement[0]);
            obj[currentElement[0]] = currentElement[1];
        }
    }

    for (let j = 0; j < items2.length; j++) {
        const currentElement = items2[j];
        if (obj[currentElement[0]]) {
            obj[currentElement[0]] += currentElement[1];
        }else{
            arr.push(currentElement[0]);
            obj[currentElement[0]] = currentElement[1];
        }
    }

    arr.sort((a, b) => a - b);

    for(let m  = 0; m < arr.length; m++){
        outputArray.push([arr[m], obj[arr[m]]])
    }

    return outputArray;
};

console.log(mergeSimilarItems(items1, items2));

