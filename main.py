
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/newpage")
def new_page():
    return render_template("next.html")


if __name__ == "__main__":
    app.run(debug=True)