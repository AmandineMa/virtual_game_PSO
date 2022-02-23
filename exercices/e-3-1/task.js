function initTask(subTask) {
  
subTask.gridInfos = {
    contextType: "exo_bonhomme_hors_eau",

    checkEndCondition: robotEndConditions.checkAllLocksOpened,

    hasGravity: true,
    hideSaveOrLoad: true,
    actionDelay: 400,

    maxInstructions: 13,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "withdrawObject",
          "openLocker1KeyFor1Locker"
        ]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat"]
      }
    },
    };

  subTask.data = {
    easy: [
      {
        tiles: [
          [11, 1, 1, 1, 1, 1, 10],
          [4, 4, 4, 4, 4, 4, 4],
          [11, 1, 1, 1, 1, 1, 10],
          [4, 4, 4, 4, 4, 4, 4],
          [11, 1, 1, 1, 1, 1, 10],
          [4, 4, 4, 4, 4, 4, 4],
          [11, 1, 1, 1, 1, 1, 10],
          [4, 4, 4, 4, 4, 4, 4],
          [1, 1, 1, 1, 1, 1, 1],
          [7, 8, 8, 8, 8, 8, 9]
        ],
        initItems: [{ row: 8, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
