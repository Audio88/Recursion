var tools = ["computer", "books", "text editor"];

function countDown(arr, count) {
	if (count === undefined) {
        count = 0;
    }
   	console.log(arr[count]);
    if (count == arr.length) return "done";
    else return countDown(arr, count += 1);
}
countDown(tools);