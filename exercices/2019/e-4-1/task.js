function initTask(subTask) {
  subTask.gridInfos = {
    contextType: "exo_bonhomme_hors_eau",

    checkEndCondition: robotEndConditions.checkBothReachAndCollect,

    hasGravity: true,
    hideSaveOrLoad: true,
    actionDelay: 400,


    maxInstructions: 7,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "withdrawObject",
          "hasAKey"
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
          [1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [{ row: 5, col: 0, dir: 0, type: "robot" },
                    { row: 5, col: 1, dir: 0, type: "cle" },
                    { row: 5, col: 3, dir: 0, type: "cle" },
                    { row: 5, col: 6, dir: 0, type: "cle" },
                    { row: 5, col: 7, dir: 0, type: "cle" },
                    { row: 5, col: 8, dir: 0, type: "cle" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
