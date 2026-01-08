import random

correct_answers = 0

def C_question_1(tries):
    global correct_answers
    print("Programming Language: C")
    print("What does the following declaration mean?")

    print("const int *p;")

    firstChoice = "p is a pointer to a constant integer"
    secondChoice = "p is a constant pointer to an integer"
    thirdChoice = "Both p and the integer are constant"
    fourthChoice = "The integer pointed to by p can be modified"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = 0
    for i in range(len(choices)):
        if choices[i] == firstChoice:
            foundIndex = i + 1
            break

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if (tries - i) == 1:
                print("Failure!")
                print("Do you want to know the correct answer? Input yes or no.")
                truth = input()
                if truth.lower() == "yes":
                    print("Correct Answer:")
                    print(firstChoice)
                    print("\nExplanation:")
                    print("The value pointed to by p cannot be modified through p, "
                          "but p itself can point to a different integer.")
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) + " tries left.")

def C_question_2(tries):
    global correct_answers 
    print("Programming Language: C")
    print("How to ask for user input!")

    for i in range(tries):
        answer = input()
        if answer == 'printf("Hello World!");':
            print("Success!")
            correct_answers += 1
            break
        else:
            if (tries - i) == 1:
                print("Failure!")
                print("Do you want to know the correct answer? Input yes or no.")
                truth = input()
                if truth == "Yes" or truth == "yes":
                    print("Correct Answer:")
                    print('printf("Hello World!");')
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) +" tries left.")

def c_question_2(tries):
    global correct_answers
    print("Programming Language: C")
    print("How to print Hello World! (Pick the correct line of code)")

    a = 'printf("Hello World!");'
    b = "printf('Hello World!');"      # wrong quotes (single quotes for chars in C)
    c = 'printf("Hello World!")'       # missing semicolon
    d = 'print("Hello World!");'       # not a C function

    choices = [a, b, c, d]
    random.shuffle(choices)

    print("\n1. " + choices[0] + "\n")
    print("2. " + choices[1] + "\n")
    print("3. " + choices[2] + "\n")
    print("4. " + choices[3])

    # find correct choice index
    foundIndex = 0
    for i in range(len(choices)):
        if choices[i] == a:
            foundIndex = i + 1
            break

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if (tries - i) == 1:
                print("Failure!")
                print("Do you want to know the correct answer? Input yes or no.")
                truth = input()
                if truth == "Yes" or truth == "yes":
                    print("Correct Answer:")
                    print(a)
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) + " tries left.")


def c_question_3(tries):
    global correct_answers
    print("Programming Language: C")
    print("Which function is commonly used to read formatted input from the keyboard?")

    firstChoice = "scanf()"
    secondChoice = "printf()"
    thirdChoice = "gets()"
    fourthChoice = "input()"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0] + "\n")
    print("2. " + choices[1] + "\n")
    print("3. " + choices[2] + "\n")
    print("4. " + choices[3])

    foundIndex = 0
    for i in range(len(choices)):
        if choices[i] == firstChoice:
            foundIndex = i + 1
            break

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if (tries - i) == 1:
                print("Failure!")
                print("Do you want to know the correct answer? Input yes or no.")
                truth = input()
                if truth == "Yes" or truth == "yes":
                    print("Correct Answer:")
                    print(firstChoice)
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) + " tries left.")


def c_question_4(tries):
    global correct_answers
    print("Programming Language: C")
    print("If int x = 5; and int *p = &x; what does *p evaluate to?")

    firstChoice = "5"
    secondChoice = "The memory address of x"
    thirdChoice = "The size of x in bytes"
    fourthChoice = "A compile error"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0] + "\n")
    print("2. " + choices[1] + "\n")
    print("3. " + choices[2] + "\n")
    print("4. " + choices[3])

    foundIndex = 0
    for i in range(len(choices)):
        if choices[i] == firstChoice:
            foundIndex = i + 1
            break

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if (tries - i) == 1:
                print("Failure!")
                print("Do you want to know the correct answer? Input yes or no.")
                truth = input()
                if truth == "Yes" or truth == "yes":
                    print("Correct Answer:")
                    print(firstChoice)
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) + " tries left.")


def c_question_5(tries):
    global correct_answers
    print("Programming Language: C")
    print("What is the index of the first element in a C array?")

    firstChoice = "0"
    secondChoice = "1"
    thirdChoice = "-1"
    fourthChoice = "Depends on the compiler"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = choices.index(firstChoice) + 1

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if tries - i == 1:
                print("Failure!")
                print("Correct Answer:", firstChoice)
            else:
                print("You only have", tries - i - 1, "tries left.")

def c_question_6(tries):
    global correct_answers
    print("Programming Language: C")
    print("Which loop is guaranteed to execute at least once?")

    firstChoice = "do-while loop"
    secondChoice = "while loop"
    thirdChoice = "for loop"
    fourthChoice = "if statement"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = choices.index(firstChoice) + 1

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if tries - i == 1:
                print("Failure!")
                print("Correct Answer:", firstChoice)
            else:
                print("You only have", tries - i - 1, "tries left.")

def c_question_7(tries):
    global correct_answers
    print("Programming Language: C")
    print("What does sizeof(int) return?")

    firstChoice = "Number of bytes used by an int"
    secondChoice = "Number of bits used by an int"
    thirdChoice = "Always 4"
    fourthChoice = "The value stored in an int"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = choices.index(firstChoice) + 1

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if tries - i == 1:
                print("Failure!")
                print("Correct Answer:", firstChoice)
            else:
                print("You only have", tries - i - 1, "tries left.")

def c_question_8(tries):
    global correct_answers
    print("Programming Language: C")
    print("Which keyword is used to define a structure in C?")

    firstChoice = "struct"
    secondChoice = "class"
    thirdChoice = "object"
    fourthChoice = "record"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = choices.index(firstChoice) + 1

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if tries - i == 1:
                print("Failure!")
                print("Correct Answer:", firstChoice)
            else:
                print("You only have", tries - i - 1, "tries left.")

def c_question_9(tries):
    global correct_answers
    print("Programming Language: C")
    print("Which function is used to dynamically allocate memory?")

    firstChoice = "malloc()"
    secondChoice = "alloc()"
    thirdChoice = "new"
    fourthChoice = "memalloc()"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = choices.index(firstChoice) + 1

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if tries - i == 1:
                print("Failure!")
                print("Correct Answer:", firstChoice)
            else:
                print("You only have", tries - i - 1, "tries left.")

def c_question_10(tries):
    global correct_answers
    print("Programming Language: C")
    print("What keyword is used to prevent fall-through in a switch statement?")

    firstChoice = "break"
    secondChoice = "continue"
    thirdChoice = "return"
    fourthChoice = "stop"

    choices = [firstChoice, secondChoice, thirdChoice, fourthChoice]
    random.shuffle(choices)

    print("\n1. " + choices[0])
    print("2. " + choices[1])
    print("3. " + choices[2])
    print("4. " + choices[3])

    foundIndex = choices.index(firstChoice) + 1

    for i in range(tries):
        answer = input()
        if answer.isdigit() and int(answer) == foundIndex:
            print("Success!")
            correct_answers += 1
            break
        else:
            if tries - i == 1:
                print("Failure!")
                print("Correct Answer:", firstChoice)
            else:
                print("You only have", tries - i - 1, "tries left.")


def total_correct():
    return correct_answers


def send_c_questions():
    return [
        C_question_1,
        c_question_2,
        c_question_3,
        c_question_4,
        c_question_5,
        c_question_6,
        c_question_7,
        c_question_8,
        c_question_9,
        c_question_10
    ]

