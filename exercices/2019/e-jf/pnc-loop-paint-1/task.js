function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
   	contextType: "paint",
      bagInit: {
        count: 200,
        type: "paint"
      },
      maxInstructions: 20,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south", "dropObject"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, type: "red_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 0, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1],
                   [1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1],
                   [1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1],
                   [1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1]
               ],
            initItems: [
                  { row: 6, col: 0, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
