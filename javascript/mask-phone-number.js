// In this example, masking the number except showing first and last 2 digits.
//557878767 -> 55*****67
var str = "557878767";
str = str.replace(/(?<=\d\d)\d(?=\d{2})/g, "*");
console.log(str);

// In this example, masking the number except showing last 2 digits as normally shown in different website for password recovery.
//557878767 -> 55*****67
var str = "557878767";
str = str.replace(/\d(?=\d{4})/g, "*");
console.log(str);
