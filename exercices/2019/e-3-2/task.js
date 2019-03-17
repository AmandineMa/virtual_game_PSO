function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#d0f4f7",
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
      ciel: {
        num: 1,
        img: "../images/fonds/ciel.png",
        side: cellSide,
        isObstacle: false
      },
      terreTop: {
        num: 2,
        img: "../images/fonds/terre_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      mouche: {
        num: 3,
        img: "../images/objects/fond_ciel/mouche.gif",
        side: cellSide,
        isObstacle: false
      },
      exit: {
        num: 4,
        img: "../images/objects/fond_ciel/exit.png",
        side: cellSide,
        category: "exit",
        isObstacle: false
      },
      pierre: {
        num: 5,
        img: "../images/fonds/pierre.png",
        side: cellSide,
        category: "exit",
        isObstacle: true
      },
      caise: {
        num: 6,
        img: "../images/objects/fond_ciel/caise.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      point: {
        num: 7,
        img: "../images/objects/fond_ciel/point_vert.png",
        side: cellSide,
        category: "point",
        isObstacle: false,
        isTransportable: true
      },
      porteh: {
        num: 8,
        img: "../images/objects/fond_ciel/porte_centre.png",
        side: cellSide,
        category: "porte",
        isObstacle: false
      },
      porteb: {
        num: 9,
        img: "../images/objects/fond_ciel/porte_top.png",
        side: cellSide,
        isObstacle: false
      }
    },

    maxInstructions: 9,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "jump", "pickTransportable"]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat"]
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
        var hasPoints =
          context.nbTransportedItems === 4 &&
          context.transportedItem.category === "point";

        if (!hasPoints) {
          context.success = false;
          throw "Balouk n'a pas récupéré tous les points";
        }

        var robot = context.getRobotItem(context.curRobot);
        var onExit =
          context.getItems(robot.row, robot.col, { category: "porte" })
            .length == 1;
        if (!onExit) {
          context.success = false;
          throw "Balouk n'est pas arrivé à la sortie";
        }

        context.success = true;
        throw "Bravo ! mission accomplie !";
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
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
          [1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 8],
          [1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6],
          [1, 1, 1, 7, 5, 5, 5, 5, 5, 5, 5],
          [1, 1, 6, 6, 5, 5, 5, 5, 5, 5, 5],
          [1, 1, 7, 5, 5, 5, 5, 5, 5, 5, 5],
          [1, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5],
          [1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          [6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ],
        initItems: [{ row: 9, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
