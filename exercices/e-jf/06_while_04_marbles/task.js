function initTask(subTask) {
	subTask.gridInfos = {
      conceptViewer: true,
		contextType: "marbles",
		languageStrings: {
		  blocklyRobot_lib: {
			 messages: {
				successContainersFilled: "Bravo, vous avez rangé la bille !",
				failureContainersFilled: "La bille n'est pas rangée dans le trou !"
			 }
		  }  
		},
		maxInstructions: 15,
		includeBlocks: {
			groupByCategory: false,
			generatedBlocks: {
				robot: {
					easy: ["east", "withdrawObject", "dropObject", "onContainer"],
					medium: ["east", "west", "north", "withdrawObject", "dropObject", "onContainer", "onObject"],
					hard: ["east", "west", "north", "withdrawObject", "dropObject", "onContainer", "onObject", "gridEdgeEast"]
				}
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_whileUntil", "logic_negate"]
			}
		}
	};

	subTask.data = {
		easy: [
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1]
					],
				initItems: [
						{ row: 0, col: 0, type: "red_robot" },
						{ row: 0, col: 1, type: "marble" }
					]
			},
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 0, col: 0, type: "red_robot" },
						{ row: 0, col: 1, type: "marble" }
					]
			}
		],
		medium: [
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 5, col: 1, type: "red_robot" },
						{ row: 1, col: 1, type: "marble" }
					]
			},
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 5, col: 1, type: "red_robot" },
						{ row: 3, col: 1, type: "marble" }
					]
			}
		],
		hard: [
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 5, col: 1, type: "red_robot" },
						{ row: 5, col: 4, type: "marble" }
					]
			},
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 5, col: 1, type: "red_robot" },
						{ row: 5, col: 7, type: "marble" }
					]
			}
		]
	};

	initBlocklySubTask(subTask);
	displayHelper.thresholdEasy = 5000;
	displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
