var cl=console.log;

 //1How many characters are in the string "JavaScript"?
 var r1=str=>str.length;
 cl(r1("JavaScript"));
 var str1=r1("JavaScript")
 var p1=document.getElementById("info1").innerHTML=str1;

 
 //2 What letter is at position 4 in "OpenAI"?
  var r2=str=>str.charAt(4);
 cl(r2("OpenAI"));
 var str2=r2("OpenAI")
  var p2=document.getElementById("info2").innerHTML=str2;

 
 //3 Does "Hello world" begin with"Hello"?
  var r3=str=>str.startsWith("Hello");
 cl(r3("Hello world"));
 var str3=r3("Hello world")
 var p3=document.getElementById("info3").innerHTML=str3;

 //4 Convert the string "hello" entirely to uppercase letters. What is the result?
 var r4=str=>str.toUpperCase();
 cl(r4("hello"));
 var str4=r4("hello")
 var p4=document.getElementById("info4").innerHTML=str4;

 
 //5 Remove any spaces before or after " Hello ". What remains?
 var r5=str=>str.trim();
 cl(r5(" hello "));
 var str5=r5(" hello ")
 var p5=document.getElementById("info5").innerHTML=str5;

 
 //6 Find the position of the first "a" in "banana". What is the index?
 var r6=str=>str.indexOf("a");
 cl(r6("banana"));
 var str6=r6("banana")
 var p6=document.getElementById("info6").innerHTML=str6;

 
 //7 Check if "JavaScript" contains the word "Script". Is it true or false?
  var r7=str=>(str.includes("Script"))
 var str7=r7("JavaScript")
 var p7=document.getElementById("info7").innerHTML=str7;

 
 
 //8 Repeat the word "repeat" three times in a row without spaces. What do you get?
  var r8=str=>str.repeat(3);
 cl(r8("repeat"));
 var str8=r8("repeat")
 var p8=document.getElementById("info8").innerHTML=str8;

 
 //9 What letter is at the third position in "apple"?
  var r9=str=>str.charAt(2);
 cl(r9("apple"));
 var str9=r9("apple")
 var p9=document.getElementById("info9").innerHTML=str9;

 //10 Change all letters in "Bat" to lowercase. What is the output?
 var r10=str=>str.toLowerCase();
 cl(r10("Bat"));
 var str10=r10("Bat")
 var p10=document.getElementById("info10").innerHTML=str10;

 
//11 Break "apple,banana,grape" into parts wherever there is a comma. What array do you get?
var r11=str=>str.split(",");
 cl(r11("apple,banana,grape"));
 var str11=r11("apple,banana,grape")
 var p11=document.getElementById("info11").innerHTML=str11;


 //12 Remove spaces from either end of " JavaScript " and then change all letters to lowercase.
 var r15=" JavaScript ";
 var arr1=r15.trimEnd();
 let tr=arr1.toLowerCase();
 cl(arr1);
  var p12=document.getElementById("info12").innerHTML=arr1;

 
//13 What is the result?
 //Find where "ss" first appears in "Mississippi". What is the position?
 var mis="Mississippi";
 var mis1=mis.indexOf("ss",4);
 cl(mis1);
  var p13=document.getElementById("info13").innerHTML=mis1;

 
 
 //14 Extract letters from position 3 up to but not including position 6 in "Programming". Whichletters?
  var strr1="Programming";
 var strr2=strr1.substring(3,5)+strr1.substring(7);
  cl(strr2);
   var p14=document.getElementById("info14").innerHTML=strr2;

 
 //15 Does "hello world" begin with "wor"? Answer true or false.
 var st1="hello world";
 var str2=st1.startsWith("wor");
  cl(str2);
   var p15=document.getElementById("info15").innerHTML=str2;


 
 //16 What is the last letter in "ChatGPT"?
 var st3="ChatGPT";
 var str4=st3.charAt(st3.length-1);
  cl(str4);
 var p16=document.getElementById("info16").innerHTML=str4;

 
 //17Replace "World" with "JavaScript" in "Hello World". What does the sentence become?
 var st6="hello world";
 var str5=st6.replace("world","JavaScript");
  cl(str5);
   var p17=document.getElementById("info17").innerHTML=str5;
 
//18 Add zeroes to the start of "12345" until the string is 8 characters long. What is the resulting string?
var st7="12345";
 var str8=`000${st7}`;
 cl(str8.length);
  cl(str8);
   var p18=document.getElementById("info18").innerHTML=str8;



