function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: true,
		contextType: "help",
      maxInstructions: 6,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["forward", "onGreen"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_whileUntil","controls_repeat", "logic_negate"]
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
			{
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   