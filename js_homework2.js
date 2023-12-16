var age = prompt("Скільки тобі років?");

if (age != NaN && age >= 0) {

    if (age % 10 === 1 && age % 100 !== 11) {
        alert(age + " рік");
    } else if ((age % 10 >= 2 && age % 10 <= 4) && (age % 100 < 10 || age % 100 >= 20)) {
        alert(age + " роки");
    } else {
        alert(age + " років");
    }

} else {
    alert("Будь ласка, введіть додатнє число");
}