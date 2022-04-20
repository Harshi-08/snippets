const employee = {
firstName: "Harshita",
lastName:"Saxena"
};

function print(message1, message2){
    console.log("Hello -- "+this.firstName+" "+this.lastName+" , "+message1);
    console.log("message: "+message2)

}

print.call(employee,"How are you?","Where do you live");
print.apply(employee,["How are you?","Where do you live"]);

const employee2 = {
    firstName: "Tarun",
    lastName:"Bansal"
    };

var newPrint = print.bind(employee2); //returns a new function
newPrint("What's up","This is a new function");