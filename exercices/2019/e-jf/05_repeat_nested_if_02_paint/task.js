function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
		contextType: "paint",
      maxInstructions: 10,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "south", "dropObject", "onContainer"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_repeat", "controls_if"],
               easy: [],
               medium: [],
               hard: ["controls_if_else"]
            }
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 3, 3, 3, 1, 1, 3, 3, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, type: "red_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1],
                   [1, 1, 1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 0, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 0, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   
