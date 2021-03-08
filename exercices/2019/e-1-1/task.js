function initTask(subTask) {

  subTask.gridInfos = {
    contextType: "exo_boat",
    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 10,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["east", "south", "west", "withdrawObject"]
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

          [6, 7, 1, 1, 1, 1, 1],
          [8, 9, 1, 1, 1, 1, 1],
          [8, 12,11,7, 1, 1, 1],
          [13,14,14,15,1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 3, 17,17,17],
          [1, 1, 1, 22,21,20,20],
          [1, 1, 1, 22,20,20,21]
        ],
        initItems: [{ row: 0, col: 2, dir: 1, type: "robot" },
                        { row: 5, col: 2, type: "star" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
