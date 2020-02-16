function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
		contextType: "objects_in_space",
      maxInstructions: {
            easy: 10,
            medium: 20,
            hard: 30
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["left", "right", "forward", "obstacleInFront", "onObject", "withdrawObject"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_whileUntil", "logic_negate", "controls_if"]
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 11, col: 5, dir: 3, type: "green_robot" },
                  { row: 10, col: 5, type: "objet2" },
                  { row: 9, col: 5, type: "objet1" },
                  { row: 6, col: 5, type: "objet1" },
                  { row: 5, col: 5, type: "objet2" },
                  { row: 4, col: 5, type: "objet2" },
                  { row: 2, col: 5, type: "objet2" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [3, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 11, col: 5, dir: 3, type: "green_robot" },
                  { row: 10, col: 5, type: "objet2" },
                  { row: 1, col: 5, type: "objet1" }                  
               ]
         },
			{
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 11, col: 5, dir: 3, type: "green_robot" },
                  { row: 10, col: 5, type: "objet2" },
                  { row: 1, col: 5, type: "objet1" }                  
               ]
         },
			{
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 11, col: 5, dir: 3, type: "green_robot" },
                  { row: 10, col: 5, type: "objet2" },
                  { row: 1, col: 5, type: "objet1" }                  
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                   [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" },
                  { row: 9, col: 9, type: "objet1" },
                  { row: 6, col: 9, type: "objet2" },
                  { row: 4, col: 9, type: "objet1" },
                  { row: 7, col: 8, type: "objet2" },
                  { row: 1, col: 8, type: "objet2" },
                  { row: 9, col: 7, type: "objet1" },
                  { row: 6, col: 7, type: "objet1" },
                  { row: 3, col: 7, type: "objet2" },
                  { row: 8, col: 6, type: "objet1" },
                  { row: 5, col: 6, type: "objet2" },
                  { row: 4, col: 6, type: "objet1" },
                  { row: 7, col: 5, type: "objet2" },
                  { row: 6, col: 5, type: "objet2" },
                  { row: 9, col: 4, type: "objet1" },
                  { row: 3, col: 4, type: "objet2" },
                  { row: 1, col: 4, type: "objet1" },
                  { row: 10, col: 3, type: "objet1" },
                  { row: 7, col: 3, type: "objet2" },
                  { row: 5, col: 3, type: "objet2" },
                  { row: 2, col: 3, type: "objet1" },
                  { row: 8, col: 2, type: "objet1" },
                  { row: 4, col: 2, type: "objet1" },
                  { row: 3, col: 2, type: "objet2" },
                  { row: 1, col: 2, type: "objet2" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
