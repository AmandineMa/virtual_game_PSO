function initTask(subTask) {
  subTask.gridInfos = {
    conceptViewer: true,
    contextType: "paint",
    maxInstructions: {
      easy: 20,
      medium: 35,
      hard: 80
    },
    includeBlocks: {
      groupByCategory: {
        easy: false,
        medium: true,
        hard: true
      },
      generatedBlocks: {
        robot: {
          easy: ["east", "west", "south", "onContainer", "writeNumber"],
          medium: ["east", "west", "south", "onContainer", "writeNumber"],
          hard: ["east", "west", "north", "south", "onContainer", "writeNumber"]
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
          easy: ["controls_repeat", "controls_if", "math_number"],
          medium: [
            "controls_repeat",
            "controls_whileUntil",
            "controls_if",
            "controls_if_else",
            "math_number",
            "math_arithmetic",
            "logic_operation",
            "logic_compare"
          ],
          hard: [
            "controls_repeat_ext",
            "controls_whileUntil",
            "controls_if",
            "controls_if_else",
            "math_number",
            "math_arithmetic",
            "logic_operation",
            "logic_compare"
          ]
        }
      },
      variables: {
        easy: ["nbBlackPoints"],
        medium: [],
        hard: []
      }
    },
    limitedUses: {
      medium: [{ blocks: ["writeNumber"], nbUses: 1 }],
      hard: [{ blocks: ["writeNumber"], nbUses: 1 }]
    },
    checkEndCondition: {
      easy: robotEndFunctionGenerator.allNumbersWritten([
        {
          row: 1,
          col: 10,
          value: function() {
            return this.getItemsOn(1, 10, function(obj) {
              return obj.answer !== undefined;
            })[0].answer;
          }
        }
      ]),
      medium: robotEndFunctionGenerator.allNumbersWritten([
        {
          row: 6,
          col: 10,
          value: function() {
            return this.getItemsOn(6, 10, function(obj) {
              return obj.answer !== undefined;
            })[0].answer;
          }
        }
      ]),
      hard: robotEndFunctionGenerator.allNumbersWritten([
        {
          row: 8,
          col: 10,
          value: function() {
            return this.getItemsOn(8, 10, function(obj) {
              return obj.answer !== undefined;
            })[0].answer;
          }
        }
      ])
    }
  };

  subTask.data = {
    easy: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 3, 1, 3, 3, 1, 3, 1, 5, 1],
          [1, 3, 1, 3, 1, 1, 3, 3, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 3, 3, 1, 3, 1, 3, 1, 5, 1],
          [1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 1, col: 10, type: "board", value: 0, answer: 6 },
          { row: 2, col: 10, type: "board", value: 0, answer: 4 },
          { row: 3, col: 10, type: "board", value: 0, answer: 1 },
          { row: 4, col: 10, type: "board", value: 0, answer: 4 },
          { row: 5, col: 10, type: "board", value: 0, answer: 7 }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 3, 1, 1, 3, 3, 1, 1, 1, 5, 1],
          [1, 3, 1, 3, 1, 1, 3, 3, 3, 1, 5, 1],
          [1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 5, 1],
          [1, 3, 3, 3, 3, 1, 3, 1, 3, 1, 5, 1],
          [1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 1, col: 10, type: "board", value: 0, answer: 3 },
          { row: 2, col: 10, type: "board", value: 0, answer: 5 },
          { row: 3, col: 10, type: "board", value: 0, answer: 2 },
          { row: 4, col: 10, type: "board", value: 0, answer: 6 },
          { row: 5, col: 10, type: "board", value: 0, answer: 8 }
        ]
      }
    ],
    medium: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 4, 3, 3, 4, 1, 1, 1, 1],
          [1, 4, 3, 4, 1, 4, 3, 3, 3, 4, 1, 1],
          [1, 4, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1],
          [1, 4, 3, 3, 3, 4, 1, 4, 3, 4, 1, 1],
          [1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 6, col: 10, type: "board", value: 0, answer: 20 }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 4, 3, 4, 1, 1, 4, 3, 4, 1, 1],
          [1, 4, 3, 3, 3, 4, 1, 1, 4, 4, 1, 1],
          [1, 1, 4, 3, 3, 3, 3, 3, 3, 4, 1, 1],
          [1, 4, 3, 4, 1, 4, 3, 3, 3, 4, 1, 1],
          [1, 1, 4, 3, 3, 4, 1, 4, 3, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 6, col: 10, type: "board", value: 0, answer: 18 }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 4, 3, 4, 1, 4, 3, 3, 3, 4, 1, 1],
          [1, 1, 1, 1, 4, 3, 3, 4, 1, 1, 1, 1],
          [1, 4, 3, 3, 4, 1, 1, 4, 3, 4, 1, 1],
          [1, 1, 1, 1, 4, 3, 4, 1, 1, 1, 1, 1],
          [1, 1, 1, 4, 3, 3, 3, 3, 3, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 6, col: 10, type: "board", value: 0, answer: 15 }
        ]
      }
    ],
    hard: [
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 4, 4, 1, 3, 3, 3, 3, 1, 1],
          [1, 1, 1, 4, 4, 1, 3, 3, 3, 3, 1, 1],
          [1, 1, 1, 4, 4, 1, 3, 3, 3, 3, 1, 1],
          [1, 1, 1, 4, 4, 1, 3, 3, 3, 3, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 1, 1, 1, 1, 4, 4, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 8, col: 10, type: "board", value: 0, answer: 21 }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1],
          [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1],
          [1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 3, 3, 3, 1, 4, 4, 4, 1, 1],
          [1, 1, 1, 3, 3, 3, 1, 4, 4, 4, 1, 1],
          [1, 3, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 8, col: 10, type: "board", value: 0, answer: 14 }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
          [1, 1, 1, 3, 3, 3, 1, 1, 4, 4, 1, 1],
          [1, 1, 1, 3, 3, 3, 1, 1, 4, 4, 1, 1],
          [1, 3, 1, 3, 3, 3, 1, 1, 4, 4, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 8, col: 10, type: "board", value: 0, answer: 22 }
        ]
      },
      {
        tiles: [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1],
          [1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1],
          [1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1],
          [1, 3, 3, 1, 3, 1, 1, 4, 1, 1, 1, 1],
          [1, 3, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        initItems: [
          { row: 1, col: 0, type: "red_robot" },
          { row: 8, col: 10, type: "board", value: 0, answer: 25 }
        ]
      }
    ]
  };

  initBlocklySubTask(subTask);
  displayHelper.thresholdEasy = 5000;
  displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
