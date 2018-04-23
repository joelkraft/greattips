export default {
    sort: (arr, key, asc) =>
        arr.sort((a,b) =>
        asc ? (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0):
                                (a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0))
}