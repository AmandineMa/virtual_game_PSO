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
      cle: {
        num: 2,
        img: "../images/objects/fond_gris/cle.png",
        side: cellSide,
        category: "key",
        isObstacle: false,
        isTransportable: true
      },
      gris: {
        num: 1,
        img: "../images/fonds/gris.png",
        side: cellSide,
        isObstacle: false
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
      }
    },

    maxInstructions: 7,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "pickTransportable", "hasAKey"]
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
          throw "Bozok n'est pas sur la porte";
        }

        var hasCles =
          context.nbTransportedItems === 4 &&
          context.transportedItem.category === "key";
        if (!hasCles) {
          context.success = false;
          throw "Bozok n'a pas récupré toutes les clés";
        }
        context.success = true;
        throw "Bravo ! Mission accomplie";
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
          [1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [1, 2, 1, 2, 1, 1, 2, 2, 2, 1, 4],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
          [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
        ],
        initItems: [{ row: 5, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
