function initTask(subTask) {
 subTask.gridInfos = {
    contextType: "exo_bonhomme_hors_eau",
    hideSaveOrLoad: true,
    actionDelay: 200,

    maxInstructions: 4,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "jump"]
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
          [1, 1, 4, 4, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 4, 4, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [8, 9, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [{ row: 5, col: 1, dir: 0, type: "robot" },  { row: 1, col: 4, type: "star_auto_withdraw" }]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
