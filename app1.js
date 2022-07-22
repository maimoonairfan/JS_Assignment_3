// var firstName = prompt("Enter your firstname")
// var lastName = prompt("Enter your lastname")
// var fullName = firstName + lastName;
// console.log("Hello " + fullName + " Nice to meet you!");

// Question#2
// var phoneModel=prompt("Enter your favourite phone model");
// alert("My favourite phone is" +" "+phoneModel+"\n"+"Length of string is"+phoneModel.length)

// Question#3
// str = "Pakistani"
// i = str.indexOf("n")
// document.write("String: " + str)
// document.write('<br>')
// document.write("Index of 'n': " + i)

// Question#4
// str = "Hello World"
// i = str.lastIndexOf("l")
// document.write("String: " + str)
// document.write('<br>')
// document.write("Index of 'n': " + i)

// Question#5
// str = "Pakistani"
// char = str.charAt(3)
// document.write("String: " + str)
// document.write('<br>')
// document.write("Character at Index 3: " + char)

// Question#6
// var firstName = prompt("Enter your firstname")
// var lastName = prompt("Enter your lastname")
// var fullName = firstName.concat(lastName);
// document.write("Hello " + fullName + " Nice to meet you!");

// Question#7
// var city = "Hyderabad";
// document.write("Before replacement : " + city);
// document.write("<br>");
// var str = city.replace("Hyder","Islam");
// document.write("After replacement : " + str);

// Question#8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newMessage = message.replace(/and/g,"&")
// document.write(message)
// document.write("<br>")
// document.write(newMessage)

// Question#9
// str = '472';
// num = parseInt(str);
// document.write("Value= " + str )
// document.write("<br>")
// document.write("Type: " + typeof(str) )
// document.write("<br>")
// document.write("Value= " + num )
// document.write("<br>")
// document.write("Type: " + typeof(num) )

// Question#10
// str=prompt("Enter a word")
// strN=str.toUpperCase();
// document.write("userInput: "+ str +"<br> Upper case: "+ strN );

// Question#11
// var input=prompt("Enter input");
// var result=input.toUpperCase();
// console.log(result)

// var input=prompt("Enter input");
// var result=input[0].charAt();
// console.log(result)

// Question#12
// var num = 35.36;
// var str = num.toString().replace(".","");
// document.write("Number: " + num + "<br> String: "+ str) 

// Question#13
// var str = prompt ("enter username")
// for (i=0;i<str.length;i++){
//     console.log(str.charCodeAt(i))
//     if ( str.charCodeAt(i) == 33 || str.charCodeAt(i) == 46 ||str.charCodeAt(i) == 44 || str.charCodeAt(i) == 64 )
//     {
//         alert("don't use !.,@")
//         console.log("if")
//         break;
//     }
    
// Question#14
// A = ["cake" , "apple pie" , "cookie" , "chips", "patties"]
// var str= prompt("enter the item to be searched")
// strlowcase=str.toLowerCase();
// flag=0;
// for (i=0;i<str.length;i++)
// {
//    if(A[i] == strlowcase){
//        alert(str + " is found at index "+ i + " at our bakery.")
//        flag=1;
//    }   
// }
// if( flag == 0)
// {
//     alert("sorry "+ str + " is not available in our bakery ")
// }

// Question#15
// var pswd= prompt("enter password")
// if (pswd.length<6 )
// {
//     alert("password must be atleast 6 characters long <br> please enter a valid password")
 
// }
// document.write(pswd)
// for (i=0;i<pswd.length;i++)
// {
//     if (i===0 &&( pswd.charCodeAt(i) >= 48 )&& (pswd.charCodeAt(i) <= 57) ){
//         // console.log(pswd.charCodeAt(i) >= 48)
//         // console.log(pswd.charCodeAt(i) <= 57)
//         // console.log(i)
// alert("password cant start with a number <br> please enter a valid password")
//     }
//    else  if(pswd.charCodeAt(i) < 48 ||( pswd.charCodeAt(i) > 57 && pswd.charCodeAt(i) < 65 ) ||( pswd.charCodeAt(i) > 90 && pswd.charCodeAt(i) < 97 ) || pswd.charCodeAt(i) >122 )
//     {
//         // console.log(pswd.charCodeAt(i) < 48 )
//         // console.log(pswd.charCodeAt(i) > 57 && pswd.charCodeAt(i) < 65 )
//         // console.log(pswd.charCodeAt(i) > 90 )
//         // console.log(pswd.charAt(i))
//         alert("password should contain only alphabets and numbers <br> please enter a valid password")
//     }
          
// }

// Question#16
// var university = 'University of Karachi';
// var myarr=university.split("");
// for(i=0;i<myarr.length;i++){
//     document.write(myarr[i]+"<br>")
// }

// Question#17
// var str=prompt("enter any word")
// document.write("user input: "+str)
// lastCh= str.charAt(str.length-1)
// document.write("<br>last character: "+lastCh)

// Question#18
// var str= 'The quick brown fox jumps over the lazy dog'
// var arr=str.split(" ")
// var count=0
// for(i=0;i<arr.length-1;i++){
//     if(arr[i]=='the' || arr[i]=="The"){
//         count+=1;
//     }

// }
// alert("the occurs "+count+" times in the sentence")

