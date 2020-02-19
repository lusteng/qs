let arr = [1,1,3333, 3,3444,4,45,33]

const quickSort = arr => {
    // 递归边界条件
    if(arr.length <= 1){ 
        return arr
    }
    let leftArr = []
    let rightArr = []
    // 任意选取一个基准元素
    let base = arr.splice(0, 1)[0] 
    arr.forEach((ele, i) => {
        // 将数组元素按基准元素大小分成两个数组
        ele > base ? rightArr.push(ele) : leftArr.push(ele)
    });
    // 递归排序
    return [...quickSort(leftArr), base, ...quickSort(rightArr)]
} 
