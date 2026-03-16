// const sqlite3 = require('sqlite3').verbose();
// let sql;

// // connect to DB
// const db = new sqlite3.Database('./questions.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) return console.error(err.message);
// });

// // Create table
// // sql = 'CREATE TABLE QUESTIONS (id TEXT NOT NULL PRIMARY KEY, language TEXT NOT NULL, type TEXT NOT NULL, difficulty TEXT NOT NULL, prompt TEXT NOT NULL, options TEXT NOT NULL, solution TEXT NOT NULL, multiple_answers BOOLEAN NOT NULL)';
// // db.run(sql);

// // Drop table
// // db.run("DROP TABLE questions");

// // Insert data into table
// // sql = 'INSERT INTO questions(id, language, type, difficulty, prompt, options, solution, multiple_answers) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
// // db.run(
// //     sql,
// //     ["Q1", "java", "multiple_choice", "easy", "What is 2 + 2?", "1,2,3,4", "4", 0],
// //     (err) => {
// //     if (err) return console.error(err.message);
// // })

// //update data
// // sql = `UPDATE questions SET language = ? WHERE id = ?`;
// // db.run(sql, ["python", "Q1"], (err) => {
// //     if (err) return console.error(err.message);
// // });

// //delete data
// sql = `DELETE FROM questions WHERE id = ?`;
// db.run(sql, ["Q1"], (err) => {
//     if (err) return console.error(err.message);
// });

// // query the data
// sql = `SELECT * FROM questions`;
// db.all(sql, [], (err, rows) =>{
//     if (err) return console.error(err.message);
//     rows.forEach((row) =>{
//         console.log(row);
//     });
// });