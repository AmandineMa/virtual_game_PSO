function initTask(subTask) {

  subTask.gridInfos = {
    contextType: "exo_bonhomme_hors_eau",

    checkEndCondition: robotEndConditions.checkBothReachAndCollect,

    hasGravity: true,
    hideSaveOrLoad: true,
    actionDelay: 400,

    maxInstructions: 15,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "withdrawObject",
          "hasAKey",
          "hasDiamond",
        ],
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat", "controls_if"],
      },
    },
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 16, 1, 1, 1, 1, 1, 13, 1, 1],
          [1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1],
          [1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        ],
        initItems: [{ row: 7, col: 9, dir: 2, type: "robot" },
                    { row: 3, col: 2, dir: 0, type: "diamantJaune" },
                    { row: 3, col: 3, dir: 0, type: "diamantJaune" },
                    { row: 3, col: 4, dir: 0, type: "cle" },
                    { row: 3, col: 5, dir: 0, type: "cle" },
                    { row: 5, col: 3, dir: 0, type: "diamantJaune" },
                    { row: 5, col: 4, dir: 0, type: "cle" },
                    { row: 5, col: 6, dir: 0, type: "cle" },
                    { row: 7, col: 3, dir: 0, type: "diamantJaune" },
                    { row: 7, col: 4, dir: 0, type: "diamantJaune" },
                    { row: 7, col: 5, dir: 0, type: "cle" },
                    { row: 7, col: 8, dir: 0, type: "cle" },],
      },
    ],
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
