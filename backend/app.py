from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        values = [
            data['radius_mean'],
            data['texture_mean'],
            data['perimeter_mean'],
            data['area_mean'],
            data['smoothness_mean'],
            data['compactness_mean'],
            # Add more if needed
        ]
        prediction = model.predict([values])[0]
        result = 'Malignant' if prediction == 0 else 'Benign'
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route("/")
def home():
    return "✅ Flask backend is running!"

@app.route('/predict_csv', methods=['POST'])
def predict_csv():
    file = request.files['file']
    try:
        df = pd.read_csv(file)
        predictions = model.predict(df.values)
        results = ['Malignant' if p == 0 else 'Benign' for p in predictions]
        return jsonify({'results': results})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
