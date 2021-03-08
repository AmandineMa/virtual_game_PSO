function initTask(subTask) {

   subTask.gridInfos = {
    contextType: "exo_boat",

    hideSaveOrLoad: true,
    actionDelay: 200,

    checkEndCondition: robotEndConditions.checkBothReachAndCollect,

    maxInstructions: 12,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["north", "south", "east", "west", "withdrawObject"]
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
          [1, 1, 1, 1, 34, 1, 1],
          [7, 31, 33, 31, 16, 17, 17],
          [9, 32, 33, 32, 22, 20, 20],
          [9, 33, 31, 32, 22, 20, 20],
          [9, 33, 32, 31, 22, 20, 20],
          [9, 32, 32, 33, 22, 20, 20],
          [9, 32, 31, 33, 22, 20, 20]
        ],
        initItems: [{ row: 1, col: 0, dir: 0, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
