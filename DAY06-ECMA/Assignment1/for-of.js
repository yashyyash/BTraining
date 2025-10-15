const offices = ["Mumbai", "Pune", "LuckNow", "Bhuranpur"];
for (let city of offices) {
    if (city === "Mumbai") {
        continue;
    } else {
        console.log(city);
    }
}

const Result = offices[Symbol.iterator]();

    console.log(Result.next());
    console.log(Result.next());
    console.log(Result.next());
    console.log(Result.next());
    console.log(Result.next());


