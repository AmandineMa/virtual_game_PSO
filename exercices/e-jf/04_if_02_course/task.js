function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
      contextType: "course",
      maxInstructions: 10,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               shared: ["east", "north", "south"],
               easy: ["obstacleEast"],
               medium: ["obstacleNorth"],
               hard: ["obstacleNorth", "obstacleEast"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               shared: ["controls_if", "controls_if_else"],
               easy: [],
               medium: ["controls_repeat"],
               hard: ["controls_if", "controls_repeat"]
            }
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 1, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                   
               ],
            initItems: [
                  { row: 2, col: 3, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 1, 1, 1, 3, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                   
               ],
            initItems: [
                  { row: 2, col: 3, type: "red_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                   
               ],
            initItems: [
                  { row: 8, col: 4, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                   
               ],
            initItems: [
                  { row: 8, col: 4, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 1, 2, 2, 2],
                   [2, 2, 2, 2, 1, 1, 1, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                   
               ],
            initItems: [
                  { row: 8, col: 4, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                   
               ],
            initItems: [
                  { row: 8, col: 4, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;

}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   
