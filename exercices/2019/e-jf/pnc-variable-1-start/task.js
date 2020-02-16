function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: ["extra_variable"],
		contextType: "help",
      maxInstructions: 10,
      includeBlocks: {
         groupByCategory: {
            easy: false,
            medium: false,
            hard: false
         },
         generatedBlocks: {
            robot: ["east", "readNumber", "writeNumber"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         },
         variables: ["mémoire du robot"],
			variablesOnlyBlocks: ["get", "set"]
      },
      checkEndCondition: {
        easy: robotEndFunctionGenerator.allNumbersWritten([{row: 1, col: 5, value: function() {
			  return this.getItemsOn(1, 5, function(obj) { return obj.answer !== undefined; })[0].answer;
		     }}]),
		}
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" },
						{ row: 1, col: 3, type: "number", value: 3 },
						{ row: 1, col: 5, type: "board", value: 0, answer: 3}
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
