function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
		showLabels: true,
      contextType: "paint",
      maxInstructions: {
         easy: 20,
         medium: 25,
         hard: 30
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               easy: ["east", "dropObject", "col"],
               medium: ["east", "west", "north", "dropObject", "col", "row"],
               hard: ["east", "north", "west", "dropObject", "col", "row"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "logic_compare", "math_number", "controls_if", "logic_operation"]
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 1, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 3, type: "red_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
                   [3, 3, 3, 3, 1, 1, 1, 3, 1, 1, 1],
                   [3, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 10, col: 0, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                   [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 0, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
