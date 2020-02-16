function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      conceptViewer: ["extra_variable"],
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         red_robot: { img: "red_robot.png", side: 80, nbStates: 1, isObstacle: true, offsetX: -11, category: "robot", team: 0, zOrder: 2 },
         0: { num: 100, side: cellSide, category: "number", value: 0 },
         1: { num: 101, side: cellSide, category: "number", value: 1 },
         2: { num: 2, side: cellSide, category: "number", value: 2 },
         3: { num: 3, side: cellSide, category: "number", value: 3 },
         4: { num: 4, side: cellSide, category: "number", value: 4 },
         5: { num: 5, side: cellSide, category: "number", value: 5 },
         6: { num: 6, side: cellSide, category: "number", value: 6 },
         7: { num: 7, side: cellSide, category: "number", value: 7 },
         8: { num: 8, side: cellSide, category: "number", value: 8 },
         9: { num: 9, side: cellSide, category: "number", value: 9 },
         10: { num: 10, side: cellSide, category: "number", value: 10 },
         11: { num: 11, side: cellSide, category: "number", value: 11 },
         12: { num: 12, side: cellSide, category: "number", value: 12 },
         13: { num: 13, side: cellSide, category: "number", value: 13 },
         14: { num: 14, side: cellSide, category: "number", value: 14 },
         15: { num: 15, side: cellSide, category: "number", value: 15 },
         16: { num: 16, side: cellSide, category: "number", value: 16 },
         17: { num: 17, side: cellSide, category: "number", value: 17 },
         18: { num: 18, side: cellSide, category: "number", value: 18 },
         19: { num: 19, side: cellSide, category: "number", value: 19 },
         20: { num: 20, side: cellSide, category: "number", value: 20 },
         21: { num: 21, side: cellSide, category: "number", value: 21 },
         22: { num: 22, side: cellSide, category: "number", value: 22 },
         23: { num: 23, side: cellSide, category: "number", value: 23 },
         24: { num: 24, side: cellSide, category: "number", value: 24 },
         25: { num: 25, side: cellSide, category: "number", value: 25 },
         26: { num: 26, side: cellSide, category: "number", value: 26 },
         27: { num: 27, side: cellSide, category: "number", value: 27 },
         28: { num: 28, side: cellSide, category: "number", value: 28 },
         29: { num: 29, side: cellSide, category: "number", value: 29 },
         30: { num: 30, side: cellSide, category: "number", value: 30 },
         31: { num: 31, side: cellSide, category: "number", value: 31 },
         32: { num: 32, side: cellSide, category: "number", value: 32 },
         33: { num: 33, side: cellSide, category: "number", value: 33 },
         34: { num: 34, side: cellSide, category: "number", value: 34 },
         35: { num: 35, side: cellSide, category: "number", value: 35 },
         36: { num: 36, side: cellSide, category: "number", value: 36 },
         37: { num: 37, side: cellSide, category: "number", value: 37 },
         38: { num: 38, side: cellSide, category: "number", value: 38 },
         39: { num: 39, side: cellSide, category: "number", value: 39 },
         40: { num: 40, side: cellSide, category: "number", value: 40 },
         41: { num: 41, side: cellSide, category: "number", value: 41 },
         42: { num: 42, side: cellSide, category: "number", value: 42 },
         43: { num: 43, side: cellSide, category: "number", value: 43 },
         44: { num: 44, side: cellSide, category: "number", value: 44 },
         45: { num: 45, side: cellSide, category: "number", value: 45 },
         46: { num: 46, side: cellSide, category: "number", value: 46 },
         47: { num: 47, side: cellSide, category: "number", value: 47 },
         48: { num: 48, side: cellSide, category: "number", value: 48 },
         49: { num: 49, side: cellSide, category: "number", value: 49 },
         50: { num: 50, side: cellSide, category: "number", value: 50 },
         paint: { img: "paint.png", side: cellSide, category: "paint", color: "gris" }
      },
      maxInstructions: 40,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["forward", "numberUnder", "writeNumber"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat_ext", "controls_if", "logic_compare", "math_arithmetic", "math_number"]
         },
         variables: ["mémoire du robot"]
      },
      checkEndEveryTurn: true,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            for (var iRow = 0; iRow < context.tiles.length; iRow++) {
               var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
               var total = 0;
               for (var iCol = 0; iCol < row.length; iCol++) {
                  var items = context.getItems(iRow, iCol, {category: "number"});
                  var hasNumber = (items.length != 0);
                  if (hasNumber) {
                     var oldNumber = row[iCol];
                     var item = items[0];
                     var itemType = this.itemTypes[item.type];
                     if (oldNumber != 100) {
                        if (itemType.num != oldNumber) {
                           context.success = false;
                           throw("Vous ne devez modifier que les cases contenant un zéro.");
                        }
                        if(itemType.value >= 10)
                        {
                          total += itemType.value;
                        }
                     } else {
                        if (total != itemType.value) {
                           context.success = false;
                           throw("Nombre incorrect.");
                        }
                     }
                  }
               }
            }
            context.success = true;
            throw("Bravo, vous avez inscrit les bons nombres !");
         }
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 2, 12, 101, 4, 17, 1, 100, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 10, 4, 17, 2, 15, 1, 100, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "red_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
