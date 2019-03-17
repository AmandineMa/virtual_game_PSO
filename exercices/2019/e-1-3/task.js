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

      caiseJaune: {
        num: 6,
        img: "../images/objects/fond_vert/caisse_jaune.png",
        side: cellSide,
        isObstacle: true
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
        isObstacle: true
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

      diamantJaune: {
        num: 11,
        img: "../images/objects/fond_vert/diamant_jaune.png",
        side: cellSide,
        category: "diamant",
        isObstacle: false,
        isTransportable: true
      }
    },

    maxInstructions: 25,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["north", "south", "east", "west", "pickTransportable"]
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
        var hasDiamant =
          context.nbTransportedItems === 2 &&
          context.transportedItem.category === "diamant";

        if (hasDiamant) {
          context.success = true;
          throw "Bravo, Bozok a récupéré les diamants !";
        }
        context.success = false;
        throw "Bozok n'a pas récupéré les diamants";
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
          [1, 1, 2, 1, 3, 1, 1],
          [1, 5, 2, 1, 3, 11, 1],
          [1, 3, 3, 1, 2, 2, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [4, 4, 6, 6, 6, 4, 4],
          [10, 10, 10, 10, 10, 10, 10],
          [10, 10, 10, 10, 10, 10, 10]
        ],
        initItems: [{ row: 4, col: 3, dir: 1, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
