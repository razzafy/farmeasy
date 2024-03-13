from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS

# loading models
dtr = pickle.load(open('E:\\Projects\\farmeasy\\flask\\dtr.pkl', 'rb'))
preprocessor = pickle.load(open('E:\\Projects\\farmeasy\\flask\\preprocessor.pkl', 'rb'))

# flask app
app = Flask(__name__)
CORS(app, origins='http://localhost:3000')


@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        Year = float(request.form['Year'])
        average_rain_fall_mm_per_year = float(request.form['average_rain_fall_mm_per_year'])
        pesticides_tonnes = float(request.form['pesticides_tonnes'])
        avg_temp = float(request.form['avg_temp'])
        Area = float(request.form['Area'])
        Item = float(request.form['Item'])

        features = np.array([[Year, average_rain_fall_mm_per_year, pesticides_tonnes, avg_temp, Area, Item]])
        transformed_features = preprocessor.transform(features)
        prediction = dtr.predict(transformed_features).tolist()  # Convert to list for JSON serialization

        return jsonify({'prediction': prediction})

@app.route("/result", methods=['POST'])
def get_result():
    if request.method == 'POST':
        # Perform some computation or retrieve data
        result = "This is the result"
        return jsonify({'result': result})

if __name__ == "__main__":
    app.run(debug=True)
