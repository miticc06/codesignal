
Cho mảng a chỉ chứa các số từ 1 đến a.length
Tìm số trùng lặp mà lần xuất hiện thứ 2 của nó có chỉ số nhỏ nhất.
Hay, Nếu có nhiều hơn 1 số trùng lặp, hãy trả về số mà lần xuất hiện thứ hai có chỉ số nhỏ hơn lần xuất hiện thứ hai của số khác. Nếu không có các phần tử như vậy, trả về -1.


function firstDuplicate(a) {
    let hash = new Map();
    for (let o of a) {
        if (hash.get(o)===1) {   đã gặp thì là kq
            return o;
        } else {  gặp lần đầu thì đánh dấu 1
            hash.set(o, 1);
        }
    }
    return -1;
}