function StringReverse(str) {
    let reverse = "";
    

    // Reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    
 // Check palindrome  
     if (str === reverse) {
    console.log("It is a Palindrome");
} 
else {
    console.log("It is not a Palindrome");
}
}
StringReverse("malayalam");
StringReverse("playwright");