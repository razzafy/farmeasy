from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS
import requests

# loading models
dtr = pickle.load(open('D:\\farmeasy\\flask\\dtr.pkl', 'rb'))
preprocessor = pickle.load(open('D:\\farmeasy\\flask\\preprocessor.pkl', 'rb'))

random_forest_model = pickle.load(open('D:\\farmeasy\\flask\\RandomForest.pkl', 'rb'))

# flask app
app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
def weather_fetch(city_name):
    """
    Fetch and returns the temperature and humidity of a city
    :params: city_name
    :return: temperature, humidity
    """
    api_key = "9d7cde1f6d07ec55650544be1631307e"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None


@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        if request.is_json:
            data = request.json
        else:
            data = request.form 
        
        Year = float(data.get('Year', 0))
        average_rain_fall_mm_per_year = float(data.get('average_rain_fall_mm_per_year', 0))
        pesticides_tonnes = float(data.get('pesticides_tonnes', 0))
        avg_temp = float(data.get('avg_temp', 0))
        Area = (data.get('Area', 0))
        Item = (data.get('Item', 0))

        features = np.array([[Year, average_rain_fall_mm_per_year, pesticides_tonnes, avg_temp, Area, Item]])
        transformed_features = preprocessor.transform(features)
        prediction = dtr.predict(transformed_features).tolist()  # Convert to list for JSON serialization

        return jsonify({'prediction': prediction})
    else:
        return jsonify({'error': 'Method Not Allowed'}), 405


@app.route("/result", methods=['POST'])
def get_result():
    if request.method == 'POST':
        # Perform some computation or retrieve data
        result = "This is the result"
        return jsonify({'result': result})
    
@app.route('/recommend', methods=['POST'])
def recommendation():
    if request.method == 'POST':
        if request.is_json:
            data = request.json
        else:
            data = request.form
        N= data.get('N', 0)
        P= data.get('P', 0)
        K= data.get('K', 0)
        ph= float(data.get('ph', 0))
        rainfall= (data.get('rainfall', 0))
        city= data.get("city")

        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N,P,K,temperature,humidity,ph,rainfall]])
            my_prediction = random_forest_model.predict(data)
            recommendation = my_prediction[0]
    return jsonify({'recommendation': recommendation})


if __name__ == "__main__":
    app.run(debug=True)
