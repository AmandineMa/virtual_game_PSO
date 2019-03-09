function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
        robot: 		{ img: "../images/robot/robot_bleu.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 3   },
        ciel: 		{ num: 1, img: "../images/fonds/ciel.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 
	
		
		caise:		{ num: 2, img: "../images/objects/fond_ciel/caise.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 	
		caisePierre:	{ num: 3, img: "../images/objects/fond_ciel/caise_pierrre.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 	
	
		mer:		{ num: 4, img: "../images/objects/fond_ciel/mer.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 	
		terreTop:	{ num: 5, img: "../images/fonds/terre_top.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 
		terre: 		{ num: 6, img: "../images/fonds/terre.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 
		
		champi: 	{ num: 7, img: "../images/objects/fond_ciel/champigon.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 
	
		
		serrure: 	{ num: 8, img: "../images/objects/fond_ciel/serrure_jaune.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, color: "serrure" ,team: 0, zOrder: 0}, 
		cle: 		{ num: 9, img: "../images/objects/fond_ciel/cle.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, isTransportable:true, color: "cle" , team: 0, zOrder: 0}, 
		
		mouche: 	{ num: 10, img: "../images/objects/fond_ciel/mouche.gif", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 
		n_g:		{ num: 11, img: "../images/objects/fond_ciel/nuage_gauche.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 	
		n_d:		{ num: 12, img: "../images/objects/fond_ciel/nuage_droit.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 	
		
		
		terrea: 	{ num: 13, img: "../images/objects/fond_ciel/terre_arrondi.png", side: cellSide, category: "paint", isObstacle: true, hasColor: false, team: 0, zOrder: 0}, 
		cactus: 	{ num: 14, img: "../images/objects/fond_ciel/cactus.png", side: cellSide, category: "paint", isObstacle: false, hasColor: false, team: 0, zOrder: 0}, 

      },
	  
      maxInstructions: 11,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["north", "south",  "east", "west", "pickTransportable", "dropTransportable"]
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
			 
			 var hasAllKeys = context.nbTransportedItems ===3;
			 
			 if (hasAllKeys) {
				context.success = true;
				throw("Bravo, Goumo a ouvert la serrure !");
			 }
			 else {
				context.success = false;
				throw("Goumo n'a pas ouvert la serrure");
			 }
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
					[1, 11, 12, 1, 10, 1, 1],
					[1, 1, 1, 1, 1, 11, 12],
					[11, 12, 1, 1, 9, 1, 1],
					[1, 1, 1, 3, 3, 1, 1],
					[1, 1, 1, 1, 9, 1, 1],
					[1, 1, 1, 3, 3, 1, 1],
					[1, 1, 1, 1, 9, 1, 7],
					[1, 1, 13, 5, 5, 5, 5],
					[14, 1, 1, 6, 6, 6, 6],
					[5, 5, 5, 6, 6, 6, 6],
               ],
            initItems: [
                  { row: 8, col: 1, dir: 1, type: "robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   