// 19What is the numerical character code of the first letter in "javaScript is fun"?
var ch="avaScript is fun";
 var ch1=ch.charCodeAt(0);
  cl(ch1);
   var p19=document.getElementById("info19").innerHTML=ch1;

  

//20  Extract the letters starting from position 1 up to position 3 in "OpenAI". Which letters?
var r20=(str)=>spli=str.substring(1,4);
cl(r20("OpenAI"));
 var char1=r20("OpenAI");
  var p20=document.getElementById("info20").innerHTML=char1;

 
 //21 Split "Sun-Mon-Tue" at the dashes, then choose the second item in the list. What is it?
 var sp="Sun-Mon-Tue";
 var sp2=sp.split("-");
var char2=(sp2,sp2[1]);
  var p21=document.getElementById("info21").innerHTML=char2;

 
 
 //22 Count how many words there are in "Hello from the other side" when splitting by spaces.How many?
  var spl="Hello from the other side";
 var spl2=spl.split(" ");
   cl(spl2);
var char3=(spl2.length);
  var p22=document.getElementById("info22").innerHTML=char3;

 
 //23 Remove spaces before and after " test string " and measure how long the result is. What
 //length?
 var r8=(str)=>{
	 let spli=str.trim(1,4);
	 return spli.length;
 }
 var char4=r8(" test string ");
   var p23=document.getElementById("info23").innerHTML=char4;

 
 
 
 //24 Find the last position of the letter "a" in "banana". What is it?
   var r9=(str)=>{
	 let spli=str.lastIndexOf("a");
	 return spli;
 }
 var char5=(r9("banana"));
   var p24=document.getElementById("info24").innerHTML=char5;

 
 
 
 //25 Does "abc123" include the exact substring "ABC"? Yes or no?*/
 var sub=(str)=>{
	 if(str.includes("ABC"))
	 {
         var sub2="yes";
 }
 else
 {
	 sub2="no";
 }
 return sub2;
 }
var char6=sub("abc123");
   var p25=document.getElementById("info25").innerHTML=char6;

 
 
//26 Extract the letters between position 2 and 4 in the string "abcdef". Which letters?
var r26=(str)=>{
	 let spli=str.substring(3,4);
	 return spli;
 }
 var char7=r26("abcdef");
    var p26=document.getElementById("info26").innerHTML=char7;

 

 //27 Change all spaces in "a b c" to underscores. What does the string become?
 var r5=(str)=>{
	 let spli=str.replaceAll(" ","_");
	 return spli;
 }
 char7=(r5("a b c"));
    var p27=document.getElementById("info27").innerHTML=char7;

 
	 
 
 //28 Change all letters in "Amazing!" to lowercase. What is the output?
 var r28=str=>str.toLowerCase();
 cl(r28("Amazing!"));
 var str28=r28("Amazing!")
 var p28=document.getElementById("info28").innerHTML=str28;

 
 //29 Break "foo|bar|baz" apart at the vertical bars. How many parts do you get?
 var r29=str=>{
	 let str29=str.split("|");
 return str29.length;
 }
 var st29=r29("foo|bar|baz")
 var p29=document.getElementById("info29").innerHTML=st29;

 
 
 //30 Join "Hello", " " and "World" together into one string. What is it?
 let st28="Hello";
 let str30="world";
 let st30=`${st28} ${str30}` ;
  var p30=document.getElementById("info30").innerHTML=st30;

 //31 Change "quick" to "slow" within the string "quick brown fox". What is the new string?
 var r31=str=>str.replace("quick","slow");
 var str31=r31("quick brown fox")
 var p31=document.getElementById("info31").innerHTML=str31;

 
 //32 Find how many times the letter "a" occurs in "abracadabra". How many times?
  /*var r32=str=>str.Count("a");
 var str32=r32("abracadabra")
 var p32=document.getElementById("info32").innerHTML=str32;*/

 
