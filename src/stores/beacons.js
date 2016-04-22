import {observable} from 'mobx'
import fetch from 'whatwg-fetch'

class Beacon {
  constructor (json) {
    Object.assign(this, json)
  }
  changeStatus (enabled) {
    console.log('changing status to', enabled)
    this.active = enabled
  }
}

const makeBeacons = (arr) => {
  return arr.map((json) => new Beacon(json))
}

export default observable(makeBeacons([
  {
    "name": "Kavarna The Farm",
    "id": "EDD1EBEAC04E5DEFA017-0BDB87539B67",
    "label": "DjBx",
    "active": true,
    "category": "coffeshop",
    "users": {
      "current": 1,
      "total": 2
    },
    "stationary": true,
    "latitude": 14.4160084,
    "longitude": 50.1010032
  }, {
    "name": "Brno salina",
    "id": "EDD1EBEAC04E5DEFA017-0BDB87539B67",
    "label": "xgDa",
    "active": false,
    "category": "tram",
    "users": {
      "current": 1,
      "total": 2
    },
    "stationary": true,
    "latitude": 14.4160084,
    "longitude": 50.1010032
  }, {
    "name": "Brno salina",
    "id": "EDD1EBEAC04E5DEFA017-0BDB87539B67",
    "label": "feFfD",
    "active": false,
    "category": "train",
    "users": {
      "current": 1,
      "total": 2
    },
    "stationary": true,
    "latitude": 14.4160084,
    "longitude": 50.1010032
  }
]))