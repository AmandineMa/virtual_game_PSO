function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
		contextType: "objects_in_space",
      maxInstructions: {
            easy: 10,
            medium: 12,
            hard: 15
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["left", "right", "forward", "withdrawObject", "obstacleInFront", "onObject"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
              shared: ["controls_whileUntil"],
              medium: ["logic_negate"],
              hard: ["logic_negate"]
            }
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 3],
                   [3, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 3, 2],
               ],
            initItems: [
                  { row: 8, col: 2, dir: 3, type: "green_robot" },
                  { row: 7, col: 2, type: "objet1" }, 
                  { row: 6, col: 2, type: "objet1" },
                  { row: 5, col: 2, type: "objet2" },    
                  { row: 4, col: 2, type: "objet2" },  
                  { row: 3, col: 2, type: "objet1" }, 
                  { row: 2, col: 2, type: "objet2" }                     
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [2, 2, 2, 3, 2, 2],
                   [3, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 6],
                   [2, 2, 2, 2, 2, 2],
               ],
            initItems: [
                  { row: 8, col: 0, dir: 0, type: "green_robot" },
                  { row: 7, col: 4, type: "objet2" },
                  { row: 6, col: 4, type: "objet1" },
                  { row: 5, col: 4, type: "objet1" },
                  { row: 4, col: 4, type: "objet2" },
                  { row: 3, col: 4, type: "objet2" },
                  { row: 2, col: 4, type: "objet1" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [2, 2, 2, 3, 2, 2],
                   [3, 2, 2, 2, 6, 2],
                   [2, 2, 2, 2, 2, 6],
                   [2, 6, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 6],
                   [2, 2, 2, 6, 2, 2],
                   [2, 2, 2, 2, 2, 2],
                   [2, 6, 2, 2, 2, 6],
                   [2, 2, 2, 2, 2, 2],
               ],
            initItems: [
                  { row: 5, col: 0, dir: 0, type: "green_robot" },
                  { row: 7, col: 4, type: "objet2" },
                  { row: 6, col: 4, type: "objet2" },
                  { row: 5, col: 4, type: "objet1" },
                  { row: 4, col: 4, type: "objet2" },
                  { row: 3, col: 4, type: "objet1" },
                  { row: 2, col: 4, type: "objet1" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
