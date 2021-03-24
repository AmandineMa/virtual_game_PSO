function initTask(subTask) {

subTask.gridInfos = {
    contextType: "exo_bonhomme_hors_eau",

    checkEndCondition: robotEndConditions.checkBothReachAndAllLocksOpened,

    hasGravity: true,
    hideSaveOrLoad: true,
    actionDelay: 400,
    maxFallAltitude: 5,

    maxInstructions: 10,
    includeBlocks: {
      groupByCategory: false,
      generatedBlocks: {
        robot: ["forward", "withdrawObject", "hasAKey", "jump", "openLocker1KeyFor1Locker"]
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
          [1, 1, 1, 1, 1, 15, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 10, 1, 1, 10, 1, 10, 1, 10, 1, 1],
          [1, 4, 1, 1, 4, 1, 4, 1, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 4, 1, 1, 4, 1, 4, 1, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12],
          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
        ],
        initItems: [{ row: 7, col: 0, dir: 0, type: "robot" },
                    { row: 7, col: 1, dir: 0, type: "cle" },
                    { row: 7, col: 4, dir: 0, type: "cle" },
                    { row: 7, col: 6, dir: 0, type: "cle" },
                    { row: 7, col: 8, dir: 0, type: "cle" },]
      }
    ]
  };

  initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
