import mysql.connector

# connect to the local MySQL server and specific database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="4vD-Pa?jcJe3s.3",
    database="demo"   
)

# create a blank cursor object
cursor = db.cursor()

info = input("Type 1 to view the table's contents.\n\n")

if info == "1":
    # execute the query using the cursor
    cursor.execute("SELECT * FROM questions;")
    
    # fetch and display all rows returned by the query
    results = cursor.fetchall()
    print("\n--- Questions in Database ---")
    for row in results:
        print(row)

# close the connection when done
cursor.close()
db.close()