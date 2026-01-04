import random

correct_answers = 0

def python_question_1(tries):
    global correct_answers 
    print("Programming Language: Python")
    print("How to print Hello World!")

    for i in range(tries):
        answer = input()
        if answer == 'print("Hello World!")':
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
                    print('print("Hello World!")')
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) +" tries left.")

def python_question_2(tries):
    global correct_answers 
    print("Programming Language: Python")
    print("Write a comment.")

    for i in range(tries):
        answer = input()
        if answer.find("#", 0, 1) != -1:
            print("Success!")
            correct_answers += 1
            break
        else:
            if (tries - i) == 1:
                print("Failure!")
                print("Do you want to know the correct answer? Input yes or no.")
                truth = input()
                if truth == "Yes" or truth == "yes":
                    print("Examples of correct answers:")
                    print('#test')
                    print('#hello there')
                    print('#my name is Bob')
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) +" tries left.")    

def python_question_3(tries):
    global correct_answers 
    print("Programming Language: Python")
    print("Write a variable x with the value of 11.")

    for i in range(tries):
        answer = input()
        if answer.replace(" ", "") == 'x=11':
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
                    print('x = 11')
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) +" tries left.")    
                          

def total_correct():
    return correct_answers

def send_questions():
    return [python_question_1]