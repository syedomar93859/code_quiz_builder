export const questionBankData_platform_v2 = [

/* ---------------- C QUESTIONS ---------------- */

{
id:"c-001",
language:"C",
type:"written",
difficulty:"easy",
prompt:'How to print "Hello, World!" in C?',
answerConfig:{
mode:"text",
acceptedAnswers:['printf("Hello, World!");']
},
tags:["basics"]
},

{
id:"c-002",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"What does the following declaration mean in C: const int *p;",
options:[
'p is a pointer to a constant integer.',
'p is a constant pointer to an integer.',
'Both p and the integer are constant.',
'The integer pointed to by p can be modified.'
],
answerConfig:{
mode:"single_option",
correctOption:'p is a pointer to a constant integer.'
},
tags:["pointers"]
},

{
id:"c-003",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"Which function is commonly used to read formatted input from the keyboard in C?",
options:[
'scanf()',
'fgets()',
'getchar()',
'read()',
'input()'
],
answerConfig:{
mode:"single_option",
correctOption:"scanf()"
},
tags:["input"]
},

{
id:"c-004",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"With the following: int x = 5; int *p = &x; What does *p evaluate to in C?",
options:[
'5',
'The memory address of x',
'The size of x in bytes',
'An error, as p is not initialized',
'None of the above'
],
answerConfig:{
mode:"single_option",
correctOption:"5"
},
tags:["pointers"]
},

{
id:"c-005",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"What is the index of the first element in a C array?",
options:[
'0',
'1',
'-1',
'Depends on the compiler'
],
answerConfig:{
mode:"single_option",
correctOption:"0"
},
tags:["arrays"]
},

{
id:"c-006",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"What does sizeof(int) return in C?",
options:[
'Number of bytes required to store an object of type int',
'Number of bits used by an int',
'Always 4',
'The value stored in an int'
],
answerConfig:{
mode:"single_option",
correctOption:"Number of bytes required to store an object of type int"
},
tags:["types"]
},

{
id:"c-007",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"Which keyword is used to define a structure in C?",
options:[
'struct',
'class',
'union',
'object',
'record'
],
answerConfig:{
mode:"single_option",
correctOption:"struct"
},
tags:["structs"]
},

{
id:"c-008",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"Which C function allocates a block of uninitialized memory at runtime?",
options:[
'malloc()',
'alloc()',
'calloc()',
'realloc()',
'free()',
'memalloc()'
],
answerConfig:{
mode:"single_option",
correctOption:"malloc()"
},
tags:["memory"]
},

{
id:"c-009",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"What keyword prevents fall-through in a switch statement?",
options:[
'break',
'continue',
'return',
'exit'
],
answerConfig:{
mode:"single_option",
correctOption:"break"
},
tags:["switch"]
},

{
id:"c-010",
language:"C",
type:"multiple_choice",
difficulty:"easy",
prompt:"Which loop is guaranteed to execute at least once in C?",
options:[
'do-while loop',
'while loop',
'for loop',
'if statement'
],
answerConfig:{
mode:"single_option",
correctOption:"do-while loop"
},
tags:["loops"]
},

/* ---------------- JAVA QUESTIONS ---------------- */

{
id:"java-001",
language:"Java",
type:"written",
difficulty:"easy",
prompt:'How to print "Hello, World!" in Java?',
answerConfig:{
mode:"text",
acceptedAnswers:['System.out.println("Hello, World!");']
},
tags:["basics"]
},

{
id:"java-002",
language:"Java",
type:"multiple_choice",
difficulty:"easy",
prompt:'What does the "void" keyword indicate in Java?',
options:[
'It indicates that a method does not return a value.',
'It indicates that a method returns a value.',
'It indicates that a method is private.',
'It indicates that a method is static.'
],
answerConfig:{
mode:"single_option",
correctOption:'It indicates that a method does not return a value.'
},
tags:["methods"]
},

{
id:"java-003",
language:"Java",
type:"multiple_choice",
difficulty:"easy",
prompt:"What does the static keyword mean for a method in Java?",
options:[
'It means the method can be accessed without creating an instance/object of the class.',
'It means the method cannot be accessed without creating an instance/object of the class.',
'It means the method is accessible by any other method in the same class.',
'Makes the method belong to the class rather than any object instance.'
],
answerConfig:{
mode:"single_option",
correctOption:'It means the method can be accessed without creating an instance/object of the class.'
},
tags:["methods"]
},

/* ---------------- PYTHON QUESTIONS ---------------- */

{
id:"py-001",
language:"Python",
type:"written",
difficulty:"easy",
prompt:'How to print "Hello, World!" in Python?',
answerConfig:{
mode:"text",
acceptedAnswers:['print("Hello, World!")']
},
tags:["basics"]
},

{
id:"py-002",
language:"Python",
type:"written",
difficulty:"easy",
prompt:"Write a comment in Python with this text: This is a comment",
answerConfig:{
mode:"text",
acceptedAnswers:["# This is a comment"]
},
tags:["comments"]
},

{
id:"py-003",
language:"Python",
type:"written",
difficulty:"easy",
prompt:"Write a variable x with the value of 11.",
answerConfig:{
mode:"text",
acceptedAnswers:["x = 11"]
},
tags:["variables"]
},

{
id:"py-004",
language:"Python",
type:"multiple_choice",
difficulty:"easy",
prompt:'What does the following print? x = 4; x = "Sally"; print(x)',
options:[
'4',
'Sally',
'Error',
'None'
],
answerConfig:{
mode:"single_option",
correctOption:"Sally"
},
tags:["variables"]
},

{
id:"py-005",
language:"Python",
type:"multiple_choice",
difficulty:"easy",
prompt:"What does float(3) do?",
options:[
'Converts 3 to a float',
'Rounds 3 to the nearest integer',
'Returns an error'
],
answerConfig:{
mode:"single_option",
correctOption:"Converts 3 to a float"
},
tags:["types"]
},

{
id:"py-006",
language:"Python",
type:"multiple_choice",
difficulty:"easy",
prompt:'What is printed from: name="John"; print(type(name))',
options:[
"<class 'int'>",
"<class 'str'>",
"<class 'bool'>",
'Returns an error'
],
answerConfig:{
mode:"single_option",
correctOption:"<class 'str'>"
},
tags:["types"]
}

];