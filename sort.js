var arr = [23, 38, 12, 9, 45, 7]

function updateDom (arr) {
    var wrapper = $(".wrapper")
    wrapper.empty()
    arr.forEach(function (item) {
        wrapper.append(`<div class="item" style="height: ${item * 8}px">${item}</div>`)
    })
}

updateDom(arr)

let count = 1

function handleDelay (arr) {
    setTimeout(function () {
        updateDom(arr)
    }, (count++) * 1000)
}

const length = arr.length

for (let i = length - 1; i >  0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        handleDelay([...arr])
      }
    }
}

console.log(arr)
