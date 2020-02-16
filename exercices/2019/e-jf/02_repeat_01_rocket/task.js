function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
   	contextType: "rocket",
      maxInstructions: {
            easy: 6,
            medium: 6,
            hard: 10
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["left", "right", "forward"]
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
                   [1, 1, 1, 1, 3],
                   [1, 5, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [3, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 7, col: 1, dir: 3, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [3, 1, 1, 1, 1],
                   [1, 1, 1, 5, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 7, col: 1, dir: 3, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 3],
                   [1, 1, 1, 1, 1],
                   [1, 1, 4, 1, 1],
                   [1, 1, 4, 1, 1],
                   [3, 1, 4, 1, 1],
                   [1, 1, 4, 1, 1],
                   [1, 1, 4, 5, 1],
                   [1, 1, 4, 1, 1],
               ],
            initItems: [
                  { row: 7, col: 1, dir: 3, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
