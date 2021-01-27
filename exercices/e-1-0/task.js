function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    backgroundColor: "#abe3f5",
    hideSaveOrLoad: true,
    cellSide: cellSide,
    actionDelay: 200,
    itemTypes: {
      robot: {
        img: "../images/robot/ship.png",
        side: 70,
        nbStates: 9,
        isObstacle: true,
        offsetX: 0,
        category: "robot",
        team: 0,
        zOrder: 3
      },
      mer: {
        num: 1,
        img: "../images/fonds/mer.png",
        side: cellSide,
        isObstacle: false
      },
      ileTop: {
        num: 2,
        img: "../images/fonds/ile_top.png",
        side: cellSide,
        isObstacle: true
      },
      herbe: {
        num: 3,
        img: "../images/fonds/herbe.png",
        side: cellSide,
        isObstacle: true
      },

      star: {
        num: 4,
        img: "../images/objects/fond_mer/étoile.png",
        side: cellSide,
        category: "star",
        isObstacle: false,
        isTransportable: true
      },
      poisson: {
        num: 5,
        img: "../images/objects/fond_mer/poisson.png",
        side: cellSide,
        isObstacle: false
      },
    },

    maxInstructions: 6,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "pickTransportable"]
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
          context.transportedItem.category === "star";

        if (hasDiamant) {
          context.success = true;
          throw "Bien joué, le bateau a récupéré l'étoile !";
        }
        context.success = false;
        throw "Le bateau n'a pas récupéré l'étoile :(";
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
          [1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 4, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [2, 2, 2, 2, 2, 2, 2],
          [3, 3, 3, 3, 3, 3, 3],
          [3, 3, 3, 3, 3, 3, 3]
        ],
        initItems: [{ row: 3, col: 1, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
