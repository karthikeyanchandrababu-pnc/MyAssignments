function studentGrade(mark) {

    switch (true) {
        case (mark >= 90):
            console.log("Grade A");
            break;
        case (mark >= 80):
            console.log("Grade B");
            break;
        case (mark >= 70):
            console.log("Grade C");
            break;
        case (mark >= 60):
            console.log("Grade D");
            break;
        default:
            console.log("Grade F");
    }
}

studentGrade(85);