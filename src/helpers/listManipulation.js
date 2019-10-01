export const localDeleteListItem = (arr, idx) => [
    ...arr.slice(0, idx),
    ...arr.slice(idx + 1),
];

export const localUpdateListItem = (arr, item, idx) => [
    ...arr.slice(0, idx),
    item,
    ...arr.slice(idx + 1),
];

export const localAddItemToList = (arr, item, idx) => {
    let newArr;
    if (idx === 0) { // add to beginning of list
        newArr = [item, ...arr];
    }
    else if (!(!!idx)) { // no idx passed, add to end of list
        newArr = [...arr, item];
    }
    else { // add at index `idx` of list
        newArr = localUpdateListItem(arr, item, idx);
    }
    return newArr;
}
