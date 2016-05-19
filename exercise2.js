var tools = ["computer", "books", "text editor"];

function countDown(arr, count) {
	if (count === undefined) {
        count = 0;
    }
    if (count == arr.length) return "done";
    else {
    console.log(arr[count]);
    return countDown(arr, count += 1);
    }
}
countDown(tools);
