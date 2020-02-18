function initTask(subTask) {
  subTask.gridInfos = {
    conceptViewer: ["extra_variable"],
    contextType: "paint",
    maxInstructions: {
      easy: 15,
      medium: 25,
      hard: 30
    },
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: true,
        hard: true
      },
      generatedBlocks: {
        robot: {
          easy: ["east", "readNumber", "dropObject"],
          medium: ["east", "west", "south", "readNumber", "dropObject"],
          hard: ["east", "west", "south", "readNumber", "dropObject"]
        }
      },
      standardBlocks: {
        includeAll: false,
        wholeCategories: {
          easy: [],
          medium: ["variables"],
          hard: ["variables"]
        },
        singleBlocks: {
          easy: ["controls_repeat_ext"],
          medium: ["controls_repeat_ext"],
          hard: ["controls_repeat_ext", "math_arithmetic", "math_number"]
        }
      },
      variables: {
        easy: ["nbBlackPoints"],
        medium: [],
        hard: []
      }
    }
  };

  subTask.data = {
    easy: [
      {
        tiles: [[1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1]],
        initItems: [
          { row: 0, col: 0, type: "red_robot" },
          { row: 0, col: 1, value: 5, type: "number" }
        ]
      },
      {
        tiles: [[1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1]],
        initItems: [
          { row: 0, col: 0, type: "red_robot" },
          { row: 0, col: 1, value: 7, type: "number" }
        ]
      }
    ],
    medium: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 1],
          [1, 1, 3, 3, 3, 3, 3, 1],
          [1, 1, 3, 3, 3, 3, 3, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 1, col: 1, value: 3, type: "number" },
          { row: 1, col: 2, value: 5, type: "number" }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 1, col: 1, value: 4, type: "number" },
          { row: 1, col: 2, value: 6, type: "number" }
        ]
      }
    ],
    hard: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 1],
          [1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 1, col: 1, value: 5, type: "number" }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1],
          [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 1, col: 1, value: 8, type: "number" }
        ]
      }
    ]
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
