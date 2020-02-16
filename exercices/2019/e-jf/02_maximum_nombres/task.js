function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      conceptViewer: ["extra_variable"],
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         red_robot: { img: "red_robot.png", side: 80, nbStates: 1, isObstacle: true, offsetX: -11, category: "robot", team: 0, zOrder: 2 },
         "-10000000": {num:-10000000, img: "nombreCache.png", side: cellSide, category: "number", value: -10000000},
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
               
               // on prend pour valeur initiale la premiere des cases
               var items0 = context.getItems(1, 2, {category: "number"});
               var item0 = items0[0];
               var itemType0 = this.itemTypes[item0.type];
               var maxNb = itemType0.value;

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
                        maxNb = Math.max(itemType.value, maxNb);
                     } else {
                        if (maxNb != itemType.value) {
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
                   [1, 1, 2, 3, 4, 3, 2, 1, 100, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 5, 3, 2, 2, 1, 100, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "red_robot" }
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, -10000000, -10000000, -10000000, -10000000, -10000000, 1, 100, 1],
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
