function initTask(subTask) {

  subTask.gridInfos = {
     contextType: "exo_bonhomme_hors_eau",

    checkEndCondition: robotEndConditions.checkBothReachAndCollect,

    hasGravity: true,
    hideSaveOrLoad: true,
    actionDelay: 400,
    maxInstructions: 21,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "withdrawObject",
          "hasAKey",
          "hasDiamond"
        ]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat", "controls_if","logic_operation"]
      }
    },
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
        ],
        initItems: [{ row: 8, col: 0, dir: 0, type: "robot" },
                    { row: 8, col: 2, dir: 0, type: "cle" },
                    { row: 8, col: 4, dir: 0, type: "cle" },
                    { row: 8, col: 5, dir: 0, type: "diamantJaune" },
                    { row: 8, col: 8, dir: 0, type: "cle" },
                    { row: 8, col: 10, dir: 0, type: "diamantJaune" },
                    { row: 6, col: 6, dir: 0, type: "cle" },
                    { row: 6, col: 9, dir: 0, type: "diamantJaune" },
                    { row: 6, col: 10, dir: 0, type: "cle" },
                    { row: 4, col: 6, dir: 0, type: "diamantJaune" },
                    { row: 4, col: 7, dir: 0, type: "cle" },
                    { row: 4, col: 8, dir: 0, type: "cle" },
                    { row: 4, col: 9, dir: 0, type: "cle" },
                    { row: 2, col: 6, dir: 0, type: "cle" },
                    { row: 2, col: 9, dir: 0, type: "diamantJaune" },
                    { row: 2, col: 10, dir: 0, type: "diamantJaune" }]
        }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
