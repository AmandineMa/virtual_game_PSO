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
        zOrder: 3,
      },
      ciel: {
        num: 1,
        img: "../images/fonds/ciel.png",
        side: cellSide,
        isObstacle: false,
      },
      nuage_droit: {
        num: 5,
        img: "../images/objects/fond_ciel/nuage_droit.png",
        side: cellSide,
        isObstacle: false,
      },
      nuage_gauche: {
        num: 6,
        img: "../images/objects/fond_ciel/nuage_gauche.png",
        side: cellSide,
        isObstacle: false,
      },
      greenMonster: {
        num: 2,
        img: "../images/objects/fond_ciel/carre_vert.png",
        side: cellSide,
        category: "greenMonster",
        isObstacle: false,
        isTransportable: true,
      },
      orangeMonster: {
        num: 11,
        img: "../images/objects/fond_ciel/carre_rouge_haut.png",
        side: cellSide,
        isObstacle: false,
        category: "orangeMonster",
        isTransportable: true,
      },
      terre: {
        num: 7,
        img: "../images/fonds/terre.png",
        side: cellSide,
        isObstacle: true,
      },
      terreTop: {
        num: 8,
        img: "../images/fonds/terre_top.png",
        side: cellSide,
        category: "platform",
        isObstacle: true,
      },
      pncSign: {
        num: 4,
        img: "../images/objects/fond_ciel/to_pnc.png",
        side: cellSide,
        category: "pncSign",
        isObstacle: false,
      },
      caisse: {
        num: 10,
        img: "../images/objects/fond_ciel/caise.png",
        side: cellSide,
        isObstacle: false,
        category: "platform",
      },
      mouche: {
        num: 15,
        img: "../images/objects/fond_ciel/mouche.gif",
        side: cellSide,
        isObstacle: false,
      },
    },

    maxInstructions: 15,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "pickTransportable",
          "hasGreenMonster",
          "hasOrangeMonster",
        ],
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat", "controls_if"],
      },
    },
    ignoreInvalidMoves: false,
    groupByCategory: false,
    includedAll: false,
    includedCategories: [],
    includedBlocks: [],
    checkEndEveryTurn: true,
    checkEndCondition: function (context, lastTurn) {
      if (lastTurn) {
        var robot = context.getRobotItem(context.curRobot);
        var onPorte =
          context.getItems(robot.row, robot.col, { category: "pncSign" })
            .length == 1;
        if (!onPorte) {
          context.success = false;
          throw "Bozok is not at PNC !";
        }

        var asAllObjects = context.nbTransportedItems === 11;
        if (!asAllObjects) {
          context.success = false;
          throw "Bozok has not picked up all monsters";
        }
        context.success = true;
        throw "Congratulations !";
      }
    },
    computeGrade: function (context, message) {
      var rate = 0;
      if (context.success) {
        rate = 1;
      }
      return {
        successRate: rate,
        message: message,
      };
    },
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 4, 1, 1, 1, 1, 1, 6, 5, 1],
          [1, 1, 10, 10, 10, 10, 10, 1, 1, 1, 1],
          [6, 5, 11, 11, 2, 2, 1, 1, 1, 15, 1],
          [1, 1, 10, 10, 10, 10, 10, 10, 1, 1, 1],
          [1, 1, 1, 11, 2, 1, 2, 1, 1, 1, 1],
          [1, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1],
          [1, 1, 1, 11, 11, 2, 1, 1, 2, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
        ],
        initItems: [{ row: 7, col: 9, dir: 4, type: "robot" }],
      },
    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
