var APP_DATA = {
  "scenes": [
    {
      "id": "0-laundry",
      "name": "laundry",
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
        "yaw": 0.040538147502381605,
        "pitch": 0.11418170191273447,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.4627248474021357,
          "pitch": 0.006570569256560077,
          "rotation": 0,
          "target": "2-office"
        },
        {
          "yaw": -1.448753043583272,
          "pitch": 0.15129284751104422,
          "rotation": 0,
          "target": "1-office-alcove"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-office-alcove",
      "name": "office alcove",
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
          "yaw": 0.025394831351444935,
          "pitch": 0.2850482327070516,
          "rotation": 0,
          "target": "0-laundry"
        },
        {
          "yaw": 0.01651629454665482,
          "pitch": 0.08196737902882667,
          "rotation": 0,
          "target": "2-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-office",
      "name": "office",
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
          "yaw": -1.3360256526129888,
          "pitch": 0.14933745097980378,
          "rotation": 0,
          "target": "1-office-alcove"
        },
        {
          "yaw": -1.3412093543315002,
          "pitch": 0.3030437206617904,
          "rotation": 0,
          "target": "0-laundry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
