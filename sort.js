var arr = [23, 38, 12, 9, 45, 7]

var wrapper = $(".wrapper")

arr.forEach(function (item) {
    wrapper.append(`<div class="item" style="height: ${item * 8}px">${item}</div>`)
})
