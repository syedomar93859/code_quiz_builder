import random

correct_answers = 0

def javascript_question_1(tries):
    global correct_answers 
    print("Programming Language: Javascript")
    print("How to print Hello World! to console")

    for i in range(tries):
        answer = input()
        if answer == 'console.log("Hello World!")':
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
                    print('console.log("Hello World!")')
            elif (tries - i) == 2:
                print("You only have 1 try left.")
            else:
                print("You only have " + str(tries - i - 1) +" tries left.")

def total_correct():
    return correct_answers

def send_questions():
    return [javascript_question_1]