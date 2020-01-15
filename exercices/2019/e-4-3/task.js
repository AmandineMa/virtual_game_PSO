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
      }
    },

    maxInstructions: 14,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "north",
          "south",
          "east",
          "west",
          "pickTransportable",
          "hasADiamant"
        ]
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
        var hasDiamant =
          context.nbTransportedItems === 16 &&
          context.transportedItem.category === "diamant";

        if (hasDiamant) {
          context.success = true;
          throw "Congrats, Bozok has taken all diamonds !";
        }
        context.success = false;
        throw "Bozok has not taken all diamonds";
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
          [1, 1, 1, 1, 1, 1, 1],
          [1, 5, 6, 1, 7, 7, 1],
          [1, 6, 7, 7, 5, 6, 1],
          [1, 1, 6, 1, 1, 1, 1],
          [1, 7, 5, 7, 7, 1, 1],
          [1, 1, 1, 5, 5, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [{ row: 1, col: 1, dir: 1, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
