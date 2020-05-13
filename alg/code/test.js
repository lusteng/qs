/**
 * @description: 节流 
 * @param {fn} 回调函数
 * @param {timer} 节流频率
 * @param {bool} 是否立即执行
 * @return: null
 */
function throttle(fn, timer, bool){
    let  sw = +new Date()
    let _bool = bool 
    let _this = this 

    return function(){
        let now = + new Date()
        if(now - sw > timer){
            fn.call(_this)
            sw = now
        } 
        if(_bool){
            fn.call(_this)
            _bool = false
        }

    }
}

// const cb = () => {
//     console.log('执行了');
// }

// let thro = throttle(cb, 1000, true)

// setInterval(() => {
//     thro()
// }, 300)


function debounce(fn, timer, bool){
    let  sw = +new Date()
    let _bool = bool 
    let _this = this 

    return function(){
        let now = + new Date()
        if(now - sw > timer){
            fn.call(_this)
            sw = now
        } else{
            sw = now
        }
        if(_bool){
            fn.call(_this)
            _bool = false
        }

    }
}

const cb = () => {
    console.log('执行了');
}

let thro = debounce(cb, 1000, true)

setInterval(() => {
    thro()
}, 300)