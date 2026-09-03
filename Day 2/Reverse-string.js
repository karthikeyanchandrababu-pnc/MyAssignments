function ReversestringAndCheckPalindrome(str) {
    let reverse = "malayalam";

    // Reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    console.log("Original String:", str);
    console.log("Reversed String:", reverse);

    // Check palindrome
    if (str === reverse) {
        console.log("It is a Palindrome");
    } else {
        console.log("It is not a Palindrome");
    }
}

ReversestringAndCheckPalindrome("malayalam");