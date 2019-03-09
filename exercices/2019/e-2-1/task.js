function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
        robot: 		{ img: "../images/robot/robot_rose.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 3   },
        ciel: 		{ num: 1, img: "../images/fonds/ciel.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 
		terreTop: 	{ num: 2, img: "../images/fonds/terre_top.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false,  team: 0, zOrder: 0},   
		terre:		{ num: 3, img: "../images/fonds/terre.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 
		
		point: 		{ num: 4, img: "../images/objects/fond_ciel/point_rose.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, color: "point_rose" , team: 0, zOrder: 0},  
		mouche:		{ num: 5, img: "../images/objects/fond_ciel/mouche.gif", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 		
				
		barriere_g:{ num: 7, img: "../images/objects/fond_ciel/barriere_gauche.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 	
		barriere_d:{ num: 8, img: "../images/objects/fond_ciel/barriere_droite.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 	
		
		n_g:		{ num: 9, img: "../images/objects/fond_ciel/nuage_gauche.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 	
		n_d:		{ num: 10, img: "../images/objects/fond_ciel/nuage_droit.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 	
		
		
      },
	  
      maxInstructions: 3,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["north", "south",  "east", "west"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         },
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
			 var robot = context.getRobotItem(context.curRobot);
			 var paints = context.getItems(robot.row, robot.col, {color: "point_rose"});
			 if (paints.length != 0) {
				context.success = true;
				throw("Bravo, Bozok a atteint la pâte gluante !");
			 }
            context.success = false;
            throw("Bozok n'a pas atteint la pâte gluante !");
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
					[1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 5, 1],
					[1, 9, 10, 1, 1, 1, 1],
					[1, 1, 1, 9, 10, 1, 1],
					[1, 7, 8, 1, 1, 4, 1],
					[2, 2, 2, 2, 2, 2, 2],
					[3, 3, 3, 3, 3, 3, 3],
					[3, 3, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 4, col: 0, dir: 4, type: "robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   