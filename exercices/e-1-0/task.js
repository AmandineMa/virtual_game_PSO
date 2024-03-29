function initTask(subTask) {

  subTask.gridInfos = {
    contextType: "exo_boat",
    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 8,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "left", "withdrawObject"]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: []
      }
    },
  };

  subTask.data = {
    easy: [
      {
        tiles: [
         [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [16, 17, 17, 17, 17, 17, 17],
          [22, 20, 21, 20, 20, 20, 20],
          [22, 20, 20, 20, 21, 20, 20]
        ],
        initItems: [{ row: 4, col: 0, dir: 0, type: "robot" },
                        { row: 3, col: 5, type: "star" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
