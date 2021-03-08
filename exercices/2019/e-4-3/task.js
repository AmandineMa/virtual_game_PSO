function initTask(subTask) {

 subTask.gridInfos = {
    contextType: "exo_boat",

    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 14,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["north", "south", "east", "west", "withdrawObject","hasDiamond"]
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: [],
        singleBlocks: ["controls_repeat","controls_if"]
      }
    },
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 31, 32, 1, 33, 33, 1],
          [1, 32, 33, 33, 31, 32, 1],
          [1, 1, 32, 1, 1, 1, 1],
          [1, 33, 31, 33, 33, 1, 1],
          [1, 1, 1, 31, 31, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [{ row: 1, col: 1, dir: 1, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
