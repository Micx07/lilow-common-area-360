var APP_DATA = {
  "scenes": [
    {
      "id": "0-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.005728812030018,
          "pitch": 0.009630254064953547,
          "rotation": 0.7853981633974483,
          "target": "4-spa"
        },
        {
          "yaw": 1.9167513955215538,
          "pitch": 0.12488018655578514,
          "rotation": 0.7853981633974483,
          "target": "3-reception-entrance"
        },
        {
          "yaw": 0.44390929244822175,
          "pitch": 0.010173085298884388,
          "rotation": 0.7853981633974483,
          "target": "1-pool-view"
        },
        {
          "yaw": 0.8707676112667304,
          "pitch": 0.0009339321812618095,
          "rotation": 0,
          "target": "2-reception-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pool-view",
      "name": "POOL VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5790315276545286,
          "pitch": -0.052020745698783344,
          "rotation": 0.7853981633974483,
          "target": "0-corridor"
        },
        {
          "yaw": 0.2591465329837259,
          "pitch": 0.0026383682319313095,
          "rotation": 0.7853981633974483,
          "target": "2-reception-bar"
        },
        {
          "yaw": 0.050515941275188325,
          "pitch": -0.028108364937263985,
          "rotation": 1.5707963267948966,
          "target": "3-reception-entrance"
        },
        {
          "yaw": 0.162509040084597,
          "pitch": -0.09362718360040923,
          "rotation": 0.7853981633974483,
          "target": "4-spa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception-bar",
      "name": "RECEPTION BAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.46071674059989576,
          "pitch": 0.08273944235352282,
          "rotation": 0.7853981633974483,
          "target": "3-reception-entrance"
        },
        {
          "yaw": 0.5677417805039973,
          "pitch": 0.06279695838558119,
          "rotation": 0.7853981633974483,
          "target": "0-corridor"
        },
        {
          "yaw": 3.0758160962584844,
          "pitch": 0.17743913121797128,
          "rotation": 0.7853981633974483,
          "target": "1-pool-view"
        },
        {
          "yaw": -0.20069513828889995,
          "pitch": -0.04293607023995705,
          "rotation": 0.7853981633974483,
          "target": "4-spa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reception-entrance",
      "name": "RECEPTION ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5334486696734704,
        "pitch": 0.03337963860357718,
        "fov": 1.4770490082083696
      },
      "linkHotspots": [
        {
          "yaw": 1.0084187178853856,
          "pitch": 0.009105057688808316,
          "rotation": 1.5707963267948966,
          "target": "2-reception-bar"
        },
        {
          "yaw": -0.26687680763481936,
          "pitch": 0.09673185722757438,
          "rotation": 0.7853981633974483,
          "target": "0-corridor"
        },
        {
          "yaw": 1.2393192715904622,
          "pitch": 0.04303452736649227,
          "rotation": 0.7853981633974483,
          "target": "1-pool-view"
        },
        {
          "yaw": -1.4138048052580352,
          "pitch": -0.02759154454037116,
          "rotation": 1.5707963267948966,
          "target": "4-spa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-spa",
      "name": "SPA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.31568589014487713,
          "pitch": -0.009778322792282523,
          "rotation": 0.7853981633974483,
          "target": "0-corridor"
        },
        {
          "yaw": 1.2832640562289122,
          "pitch": -0.0994897450125869,
          "rotation": 0.7853981633974483,
          "target": "1-pool-view"
        },
        {
          "yaw": 0.9042596434555392,
          "pitch": -0.05873381160964897,
          "rotation": 0.7853981633974483,
          "target": "2-reception-bar"
        },
        {
          "yaw": 1.1825430345723404,
          "pitch": 0.04936603815253093,
          "rotation": 0.7853981633974483,
          "target": "3-reception-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LILOW COMMON AREA 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
