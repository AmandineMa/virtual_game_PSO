function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: ["extra_nested_repeat"],
   	contextType: "marbles",
      bagSize: 1,
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "withdrawObject", "dropObject"]
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
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, type: "red_robot" },
                  { row: 1, col: 4, type: "marble" },
                  { row: 1, col: 9, type: "marble" },
                  { row: 1, col: 14, type: "marble" }
                  
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 4, col: 0, type: "red_robot" },
                  { row: 3, col: 2, type: "marble" },
                  { row: 2, col: 6, type: "marble" },
                  { row: 1, col: 10, type: "marble" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 6, col: 0, type: "red_robot" },
                  { row: 1, col: 1, type: "marble" },
                  { row: 2, col: 1, type: "marble" },
                  { row: 3, col: 1, type: "marble" },
                  { row: 4, col: 1, type: "marble" },
                  { row: 5, col: 1, type: "marble" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
