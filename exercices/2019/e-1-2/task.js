function initTask(subTask) {
  var cellSide = 60;

  subTask.gridInfos = {
    contextType: "exo_bonhomme",
    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 7,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["north", "east", "west", "withdrawObject"]
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
          [1, 1, 3, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 5, 4, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [2, 2, 2, 2, 2, 2, 2]
        ],
        initItems: [{ row: 6, col: 2, dir: 1, type: "robot" }, { row: 2, col: 4, type: "star" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
