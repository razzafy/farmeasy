from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS

# loading models
dtr = pickle.load(open('D:\\farmeasy\\flask\\dtr.pkl', 'rb'))
preprocessor = pickle.load(open('D:\\farmeasy\\flask\\preprocessor.pkl', 'rb'))

# flask app
app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        # Parsing JSON data from request body
        data = request.get_json()
        Year = float(data['Year'])
        average_rain_fall_mm_per_year = float(data['average_rain_fall_mm_per_year'])
        pesticides_tonnes = float(data['pesticides_tonnes'])
        avg_temp = float(data['avg_temp'])
        Area = data['Area']
        Item = data['Item']

        features = np.array([[Year, average_rain_fall_mm_per_year, pesticides_tonnes, avg_temp, Area, Item]])
        transformed_features = preprocessor.transform(features)
        prediction = dtr.predict(transformed_features).tolist()  # Convert to list for JSON serialization

        return jsonify({'prediction': prediction})

if __name__ == "__main__":
    app.run(debug=True)
