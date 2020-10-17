"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SensorSchema extends Schema {
  up() {
    this.create("sensors", (table) => {
      table.increments();
      table.string("object_name");
      table.float("object_temp1");
      table.float("object_temp2");
      table.float("sensor_temp");
      table.float("distance");
      table.timestamps();
    });
  }

  down() {
    this.drop("sensors");
  }
}

module.exports = SensorSchema;
