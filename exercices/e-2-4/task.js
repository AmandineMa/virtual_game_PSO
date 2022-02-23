function initTask(subTask) {

  subTask.gridInfos = {
     contextType: "exo_bonhomme_hors_eau",
    checkEndCondition: robotEndConditions.checkAllLocksOpened,
    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 11,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: [
          "forward",
          "turnAround",
          "jump",
          "withdrawObject",
          "openLocker1KeyForNLockers"
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
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1,10,10,10,10,10,10],
          [4, 4, 4, 4, 4, 4, 4],
          [1, 1, 1, 1, 1, 1, 1],
          [7, 8, 8, 8, 8, 8, 9],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [{ row: 5, col: 0, dir: 0, type: "robot" },{ row: 5, col: 6, dir: 0, type: "cle" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
