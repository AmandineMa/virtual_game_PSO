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
      terre: {
        num: 5,
        img: "../images/fonds/terre.png",
        side: cellSide,
        isObstacle: true
      },
      caise: {
        num: 6,
        img: "../images/objects/fond_ciel/caise.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      terreLeft: {
        num: 11,
        img: "../images/objects/fond_ciel/terre_left.png",
        side: cellSide,
        category: "platform",
        isObstacle: false
      }
    },

    maxInstructions: 9,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "jump"]
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
        var robot = context.getRobotItem(context.curRobot);

        var onExit =
          context.getItems(robot.row, robot.col, { category: "exit" }).length ==
          1;

        if (onExit) {
          context.success = true;
          throw "Bravo, Balouk est arrivé au panneau !";
        }
        context.success = false;
        throw "Balouk n'est pas arrivé au panneau";
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
          [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 11, 2, 1, 11, 2, 1, 11, 2, 1, 1],
          [1, 1, 5, 1, 1, 5, 1, 1, 5, 1, 4],
          [2, 2, 5, 2, 2, 5, 2, 2, 5, 2, 2]
        ],
        initItems: [{ row: 6, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
