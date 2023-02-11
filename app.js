const name = prompt("Enter your name: ");

if (name.length < 6) {
  alert("Error: Name must be at least 6 characters long");
} else {
  alert("Hello, " + name);
}