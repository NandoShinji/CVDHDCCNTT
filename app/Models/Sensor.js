"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Sensor extends Model {
  static get table() {
    return "sensors";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = Sensor;
