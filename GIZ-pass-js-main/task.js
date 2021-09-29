// Here I'am importing fs(file system) to the program which gives me the fucnctions to manipulate files
let fs = require("fs");
let row = fs.readFileSync("./GIZ-pass-js-main/data.txt", "utf-8");
let numbers = row.split(",");

// If I set the new array to be equal to the number array they would share the same object(Point at the same object)
// So I used the spread operator to copy the number object to another place on the memory
// I didn't know if you wanted to make an array for the desc numbers but I did anyways
let numbers_sorted = [...numbers];

console.log("Original numbers list: ", numbers);

// The error was in the if statement it was number[i], where it should be number[j]
// And the reason is to compare two near numbers
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {

        if (numbers_sorted[j] > numbers_sorted[j + 1]) {

            let temp = numbers_sorted[j];
            numbers_sorted[j] = numbers_sorted[j + 1];
            numbers_sorted[j + 1] = temp;
        }
    }
}

console.log("numbers list After sorting: ", numbers_sorted);

// I Found that using reverse method is the best desgin and I could do it with the bubble sort but this is way better
let numbers_sorted_desc = [...numbers_sorted].reverse();

console.log("numbers list After Desc sorting: ", numbers_sorted_desc);

// Here I'll be writing to the file
fs.writeFile("./GIZ-pass-js-main/output.txt", numbers_sorted, error => {

    // incase there is an error we'll just write err
    if (error) throw error;
});