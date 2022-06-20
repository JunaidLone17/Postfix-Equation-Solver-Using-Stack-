class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  push(element) {
    // push element into the items
    this.items.push(element);
  }
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
    }
    answer() {
        return this.items.pop()
    }
}
var stack = new Stack();
var search = document.getElementById("search");
search.addEventListener("click", () => {
    var string = document.getElementById("searchterm").value;
    for (var i = 0; i < string.length; i++)
{
    if ((string[i] === "^") || (string[i] === "*") || (string[i] === "+") || (string[i] === "/") || (string[i] === "-")) {
        a = stack.pop()
        b = stack.pop()
        if (string[i] === "^") {
            ans = b ** a
            stack.push(ans)
        }
        if (string[i] === "*")
        { 
            ans = b*a
            stack.push(ans)
        }
        if (string[i] === "+") { 
            ans = b + a
            stack.push(ans)
        }
        if (string[i] === "/") {
            ans = b / a
            stack.push(ans)
         }
        if (string[i] === "-") { 
            ans = b - 1
            stack.push(ans)
        }
    } else {
        stack.push(parseInt(string[i]));
    }
}
var x = stack.answer()    
document.getElementById("Result").innerText ="Answer: "+ x;
})

