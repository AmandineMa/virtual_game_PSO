function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
      contextType: "paint",
      maxInstructions: {
         easy: 30,
         medium: 30,
         hard: 60
      },
      includeBlocks: {
         groupByCategory: {
            easy: true,
            medium: true,
            hard: true
         },
         generatedBlocks: {
            robot: ["north", "south", "east", "west", "dropObject"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["procedures_defnoreturn"],
               medium: ["procedures_defnoreturn", "controls_repeat_ext"],
               hard: ["procedures_defnoreturn", "controls_repeat_ext"]
            }
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1],
                   [1, 1, 3, 1, 1, 3, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 0, type: "red_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1],
                   [1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 3, 3, 1, 1],
                   [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1]
               ],
            initItems: [
                  { row: 5, col: 0, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1],
                   [1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1],
                   [1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1],
                   [1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1],
                   [1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1],
                   [1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1],
                   [1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 1],
                   [1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1]
               ],
            initItems: [
                  { row: 11, col: 0, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
