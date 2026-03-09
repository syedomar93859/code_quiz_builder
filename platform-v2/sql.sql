-- CREATE TABLE USERS (
--     username TEXT NOT NULL PRIMARY KEY, 
--     password TEXT NOT NULL, 
--     email TEXT NOT NULL
-- );

-- INSERT INTO users (username, password, email)
-- VALUES ("syed", "funnybunny", "syed.omar@ucalgary.ca");

-- INSERT INTO users (username, password, email)
-- VALUES ("billy", "silly", "billy@gmail.com");

-- INSERT INTO users (username, password, email)
-- VALUES ("Jill", "silly", "billy@gmail.com");

-- SELECT * FROM users;

-- SELECT username FROM users;

-- SELECT password FROM users;

-- SELECT password FROM users
-- WHERE username = "billy";

-- SELECT password FROM users
-- WHERE username IN ("syed", "billy");

-- SELECT email FROM users
-- WHERE email_sent BETWEEN (1, 10);

-- SELECT email FROM users
-- WHERE username LIKE "s%";

-- SELECT email FROM users
-- WHERE username LIKE "B%y";

-- UPDATE users SET email="notsyed.omar@ucalgary.ca"
-- WHERE username = "syed";

-- UPDATE users SET email="notsyed.omar@ucalgary.ca", password = "something"
-- WHERE username = "syed";

-- SELECT email FROM users
-- WHERE username LIKE "s%d";

-- DELETE FROM USERS
-- WHERE username = "billy";

-- SELECT email FROM users
-- WHERE username LIKE "b%y";

-- SELECT * FROM users;

-- DELETE FROM USERS
-- WHERE username = "Jill";

-- DROP TABLE USERS;

CREATE TABLE QUESTIONS (
    id TEXT NOT NULL PRIMARY KEY, 
    language TEXT NOT NULL, 
    type TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    prompt TEXT NOT NULL,
    options TEXT NOT NULL,
    answerConfig TEXT NOT NULL,
    tags TEXT NOT NULL
);

-- {
-- id:"c-010",
-- language:"C",
-- type:"multiple_choice",
-- difficulty:"easy",
-- prompt:"Which loop is guaranteed to execute at least once in C?",
-- options:[
-- 'do-while loop',
-- 'while loop',
-- 'for loop',
-- 'if statement'
-- ],
-- answerConfig:{
-- mode:"single_option",
-- correctOption:"do-while loop"
-- },
-- tags:["loops"]
-- },