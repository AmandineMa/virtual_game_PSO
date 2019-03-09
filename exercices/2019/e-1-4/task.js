function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    hideSaveOrLoad: true,
    cellSide: cellSide,
    actionDelay: 200,
    itemTypes: {
      robot: {
        img: "../images/robot/robot_rose.png",
        side: 80,
        nbStates: 9,
        isObstacle: true,
        offsetX: -14,
        category: "robot",
        team: 0,
        zOrder: 3
      },
      vert: {
        num: 1,
        img: "../images/fonds/vert.png",
        side: cellSide,
        category: "paint",
        isObstacle: false,
        hasColor: false,
        team: 0,
        zOrder: 0
      },

      caise: {
        num: 2,
        img: "../images/objects/fond_vert/caise.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      },
      caiseCroix: {
        num: 3,
        img: "../images/objects/fond_vert/caise_croix.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      },

      mer: {
        num: 4,
        img: "../images/objects/fond_vert/mer.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      },
      diamant: {
        num: 5,
        img: "../images/objects/fond_vert/diamant_orange.png",
        side: cellSide,
        category: "paint",
        isObstacle: false,
        hasColor: false,
        color: "diamant",
        team: 0,
        zOrder: 0
      },

      caiseJaune: {
        num: 6,
        img: "../images/objects/fond_vert/caisse_jaune.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      },

      mauve: {
        num: 7,
        img: "../images/fonds/mauve.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      },
      mauveTop: {
        num: 8,
        img: "../images/fonds/mauve_top.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      },

      vertObstacle: {
        num: 9,
        img: "../images/fonds/vert.png",
        side: cellSide,
        category: "paint",
        isObstacle: true,
        hasColor: false,
        team: 0,
        zOrder: 0
      }
    },

    maxInstructions: 10,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["north", "south", "east", "west"]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: []
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
        var paints = context.getItems(robot.row, robot.col, {
          color: "diamant"
        });
        if (paints.length != 0) {
          context.success = true;
          throw "Bravo, Bozok a atteint le diamant !";
        }
        context.success = false;
        throw "Bozok n'a pas atteint le diamant";
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
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],

          [1, 1, 3, 3, 3, 1, 1],
          [1, 1, 1, 9, 9, 5, 1],
          [1, 1, 2, 4, 4, 6, 1],
          [8, 8, 2, 2, 2, 6, 8],
          [7, 7, 7, 7, 7, 7, 7]
        ],
        initItems: [{ row: 5, col: 1, dir: 1, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
