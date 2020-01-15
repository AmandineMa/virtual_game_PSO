function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#869595",
    hasGravity: true,
    hideSaveOrLoad: true,
    cellSide: cellSide,
    actionDelay: 200,
    itemTypes: {
      robot: {
        img: "../images/robot/robot_rose.png",
        side: 70,
        nbStates: 9,
        isObstacle: true,
        offsetX: 0,
        category: "robot",
        team: 0,
        zOrder: 3
      },
      gris: {
        num: 1,
        img: "../images/fonds/gris.png",
        side: cellSide,
        isObstacle: false
      },
      cle: {
        num: 2,
        img: "../images/objects/fond_gris/cle.png",
        side: cellSide,
        category: "key",
        isObstacle: false,
        isTransportable: true
      },
      mauve: {
        num: 7,
        img: "../images/fonds/mauve.png",
        side: cellSide,
        isObstacle: true
      },
      mauveTop: {
        num: 8,
        img: "../images/fonds/mauve_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      porte: {
        num: 4,
        img: "../images/objects/fond_gris/porte_centre.png",
        side: cellSide,
        category: "porte",
        isObstacle: false
      },
      porteTop: {
        num: 5,
        img: "../images/objects/fond_gris/porte_top.png",
        side: cellSide,
        isObstacle: false
      },
      mouche: {
        num: 9,
        img: "../images/objects/fond_gris/mouche.png",
        side: cellSide,
        isObstacle: false
      },
      caisse: {
        num: 10,
        img: "../images/objects/fond_gris/caise.png",
        side: cellSide,
        isObstacle: false,
        category: "platform"
      },
      diamant: {
        num: 11,
        img: "../images/objects/fond_gris/diamant_vert.png",
        side: cellSide,
        isObstacle: false,
        category: "diamant",
        isTransportable: true
      }
    },

    maxInstructions: 18,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "pickTransportable",
          "hasAKey",
          "hasADiamant"
        ]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat", "controls_if"]
      }
    },
    ignoreInvalidMoves: false,
    groupByCategory: false,
    includedAll: false,
    includedCategories: [],
    includedBlocks: [],
    checkEndEveryTurn: true,
    checkEndCondition: function(context, lastTurn) {
      if (lastTurn) {
        var robot = context.getRobotItem(context.curRobot);
        var onPorte =
          context.getItems(robot.row, robot.col, { category: "porte" })
            .length == 1;
        if (!onPorte) {
          context.success = false;
          throw "Bozok is not on the door";
        }

        var asAllObjects = context.nbTransportedItems === 7;
        if (!asAllObjects) {
          context.success = false;
          throw "Bozok has not picked up all keys or diamonds";
        }
        context.success = true;
        throw "Congratulations !";
      }
    },
    computeGrade: function(context, message) {
      var rate = 0;
      if (context.success) {
        rate = 1;
      }
      return {
        successRate: rate,
        message: message
      };
    }
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 10, 10, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 11, 1, 1, 2, 11, 1, 1, 1, 1],
          [1, 1, 10, 10, 10, 10, 10, 10, 10, 1, 1],
          [1, 1, 1, 11, 1, 2, 11, 2, 1, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
        ],
        initItems: [{ row: 6, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
