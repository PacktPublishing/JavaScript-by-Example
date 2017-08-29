/**
 * Uncomment Reject and comment Resolve to see how catch statement Works
 */

function theAsyncCode() {
  return new Promise((resolve, reject) => {
    console.log('The Async Code executed!');
    resolve(5);
    // reject('Error in theAsyncCode');
  });
}

function theAsyncCode2(data) {
  return new Promise((resolve, reject) => {
		console.log('The Async Code 2 executed');
  	resolve(data);
    // reject('Error in theAsyncCode2');
	});
}

function onlyAfterAsync(result) {
	console.log('Now onlyAfterAsync is executing...');
	console.log(`Final result of execution - ${result}`);
}

theAsyncCode()
.then(data => theAsyncCode2(data))
.then(result => onlyAfterAsync(result))
.catch(error => console.error(error));
