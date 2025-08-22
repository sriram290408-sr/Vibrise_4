from flask import Flask, request, render_template, jsonify
import mysql.connector

app = Flask(__name__)

# Connect to MySQL
db = mysql.connector.connect(
    host="localhost",       # Your DB host
    user="root",            # Your MySQL username
    password="password123", # Your MySQL password
    database="viberise_db"  # Database name
)

@app.route("/")
def home():
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, password))
    user = cursor.fetchone()

    if user:
        return jsonify({"success": True, "message": "✅ Login successful!"})
    else:
        return jsonify({"success": False, "message": "❌ Invalid email or password"})

if __name__ == "__main__":
    app.run(debug=True)
