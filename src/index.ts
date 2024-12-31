
/**
 * 
 * @param arr 
 * @returns 
 */
function bubbleSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
        printToConsole(arr)
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
function binarySearch(arr:number[],searchNumber:number,startIndex:number,endIndex:number):number{

    if(arr.length % 2 === 0){
        arr[(arr.length % 2) - 1] < searchNumber ? binarySearch(arr,searchNumber,0,(arr.length % 2) - 1) : binarySearch(arr,searchNumber,(arr.length % 2),(arr.length)) 
    } else {
      
    }
    
           
    return 0;
}



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




let arr = [1, 8, 6, 2, 7]

printToConsole(insertionSort(arr));


