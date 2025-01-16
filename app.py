from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    translation = ""
    if request.method == 'POST':
        # Set up API
        text = request.form.get('text')
        source_lang = request.form.get('source_lang')
        target_lang = request.form.get('target_lang')
        url = "https://api.mymemory.translated.net/get"
        params = {
            'q': text,
            'langpair': f"{source_lang}|{target_lang}"
        }
        
        # Use API
        try:
            response = requests.get(url, params=params)
            data = response.json()
            translation = data['responseData']['translatedText']
        except Exception as e:
            translation = f"Unexpected error occured: {str(e)}"
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)