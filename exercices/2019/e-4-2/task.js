function initTask(subTask) {
 

 subTask.gridInfos = {
    contextType: "exo_bonhomme_hors_eau",

    checkEndCondition: robotEndConditions.checkBothReachAndCollect,

    hasGravity: true,
    hideSaveOrLoad: true,
    actionDelay: 400,

    maxInstructions: 18,
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
        singleBlocks: ["controls_repeat", "controls_if"]
      }
    },
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [{ row: 6, col: 0, dir: 0, type: "robot" },
                    { row: 6, col: 3, dir: 0, type: "diamantJaune" },
                    { row: 6, col: 5, dir: 0, type: "cle" },
                    { row: 6, col: 6, dir: 0, type: "diamantJaune" },
                    { row: 6, col: 7, dir: 0, type: "cle" },
                    { row: 4, col: 2, dir: 0, type: "diamantJaune" },
                    { row: 4, col: 5, dir: 0, type: "cle" },
                    { row: 4, col: 6, dir: 0, type: "diamantJaune" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
