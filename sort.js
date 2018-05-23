/*
    todo: 将排序过程和显示分离，使用数组保存每次排序后的状态
*/

const speed = 200
let arr = [23, 38, 12, 9, 45, 7]
let count = 1
let arrBackup = arr.slice()

function updateDom (arr) {
    var wrapper = $(".wrapper")
    wrapper.empty()
    arr.forEach(function (item) {
        wrapper.append(`<div class="item" style="height: ${item * 8}px">${item}</div>`)
    })
}


function handleDelayUpdate (arr) {
    setTimeout(function () {
        updateDom(arr)
    }, (count++) * speed)
}

function startSort () {
    for (let i = arr.length - 1; i >  0; i--) {
        for (let j = 0; j < i; j++) {
            showComparation(j, j + 1)
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                handleDelayUpdate([...arr])
            }
        }
    }
    setTimeout(function () {
        window.alert('排序结束！')
    }, (count++) * speed)
}

function showComparation (first, second) {
    showTwoCompareItem (first, second, 'yellow')
    showTwoCompareItem (first, second, '')

    const bigger = arr[first] > arr[second] ? first : second
    showBiggerItem (bigger, 'red')
    showBiggerItem (bigger, '')
}

function showTwoCompareItem (first, second, color) {
    setTimeout(function () {
        setBackgroundColor(first, color)
        setBackgroundColor(second, color)
    }, (count++) * speed)
}

function showBiggerItem (index, color) {
    setTimeout(function () {
        setBackgroundColor(index, color)
    }, (count++) * speed)
}

function setBackgroundColor (i, color) {
    const index = i + 1
    $('.wrapper .item:nth-child(' + index + ')').css('background-color', color)
}

function initEvent () {
    $('.operate .sort').on('click', function () {
        count = 1
        startSort()
    })

    $('.operate .reset').on('click', function () {
        arr = arrBackup.slice()
        updateDom(arr)
    })
}

function main () {
    updateDom(arr)
    initEvent()
}

main()