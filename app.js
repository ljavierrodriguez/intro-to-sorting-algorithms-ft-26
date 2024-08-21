let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey"]
let estudiantes = [
    { id: 100, name: 'Hugo' }, 
    { id: 70, name: 'Paco' }, 
    { id: 4, name: 'Luis' }
]

let numbers = [24, 19, 54, 33, 12, 90, 1, 76, 20, 5]
function bubbleSort(arr){
    let size = arr.length
    for(let i = 0; i < size - 1; i++){
        for(let j = 0; j < size - 1; j++){
            if(arr[j] < arr[j + 1]){
                const temp = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

function selectionSort(arr){
    let size = arr.length

    for(let i = 0; i < size; i++){
        let min = i;
        for(let j = i + 1; j < size; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min != i){
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

}

function quickSort(arr){
    if (arr.length <= 1) return arr

    const pivot = arr[0]
    const left = []
    const right = []

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

let respuesta = bubbleSort([...nombres])
console.log(nombres)
console.log(respuesta)


let respuestaQS = quickSort([...numbers])
console.log(numbers)
console.log(respuestaQS)


console.log(numbers.sort((a, b) => b - a))