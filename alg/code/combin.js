/*
 * @Editors: Liu baitong
 * @Date: 2020-01-16 17:50:59
 * @LastEditTime : 2020-01-16 18:06:50
 * @Description: 电话号码字母组合
 */
const mappings = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

const combin = (str) => {
    let arr = str.split('').map(num => {
        return mappings[num]
    }) 
    // 拼接字母组合
    const joinWord = (words) => {
        let res = []
        let len = words.length
        if(len > 1){ 
            words[len - 1].forEach(w1 => {
                words[len - 2].forEach(w2 => {
                    res.push(`${w1}${w2}`)
                })
            }) 
            // 递归条件：字母数组长度超过2项
            if(words.length > 2){
                words.splice(len - 2, 2, res) 
                res = joinWord(words)
            }
        } 
        return res
    }

    return joinWord(arr)
} 
console.log(combin('23456').length)
module.export = combin