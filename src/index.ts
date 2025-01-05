
/**
 * 
 * @param arr 
 * @returns 
 */
function bubbleSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr;
}

/**
 * 
 * @param arr 
 * @returns 
 */

function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp;
    }
    return arr;
}


/**
 * 
 * @param arr 
 */
function insertionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        let j = 0;
        while (arr[j] < arr[index]) {
            j++;
        }
        arr = swap(arr,index,j);
    }
    return arr;
}

/**
 * 
 * @param arr 
 * @param sourceIndex 
 * @param targetIndex 
 * @returns 
 */
function swap(arr: number[], sourceIndex: number, targetIndex: number) {
    let tempArr: number[] = [];
    let sortedArry:number[] = arr.slice(0,targetIndex);
    let remainingArry:number[] = arr.slice(sourceIndex+1,arr.length);
    let i = sourceIndex > targetIndex ? targetIndex : sourceIndex;
    let numberToBeInserted = arr[sourceIndex];

    tempArr.push(numberToBeInserted);

    for(i;i<sourceIndex;i++){
        tempArr.push(arr[i]);
    }


    return (sortedArry.concat(tempArr)).concat(remainingArry);
}


/**
 * 
 * @param arr 
 * @returns 
 */
function binarySearchEven(arr:number[],searchNumber:number,startIndex:number,endIndex:number):number{  

    let upperMiddle = Math.round((startIndex + endIndex) / 2);
    let lowerMiddle = upperMiddle - 1;

    if(arr[lowerMiddle] === searchNumber) {
        return lowerMiddle;
    }

    if(arr[upperMiddle] === searchNumber) {
        return upperMiddle;
    }

    if(searchNumber < arr[lowerMiddle]){
        return binarySearch(arr,searchNumber,startIndex,lowerMiddle)
    } else  {
        return binarySearch(arr,searchNumber,upperMiddle,endIndex)
    }
}


/**
 * 
 * @param arr 
 * @param searchNumber 
 * @param startIndex 
 * @param endIndex 
 * @returns 
 */
function binarySearchOdd(arr:number[],searchNumber:number,startIndex:number,endIndex:number):number{

    let middle = Math.round((startIndex + endIndex)/2)
    
    if(arr[middle] === searchNumber){
        return middle;
    }

    if(searchNumber < arr[middle]) {
        return binarySearch(arr,searchNumber,startIndex,middle-1)
    } else {
        return binarySearch(arr,searchNumber,middle+1,endIndex)
    }
}

/**
 * 
 * @param arr 
 * @param searchNumber 
 * @param startIndex 
 * @param endIndex 
 * @returns 
 */
function binarySearch(arr:number[],searchNumber:number,startIndex:number,endIndex:number){
    bubbleSort(arr);
    if(endIndex % 2 === 1){
        return binarySearchEven(arr,searchNumber,startIndex,endIndex);
    } else {
        return binarySearchOdd(arr,searchNumber,startIndex,endIndex);
    }
}

/**
 * 
 * @param arr 
 * @param searchNumber 
 */
function linearSearch(arr:number[],searchNumber:number){
    arr.forEach((val)=>{
       if(val === searchNumber) { 
            return searchNumber
        }
    })
}


/**
 * 
 * @param arr 
 */
function printToConsole(arr: number[]) {
    let line: string = ""
    arr.forEach((num) => {
        line += num + " "
    })
    console.log(line);
}

/**
 * 
 * @param arr 
 * @returns 
 */
function quickSort(arr: number[]): number[] {
    return [];
}


type Input = {
    arr:number[],
    startIndex:number,
    endIndex:number,
    middleIndex:number
}

/**
 * 
 * @param arr 
 */
function mergeSort(input:Input){  
    if(input.startIndex === input.middleIndex &&  input.middleIndex === input.endIndex) { 
        return
    }

    if(Math.abs(input.startIndex - input.endIndex) === 1) {
        mergeSwap(arr,input.startIndex,input.endIndex)
        console.log(arr);
        return
    }


    console.log(input)

    let leftInput:Input = {
        arr,
        startIndex:0,
        middleIndex:Math.round(input.middleIndex/2),
        endIndex:input.middleIndex
    }

    let rightInput:Input = {
        arr,
        startIndex:input.middleIndex + 1,
        middleIndex:(input.middleIndex + input.arr.length)/2,
        endIndex:arr.length - 1
    }

    mergeSort(leftInput);
    mergeSort(rightInput);

}    


function mergeSwap(arr:number[],index1:number,index2:number){

    let temp;
    if(arr[index1] < arr[index2]){
        temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

}


let arr = [1, 8, 6, 2, 7,9,3]

/**
 * 
 * @param x 
 * @returns 
 */
function reverseNumber(x:number){
    let reversed:string = "";
    let toBeReversedNumber:number = Math.abs(x);

    while(toBeReversedNumber/10 > 0) {
        reversed = reversed + (toBeReversedNumber % 10);
        toBeReversedNumber = Math.trunc(toBeReversedNumber / 10);
    }

    let reversedNumber:number = +reversed;

    return x<0 
            ? reversedNumber  - (2*reversedNumber)
            : reversedNumber
}


console.log(Math.pow(-2,31));

