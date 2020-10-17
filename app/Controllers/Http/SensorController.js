"use strict";

const Sensor = use("App/Models/Sensor");

class SensorController {
  async getAll({ request, response }) {
    const sensor = await Sensor.all();

    return response.json(sensor);
  }

  async store({ request, response }) {
    const {
      object_name,
      object_temp1,
      object_temp2,
      sensor_temp,
      distance,
    } = request.all();

    const sensor = new Sensor();

    sensor.object_name = object_name;
    sensor.object_temp1 = object_temp1;
    sensor.object_temp2 = object_temp2;
    sensor.sensor_temp = sensor_temp;
    sensor.distance = distance;

    await sensor.save();

    return response.status(201).send("Creat success!");
  }
}

module.exports = SensorController;
