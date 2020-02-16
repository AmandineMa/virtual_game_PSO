function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
      contextType: "sokoban",
		maxInstructions: {
            easy: 5,
            medium: 6,
            hard: 15
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["left", "right", "forward", "pushObject"]
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
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
						 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" },
                  { row: 3, col: 2, type: "box" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
						 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
						 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" },
                  { row: 3, col: 6, type: "box" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
						 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" },
                  { row: 3, col: 2, type: "box" },
						{ row: 3, col: 3, type: "box" },
						{ row: 3, col: 4, type: "box" },
						{ row: 3, col: 5, type: "box" },
						{ row: 3, col: 6, type: "box" },
						{ row: 3, col: 7, type: "box" },
						{ row: 3, col: 8, type: "box" },
						{ row: 3, col: 9, type: "box" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