//33 Add stars to "Cat" to increase its length to 5 characters total. What does it look like?
 var r33=str=>{
	stt=`**${str}`;
	 return stt;
 }
 var str33=r33("Cat")
 var p33=document.getElementById("info33").innerHTML=str33;



 //34 Count the total number of letters in "supercalifragilisticexpialidocious". What number?
  var r34=str=>str.length;
 var str34=r34("supercalifragilisticexpialidocious")
 var p34=document.getElementById("info34").innerHTML=str34;

 
 
 //35 Find the middle letter in "abcde". Which one?
 var r35=str=>
 {
	 let st=str.length/2;
	 let stt=str.charAt(st);
	 return stt;
 }
 var str35=r35("abcde")
 var p35=document.getElementById("info35").innerHTML=str35;

 
//36 Does "Mocha" end with "cha"? Answer true or false.
 var r36=str=>str.endsWith("cha");
 var str36=r36("Mocha")
 var p36=document.getElementById("info36").innerHTML=str36;


//37 Take the last two characters from " var 1234 5678
 var r37=str=>{
	 let st=str.substring(7);
	 return st;
 }
 var str37=r37("1234 5678")
 var p37=document.getElementById("info37").innerHTML=str37;

// 38 What is the length of an empty string ""?
 var r38=str=>str.length;
 var str38=r38("")
 var p38=document.getElementById("info38").innerHTML=str38;


 //39 Remove spaces only from the start of the string " spaced ". What remains?
  var r40=str=>str.trimStart();
 var str40=r40(" spaced ");
 var p40=document.getElementById("info40").innerHTML=str40;

 
 //40 In the string "appleapple", what letter is at position 3?
 var r41=str=>str.charAt(3);
 var str41=r41("appleapple");
 var p41=document.getElementById("info41").innerHTML=str41;

 
 //41 Find how many "a" characters are in "abracadabra". Number?
 var r42=(str,cha)=>{
	 let count=0;
	 for(let i=0;i<str.length;i++){
		 if(str[i]===cha);
         count++;
	 }
 return count++;
 }
 var str42=r42("abracadabra","a");
 var p42=document.getElementById("info42").innerHTML=str42;
 
 
 
 
//42 Convert "LÃ¶rem Ãpsum" to a form that separates letters and accents. How might it look?


 //43 Replace number sequences in "hello123bye" with a "#". What is the result?
 var r43=str=>str.replace("123","###");
 var str43=r43("hello123bye")
 var p43=document.getElementById("info43").innerHTML=str43;

 
//44 What is the code number for the emoji at the start of "
// ??
 //face"?
 var cal=str=>str.charCodeAt("??");
 var imoji=cal("?? face")
 var im=document.getElementById("info44").innerHTML=imoji;

 
 //45 Simplify "one two two three three three" by removing consecutive duplicate words. Result?
  var r44=str=>{
	  let s= str.split(" ");
	  let unique=new Set(s);
	  let unique1=[...unique];
	  return unique1.join(' ');
  }
 var str44=r44("one two two three three three")
 var p44=document.getElementById("info90").innerHTML=str44;

 
 //46 What is the length after trimming spaces and non-breaking spaces in " \u00A0Hi\u00A0 "?
var r45=str=>
 {
	let at=str.trim();
	 let at2=at.replace("/u00/g"," ");
	 return cl(at2.length);
 }
 var str45=r45(" \u00A0Hi\u00A0 ")
 var p45=document.getElementById("info45").innerHTML=str45;

 
//47 Convert "CafÃ©" to English letters only by removing accents. Result?

 //48 Replace all forms of "the" with "a" in "The cat sat on the mat". Result?
 var r47=str=>str.replace("the","a");
 var str47=r47("The cat sat on the mat")
 var p47=document.getElementById("info47").innerHTML=str47;

 
 
//49 Separate "foo,bar,baz" at commas. What list results?
var r48=str=>str.split(",");
 var str48=r48("foo,bar,baz")
 var p48=document.getElementById("info48").innerHTML=str48;


 //50 Take the last 3 letters of "OpenAI". What are they?
 var r49=str=>str.substring(3);
 var str49=r49("OpenAI")
 var p49=document.getElementById("info49").innerHTML=str49;

 //51 Reverse the parts in "a-b-c-d" separated by dashes and join them with underscores.
 //Result?
 var r50=str=>{
	 st=str.split("-");
	 s1t=st.reverse();
	 st2=s1t.join("_");
	 return st2;
 }
 var str50=r50("a-b-c-d")
 var p50=document.getElementById("info50").innerHTML=str50;

 
