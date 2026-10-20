-- DROP TABLE questions

CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lang VARCHAR(50) NOT NULL,
    kind VARCHAR(50) NOT NULL,
    difficulty VARCHAR(20) NOT NULL,
    question TEXT NOT NULL,
    option_one TEXT,
    option_two TEXT,
    option_three TEXT,
    option_four TEXT,
    option_five TEXT,
    solution TEXT NOT NULL,
    tags JSON
);


-- INSERT INTO questions (lang, kind, difficulty, question, solution)
-- VALUES ('Python', 'Written', 'Easy', 'How to print "Hello, World!"',
-- 'print("Hello, World!")');


SELECT * FROM questions;