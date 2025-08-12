function solution(order) {
    const list = ['3', '6', '9'];
    return Array.from(order.toString()).filter(v => list.includes(v)).length;
}