function initTask(subTask) {
	subTask.gridInfos = {
		contextType: "marbles",
		languageStrings: {
		  blocklyRobot_lib: {
			 messages: {
				successContainersFilled: {
				  easy: "Bravo, vous avez rangé la bille !",
				  medium: "Bravo, vous avez rangé toutes les billes !",
				  hard: "Bravo, vous avez rangé toutes les billes !"
				},
				failureContainersFilled: {
				  easy: "La bille n'est pas rangé dans le trou !",
				  medium: "Les billes ne sont pas toutes bien rangées !",
				  hard: "Les billes ne sont pas toutes bien rangées !"
				}
			 }
		  }  
		},
		maxInstructions: 15,
		includeBlocks: {
			groupByCategory: false,
			generatedBlocks: {
				robot: {
					easy: ["east", "withdrawObject", "dropObject", "onContainer"],
					medium: ["east", "west", "south", "withdrawObject", "dropObject", "onContainer", "onObject"],
					hard: ["east", "west", "south", "withdrawObject", "dropObject", "onContainer", "onObject"]
				}
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: {
					easy: ["controls_whileUntil", "logic_negate"],
					medium: ["controls_repeat", "controls_whileUntil", "logic_negate"],
					hard: ["controls_whileUntil", "logic_negate", "controls_repeat"]
				}
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
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 0, col: 0, type: "red_robot" },
						{ row: 0, col: 1, type: "marble" },
						{ row: 1, col: 1, type: "marble" },
						{ row: 2, col: 1, type: "marble" },
						{ row: 3, col: 1, type: "marble" },
						{ row: 4, col: 1, type: "marble" },
						{ row: 5, col: 1, type: "marble" },
					]
			},
			{
				tiles: [
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 0, col: 0, type: "red_robot" },
						{ row: 0, col: 1, type: "marble" },
						{ row: 1, col: 1, type: "marble" },
						{ row: 2, col: 1, type: "marble" },
						{ row: 3, col: 1, type: "marble" }
					]
			}
		],
		hard: [
			{
				tiles: [
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
						 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
					],
				initItems: [
						{ row: 0, col: 0, type: "red_robot" },
						{ row: 1, col: 1, type: "marble" },
						{ row: 2, col: 4, type: "marble" },
						{ row: 3, col: 3, type: "marble" },
						{ row: 4, col: 2, type: "marble" },
						{ row: 5, col: 1, type: "marble" }
					]
			}
		]
	};

	initBlocklySubTask(subTask);
	displayHelper.thresholdEasy = 5000;
	displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