//52 Reverse the letters of "abba". What is the result?
var r51=str=>{
	 st=str.split();
	 s1t=st.reverse();
	 return s1t;
 }
 var str51=r51("abba")
 var p51=document.getElementById("info51").innerHTML=str51;

 //53 Remove commas from "12,345.67". What remains?
 var r52=str=>str.replace(/,/,"");
 var str52=r52("12,345.67")
 var p52=document.getElementById("info52").innerHTML=str52;

 
 //54 Add 'x' characters to the start of " string " to reach a length of 12. What is the new string?
 var r53=str=>{
	stt=`XXXXX${str}`;
	 return stt;
 }
 var str53=r53(" string ")
 var p53=document.getElementById("info53").innerHTML=str53;

 
 //55 How many letters are in "Rocket" including the rocket emoji?
 var r54=str=>str.length;
 var str54=r54("Rocket")
 var p54=document.getElementById("info54").innerHTML=str54;

 
 
 //56 Repeat the word "repeat" zero times. What is the output?
  var r55=str=>str.repeat(0);
 var str55=r55("repeat")
 var p55=document.getElementById("info55").innerHTML=str55;

 
 
 
 //57 Replace all digits in "abc123" with stars. Result?
 var r56=str=>str.replace("123","***");
 var str56=r56("abc123")
 var p56=document.getElementById("info56").innerHTML=str56;
 
 
 //58 Remove all uppercase letters from "UPPER lower". What remains?
 var r56=str=>str.replace("UPPER"," ");
 var str57=r56("UPPER lower")
 var p57=document.getElementById("info57").innerHTML=str57;
 
 
//59 Extract from "wisdom" starting at letter 3 up to the second last letter. What is the result?
var r57=str=>str.substring(3,str.length-1);
 var str58=r57("wisdom")
 var p58=document.getElementById("info58").innerHTML=str58;
 
 
 //60 Decide if a string contains emoji characters. Expected output: true or false depending on
 //input.
 var r59=str=>str.includes("ðŸ˜€");
 var str59=r59("ðŸ˜€ abbcccdddd");
 var p59=document.getElementById("info59").innerHTML=str59;
 
 
 //61 Standardize different representations of a stringÊ¼s letters and accents consistently. Output:
 //normalized string.
 //Change "hello world" to capitalized words with smaller words in lowercase. Result:
  var r61=str=>str.toUpperCase();
 var str61=r61("hello world");
 var p61=document.getElementById("info61").innerHTML=str61;
 
 
 //62 Explain the difference when extracting parts of a string using negative numbers and how
 //they are treated. Result: Negative numbers count from the end in one case but are treated
 //as zero in another.
 var r62=str=>{
	let st=str.slice(3,7);
	let st1=str.slice(-5,-1);	
	return st1;
 }
 var str62=r62("hello world");
 var p62=document.getElementById("info62").innerHTML=str62;
 
 
 //63 Remove all HTML tags like <p>, <b> from a string to keep text only. Output example: "Hello
 //world"
  var r63=str=>str.replace("/<([^>]+)>/g" ," ");
 var str63=r63("<p>hello <b>world")
 var p63=document.getElementById("info63").innerHTML=str63;
 
 
 //64 How do you make special characters safe for use in searching patterns? Output: the
 // characters preceded by escape marks.
 //65 Find all occurrences, even when they overlap, of "aba" in "ababa". Output: ["aba", "aba"]
 //66 Convert any string to an encoded form and then back to original. Output: e.g., base64
 //encoded and decoded forms.
  var r66=str=>{
	let st=btoa(str);
	 cl(st)
	let st1=atob(st);
	 cl(st1);
	 return st;
  }
 var str66=r66("<p>hello <b>world")
 var p66=document.getElementById("info66").innerHTML=str66;
 
 
 
//67 Separate combined words in "camelCaseExample" into individual words. Output: ["camel",
 //"Case", "Example"]
var r11=(str)=>{
	 let spli=str.split(" ");
	 return spli;
 }
 var str67=r11("camel Case Example");
  var p67=document.getElementById("info67").innerHTML=str67;
 
 //68 Find and delete invisible or zero-width characters in strings like "Hello\u200BWorld". Output:
 //"HelloWorld"
 var r68=(str)=>{
	 
	 let spli=/[\u200B]/g;
	 let st2=str.replace(spli,"");
	 return st2;
 }
 var str68=r68("Hello\u200BWorld");
   var p68=document.getElementById("info68").innerHTML=str68;

 
 
 //69 Change letters like <, >, & into corresponding safe symbols for web pages. Example output:
 //"a < b & c > d"
 //70 Count how many times each letter appears in "hello". Output: {h:1, e:1, l:2, o:1
 var r70=str=>{
	 var counts={};
	 for(let i=0;i<str.length;i++)
	 {
         let st=str[i];
		 counts[st]=(counts[st])+1;
 }
 return counts;
 }
