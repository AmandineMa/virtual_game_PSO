function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
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
      diamant: {
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
      }
    },

    maxInstructions: 70,
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
          context.nbTransportedItems === 1 &&
          context.transportedItem.category === "diamant";

        if (hasDiamant) {
          context.success = true;
          throw "Bravo, Bozok a récupéré le diamant !";
        }
        context.success = false;
        throw "Bozok n'a pas récupéré le diamant";
      }
    },
    computeGrade: function(context, message) {
      return {
        successRate: rcontext.success ? 1 : 0,
        message: message
      };
    }
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 6, 1, 1],
          [1, 1, 3, 1, 6, 1, 1],
          [1, 1, 1, 1, 1, 5, 1],
          [1, 6, 2, 2, 3, 2, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 2, 2, 2, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [4, 4, 4, 4, 4, 4, 4]
        ],
        initItems: [{ row: 4, col: 2, dir: 1, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
