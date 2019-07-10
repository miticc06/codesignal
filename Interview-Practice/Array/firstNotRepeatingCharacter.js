/*
cho chuỗi kí tự, tìm và trả về trường hợp đầu tiên, của một ký tự không lặp lại trong đó. Nếu không có return _
*/
function firstNotRepeatingCharacter(s) {
    let hash = new Map();
    for (let c of s) {
        if (!hash.has(c)) { // chưa có thì count 1
            hash.set(c, 1);
        } else {
            hash.set(c, hash.get(c)+1);
        }
    }
    for (let c of hash) {
        if (c[1] === 1) {
            return c[0];
        }
    }
    return '_';
}