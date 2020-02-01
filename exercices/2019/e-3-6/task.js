function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#80be1f",
    hideSaveOrLoad: true,
    cellSide: cellSide,
    actionDelay: 200,
    itemTypes: {
      robot: {
        img: "../images/robot/robot_rond.png",
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
        isObstacle: false
      },

      caise: {
        num: 2,
        img: "../images/objects/fond_vert/caise.png",
        side: cellSide,
        isObstacle: true
      },
      caiseCroix: {
        num: 3,
        img: "../images/objects/fond_vert/caise_croix.png",
        side: cellSide,
        isObstacle: true
      },

      mer: {
        num: 4,
        img: "../images/objects/fond_vert/mer.png",
        side: cellSide,
        isObstacle: true
      },
      diamantOrange: {
        num: 5,
        img: "../images/objects/fond_vert/diamant_orange.png",
        side: cellSide,
        category: "diamant",
        isObstacle: false,
        isTransportable: true
      },
      diamantJaune: {
        num: 6,
        img: "../images/objects/fond_vert/diamant_jaune.png",
        side: cellSide,
        category: "diamant",
        isObstacle: false,
        isTransportable: true
      },
      diamantBleu: {
        num: 7,
        img: "../images/objects/fond_vert/diamant_bleu.png",
        side: cellSide,
        category: "diamant",
        isObstacle: false,
        isTransportable: true
      },

      vertObstacle: {
        num: 9,
        img: "../images/fonds/vert.png",
        side: cellSide,
        isObstacle: true
      },

      merPleine: {
        num: 10,
        img: "../images/fonds/mer.png",
        side: cellSide,
        isObstacle: true
      },
      mauve: {
        num: 11,
        img: "../images/fonds/mauve.png",
        side: cellSide,
        isObstacle: true
      },
      mauveTop: {
        num: 12,
        img: "../images/fonds/mauve_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },

      blue_flag: {
        num: 13,
        img: "../images/objects/fond_vert/blue_flag.png",
        side: cellSide,
        category: "flag",
        isObstacle: false
      }
    },

    maxInstructions: 11,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["north", "south", "east", "west", "pickTransportable"]
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
        var isOnFlag =
          context.getItems(robot.row, robot.col, { category: "flag" }).length ==
          1;
        if (isOnFlag) {
          var hasDiamant =
            context.nbTransportedItems === 6 &&
            context.transportedItem.category === "diamant";

          if (hasDiamant) {
            context.success = true;
            throw "Congrat, Bozok has taken all diamonds !";
          } else {
            context.success = false;
            throw "Bozok has not taken all diamonds";
          }
        } else {
          context.success = false;
          throw "Bozok is not on the blue flag";
        }
      }
    },
    computeGrade: function(context, message) {
      return {
        successRate: context.success ? 1 : 0,
        message: message
      };
    }
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 13, 1, 1],
          [12, 5, 7, 5, 12, 12, 12],
          [11, 6, 7, 6, 11, 11, 11],
          [11, 7, 5, 6, 11, 11, 11],
          [11, 7, 6, 5, 11, 11, 11],
          [11, 6, 6, 7, 11, 11, 11],
          [11, 6, 5, 7, 11, 11, 11]
        ],
        initItems: [{ row: 1, col: 0, dir: 1, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