var char70=r70("hello");
   var p70=document.getElementById("info70").innerHTML=char70;
 
 //71 Make a phrase like ""Cr¨¨me br?l¨¦e"" safe for URLs by removing accents and adding
 //hyphens. Output: "creme-brulee"
 var r71=str=>str.normalize("NFD").replace("/[\u0300-\u036f]/g "," ");
 var str71=r71("Cr¨¨me br?l¨¦e")
 var p71=document.getElementById("info71").innerHTML=str71;
 
 
//72 Compress repeated letters "aaabb" to show letter and count like "a3b2". Output: "a3b2"/
 //73 Check if a sequence is properly encoded in UTF8. Output: true or fals//e.
 //74 Mark specified words in a sentence by wrapping them with special tags//. Example output:
 //"This JavaScriptcode rocks"
 //75 Change words for numbers like "two" into numeric forms "2". Output: "2"
 //76 Replace all forms of "foo" ignoring case in a sentence. Output: sentence with all "foo"
 //variations replaced.
 //77 Rearrange letters randomly in "abcdef". Output example: "fbdcea"
 //78 Check if the string is in one Unicode form or another NFC vs NFD. Outputs: "NFC" or
 //"NFD"
 //79 Remove spaces around text but keep any emoji intact like " 
 //smile ". Output: "
 //"
 //??
 //smile"
 var r79=str=>str.trim();
 var str79=r79(" \u{1f600}smile ");
 var p79=document.getElementById("info79").innerHTML=str79;
 
 
 //80 Delete repeated words that appear next to each other in "word word test test word".
 //utput: "word test"
 var r80=(str)=>{
	 
	 let spli=str.split(" ");
	 let st=new Set(spli);
	 let st2=[...st];
	 return st2;
 }
 var str80=r80("word word test test word");
   var p80=document.getElementById("info80").innerHTML=str80;

 
 
 
//81 Convert a sensitive phrase like "password" into a secret hash string. Output example:
 //hexadecimal hash.
 
 
//82 Change "knight" into a code that represents how it sounds. Output: "K530"
  var r82=str=>str.charCodeAt("knight");
 var str82=r82("knight")
 var p82=document.getElementById("info82").innerHTML=str82;

 
//83 Turn an object into a well-formatted JSON string. Output: JSON text with indentation.
 //84 Change all special space characters into normal spaces in "Hello\u00A0World". Output:
 //"Hello World"
 var r84=str=>str.normalize();
 var str84=r84("Hello\u00A0World")
 var p84=document.getElementById("info84").innerHTML=str84;
 
 
 //85 Reverse the order of words in "hello world today" but keep each wordÊ¼s letters in order.
// Output: "today world hello"
 var r85=(str)=>{
	 
	 let spli=str.split(" ");
	 let st=spli.reverse(spli);
	 let st2=st.join(' ');
	 return st2;
 }
 var str85=r85("hello world today");
   var p85=document.getElementById("info85").innerHTML=str85;


 //86 Change all commas used as thousand separators in "1,234,567" to periods. Output:
// "1.234.567"
var r86=(str)=>{
	 
	 let spli=str.replace(/,/,".");
	 return spli;
 }
 var str86=r86("1,234,567");
   var p86=document.getElementById("info86").innerHTML=str86;


// 87 Find and remove repeated consecutive words in "this is is a test test". Output: "this is a
// test"
var r87=(str)=>{
	 
	 let spli=str.split(" ");
	 let st=new Set(spli);
	 let st2=[...st];
	 return st2;
 }
 var str87=r87("this is is a test test");
   var p87=document.getElementById("info87").innerHTML=str87;

// 88 Write multiple lines displaying a personÊ¼s name and age like:
// Name: Joh
var r88=(str,num)=>{
 const rpeated=str.repeat(num);
 return rpeated;
}
 var str88=r88("john"+"\n"+"21",20)
 var p88=document.getElementById("info88").innerHTML=str88;

 //64,65 ,47 ,69,42
