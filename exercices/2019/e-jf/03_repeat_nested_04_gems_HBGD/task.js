function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: ["extra_nested_repeat"],
      contextType: "gems",
		maxInstructions: {
            easy: 8,
            medium: 6,
            hard: 9
         },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "south"]
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
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 2, dir: 0, type: "green_robot" },
						{ row: 8, col: 3, type: "gem" },
						{ row: 8, col: 4, type: "gem" },
						{ row: 8, col: 5, type: "gem" },
						{ row: 8, col: 7, type: "gem" },
						{ row: 8, col: 9, type: "gem" },
						{ row: 7, col: 9, type: "gem" },
						{ row: 5, col: 9, type: "gem" },
						{ row: 4, col: 9, type: "gem" },
						{ row: 2, col: 9, type: "gem" },
						{ row: 1, col: 9, type: "gem" },
						{ row: 1, col: 6, type: "gem" },
						{ row: 1, col: 5, type: "gem" },
						{ row: 1, col: 3, type: "gem" },
						{ row: 1, col: 2, type: "gem" },
						{ row: 2, col: 2, type: "gem" },
						{ row: 5, col: 2, type: "gem" },
						{ row: 6, col: 2, type: "gem" },
						{ row: 7, col: 2, type: "gem" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 1, dir: 1, type: "green_robot" },
						{ row: 1, col: 1, type: "gem" },
						{ row: 1, col: 2, type: "gem" },
						{ row: 1, col: 3, type: "gem" },
						{ row: 1, col: 4, type: "gem" },
						{ row: 1, col: 5, type: "gem" },
						{ row: 3, col: 5, type: "gem" },
						{ row: 3, col: 6, type: "gem" },
						{ row: 3, col: 7, type: "gem" },
						{ row: 3, col: 8, type: "gem" },
						{ row: 3, col: 9, type: "gem" },
						{ row: 5, col: 9, type: "gem" },
						{ row: 5, col: 10, type: "gem" },
						{ row: 5, col: 11, type: "gem" },
						{ row: 5, col: 12, type: "gem" },
						{ row: 5, col: 13, type: "gem" },
						{ row: 7, col: 13, type: "gem" },
						{ row: 7, col: 14, type: "gem" },
						{ row: 7, col: 15, type: "gem" },
						{ row: 7, col: 16, type: "gem" },
						{ row: 7, col: 17, type: "gem" }
						
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                   [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
						 [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
						 [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
						 [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
						 [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
						 [4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 7, col: 0, dir: 0, type: "green_robot" },
                  { row: 1, col: 1, type: "gem" },
                  { row: 1, col: 3, type: "gem" },
						{ row: 1, col: 5, type: "gem" },
						{ row: 1, col: 7, type: "gem" },
						{ row: 1, col: 9, type: "gem" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
