function initTask(subTask) {
  subTask.gridInfos = {
    contextType: "exo_boat",
    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 15,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["east", "west", "north", "south", "withdrawObject"]
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
          [1, 1,23, 1,23, 1, 1],
          [1, 4,26, 5,25,4, 1],
          [1,29,28, 1,27,30, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [17, 17, 17, 17, 17, 17, 17],
          [20, 20, 21, 20, 21, 20, 20]
        ],
        initItems: [{ row: 5, col: 3, dir: 3, type: "robot" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
