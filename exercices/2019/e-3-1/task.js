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
        zOrder: 1
      },
      ciel: {
        num: 1,
        img: "../images/fonds/ciel.png",
        side: cellSide,
        isObstacle: false
      },

      caise: {
        num: 2,
        img: "../images/objects/fond_ciel/caise.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },
      caiseCroix: {
        num: 3,
        img: "../images/objects/fond_ciel/caise_croix.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },

      mer: {
        num: 4,
        img: "../images/objects/fond_ciel/mer.png",
        side: cellSide,
        isObstacle: true
      },
      terre: {
        num: 5,
        img: "../images/fonds/terre_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true
      },

      cielObstacle: {
        num: 7,
        img: "../images/fonds/ciel.png",
        side: cellSide,
        isObstacle: true
      },

      serrure: {
        num: 8,
        img: "../images/objects/fond_ciel/serrure_jaune.png",
        side: cellSide,
        category: "serrure",
        isObstacle: false
      },
      cle: {
        num: 9,
        img: "../images/objects/fond_ciel/cle.png",
        side: cellSide,
        category: "cle",
        isObstacle: false,
        isTransportable: true
      },

      mouche: {
        num: 10,
        img: "../images/objects/fond_ciel/mouche.gif",
        side: cellSide,
        isObstacle: false
      },
      n_g: {
        num: 11,
        img: "../images/objects/fond_ciel/nuage_gauche.png",
        side: cellSide
      },
      n_d: {
        num: 12,
        img: "../images/objects/fond_ciel/nuage_droit.png",
        side: cellSide
      }
    },

    maxInstructions: 11,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "pickTransportable",
          "openLocker"
        ]
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

        var noSerrure =
          context.getItems(undefined, undefined, { category: "serrure" })
            .length == 0;

        if (noSerrure) {
          context.success = true;
          throw "Bravo, Goumo a ouvert toutes les serrure !";
        } else {
          context.success = false;
          throw "Goumo n'a pas ouvert toutes les serrure";
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
          [9, 1, 1, 1, 1, 1, 8],
          [2, 2, 2, 2, 2, 2, 2],
          [9, 1, 1, 1, 1, 1, 8],
          [2, 2, 2, 2, 2, 2, 2],
          [9, 1, 1, 1, 1, 1, 8],
          [2, 2, 2, 2, 2, 2, 2],
          [9, 1, 1, 1, 1, 1, 8],
          [2, 2, 2, 2, 2, 2, 2],
          [1, 1, 1, 1, 1, 1, 1],
          [5, 5, 5, 5, 5, 5, 5]
        ],
        initItems: [{ row: 8, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
