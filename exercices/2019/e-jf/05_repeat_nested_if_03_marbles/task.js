function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
   	contextType: "marbles",
      maxInstructions: 22,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "withdrawObject", "dropObject", "onObject", "onContainer"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, type: "red_robot" },
                  { row: 1, col: 1, type: "marble" },
                  { row: 1, col: 4, type: "marble" },
                  { row: 1, col: 9, type: "marble" },
                  { row: 1, col: 13, type: "marble" },
                  { row: 1, col: 15, type: "marble" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1]
               ],
            initItems: [
                  { row: 7, col: 0, type: "red_robot" },
                  { row: 1, col: 7, type: "marble" },
                  { row: 2, col: 1, type: "marble" },
                  { row: 3, col: 3, type: "marble" },
                  { row: 4, col: 4, type: "marble" },
                  { row: 5, col: 2, type: "marble" },
                  { row: 6, col: 3, type: "marble" },
                  { row: 7, col: 1, type: "marble" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1]
               ],
            initItems: [
                  { row: 7, col: 0, type: "red_robot" },
                  { row: 1, col: 8, type: "marble" },
                  { row: 2, col: 2, type: "marble" },
                  { row: 3, col: 1, type: "marble" },
                  { row: 4, col: 5, type: "marble" },
                  { row: 5, col: 8, type: "marble" },
                  { row: 6, col: 11, type: "marble" },
                  { row: 7, col: 1, type: "marble" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
