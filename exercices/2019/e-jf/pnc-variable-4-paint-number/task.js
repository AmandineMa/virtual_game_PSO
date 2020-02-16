function initTask(subTask) {
   subTask.gridInfos = {
      conceptViewer: ["extra_variable"],
   	contextType: "marbles",
      maxInstructions: {
         easy: 20,
         medium: 30,
         hard: 100
      },
      includeBlocks: {
         groupByCategory: {
           easy: false,
           medium: true,
           hard: true
         },
         generatedBlocks: {
            robot: {
               easy: ["north", "south", "west", "east", "withdrawObject", "dropObject", "readNumber", "writeNumber"],
               medium: ["north", "south", "west", "east", "withdrawObject", "dropObject"],
               hard: ["west", "east", "withdrawObject", "dropObject", "onObject"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
               easy: [],
               medium: [],
               hard: ["variables"]
            },
            singleBlocks: {
               easy: ["controls_repeat_ext"],
               medium: ["controls_repeat_ext", "math_number", "math_arithmetic"],
               hard: ["controls_repeat_ext", "controls_whileUntil", "controls_if", "controls_if_else", "logic_negate", "math_number", "math_arithmetic"]
            }
         },
         variables : {
           easy: ["nombre de billes"],
           medium: ["compteur de déplacements"]
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, type: "red_robot" },
                  { row: 9, col: 1, value: 4, type: "number"}
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, type: "red_robot" },
                  { row: 9, col: 1, value: 8, type: "number"}
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 3, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, type: "red_robot" },
                  { row: 9, col: 1, value: 5, type: "number"}
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                   [1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
                   [1, 1, 1, 1, 1, 1, 4, 1, 1, 1],
                   [1, 1, 1, 1, 1, 4, 1, 1, 1, 1],
                   [1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
                   [1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
                   [1, 4, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 3, 3, 3, 3, 3, 3, 3, 1]
               ],
            initItems: [
                  { row: 9, col: 0, type: "red_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 4, 4, 4, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 4, 4, 4, 4, 3, 3, 3, 3, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, type: "red_robot" }
               ]
         }
      ]      
   };

   initBlocklySubTask(subTask, window.stringsLanguage);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
