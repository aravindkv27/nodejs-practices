// client.js
const net = require("net"); // import net
const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
}); // this will be important later

let client = net.connect(5000, () => {
    console.log("connected!");
});

function newProblem() {    
    let op1 = "";
  	let op2 = "";
  	readline.question("First number: ", function (num)  {
    	  if (num == "q") {
    	      client.end();
    	  }
		    op1 = num;
    readline.question("Second number: ", (num) => {
            if (num == "q") {
                    client.end();
                }
            op2 = num;
    client.write("ADD " + op1 + " " + op2);
          });
    });
}

client.on("data", data => {
  console.log(data.toString()); // print out data
  newProblem(); // ask for more input
});

client.on("end", () => { // close everything when done
  console.log("disconnected");
  readline.close();
})

console.log("enter q to quit");
newProblem();
