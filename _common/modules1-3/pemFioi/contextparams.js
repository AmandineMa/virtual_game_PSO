var contextParams = {
    none: {
      hideSaveOrLoad: true,
      actionDelay: 200,
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      cellSide: 60
    },
    exo_boat: {
      backgroundColor: "#abe3f5",
       itemTypes: {
      robot: {
        img: "../images/robot/ship.png",
        side: 70,
        nbStates: 9,
        isObstacle: true,
        offsetX: 0,
        isRobot: true,
        team: 0,
        zOrder: 3
      },
      mer: {
        num: 1,
        img: "../images/fonds/mer.png",
        side: 60,
        isObstacle: false
      },

     ile1: {
        num: 3,
        img: "../images/fonds/tile_06.png",
        side: 60,
        isObstacle: true
      },
    ileTop1: {
        num: 16,
        img: "../images/fonds/tile_06.png",
        side: 60,
        isObstacle: true
      },
    ileTop2: {
        num: 17,
        img: "../images/fonds/tile_07.png",
        side: 60,
        isObstacle: true
      },
     ileTop3: {
        num: 18,
        img: "../images/fonds/tile_08.png",
        side: 60,
        isObstacle: true
      },
    ileTop4: {
        num: 19,
        img: "../images/fonds/tile_09.png",
        side: 60,
        isObstacle: true
      },
    ileSide1: {
        num: 22,
        img: "../images/fonds/tile_22.png",
        side: 60,
        isObstacle: true
      },
      herbe1: {
        num: 20,
        img: "../images/fonds/tile_23.png",
        side: 60,
        isObstacle: true
      },
      herbe2: {
        num: 21,
        img: "../images/fonds/tile_24.png",
        side: 60,
        isObstacle: true
      },
      star: {
        num: 4,
        img: "../images/objects/fond_mer/étoile.png",
        side: 60,
        isWithdrawable: true,
        autoWithdraw: false,
        zOrder: 1
      },
      poisson: {
        num: 5,
        img: "../images/objects/fond_mer/poisson.png",
        side: 60,
        isObstacle: false
      },
      sable1: {
        num: 6,
        img: "../images/fonds/tile_01.png",
        side: 60,
        isObstacle: true
      },
      sable2: {
        num: 7,
        img: "../images/fonds/tile_03.png",
        side: 60,
        isObstacle: true
      },
      sable3: {
        num: 8,
        img: "../images/fonds/tile_17.png",
        side: 60,
        isObstacle: true
      },
      sable4: {
        num: 9,
        img: "../images/fonds/tile_19.png",
        side: 60,
        isObstacle: true
      },
      sable0: {
        num: 10,
        img: "../images/fonds/tile_18.png",
        side: 60,
        isObstacle: true
      },
      sable5: {
        num: 11,
        img: "../images/fonds/tile_02.png",
        side: 60,
        isObstacle: true
      },
      sable6: {
        num: 12,
        img: "../images/fonds/tile_20.png",
        side: 60,
        isObstacle: true
      },
      sable7: {
        num: 13,
        img: "../images/fonds/tile_33.png",
        side: 60,
        isObstacle: true
      },
      sable8: {
        num: 14,
        img: "../images/fonds/tile_34.png",
        side: 60,
        isObstacle: true
      },
      sable9: {
        num: 15,
        img: "../images/fonds/tile_35.png",
        side: 60,
        isObstacle: true
      },
    chateau1: {
        num: 23,
        img: "../images/objects/fond_mer/tile_15.png",
        side: 60,
        isObstacle: true
      },
    chateau2: {
        num: 24,
        img: "../images/objects/fond_mer/tile_29.png",
        side: 60,
        isObstacle: true
      },
    chateau3: {
        num: 25,
        img: "../images/objects/fond_mer/tile_31.png",
        side: 60,
        isObstacle: true
      },
 chateau4: {
        num: 26,
        img: "../images/objects/fond_mer/tile_32.png",
        side: 60,
        isObstacle: true
      },
 chateau5: {
        num: 27,
        img: "../images/objects/fond_mer/tile_93.png",
        side: 60,
        isObstacle: true
      },
 chateau6: {
        num: 28,
        img: "../images/objects/fond_mer/tile_94.png",
        side: 60,
        isObstacle: true
      },
 chateau7: {
        num: 29,
        img: "../images/objects/fond_mer/tile_46.png",
        side: 60,
        isObstacle: true
      },
 chateau8: {
        num: 30,
        img: "../images/objects/fond_mer/tile_62.png",
        side: 60,
        isObstacle: true
      },
    diamantOrange: {
        num: 31,
        side: 60,
        img: "../images/objects/fond_ciel/diamant_orange.png",
        isWithdrawable: true,
        isObstacle: false,
        isDiamond: true,
        zOrder: 2
      },
      diamantJaune: {
        num: 32,
        side: 60,
        img: "../images/objects/fond_ciel/diamant_jaune.png",
        isWithdrawable: true,
        isObstacle: false,
        isDiamond: true,
        zOrder: 1
      },
      diamantBleu: {
        num: 33,
        side: 60,
        img: "../images/objects/fond_ciel/diamant_vert.png",
        isWithdrawable: true,
        isObstacle: false,
        isDiamond: true,
        zOrder: 1
      },
      blue_flag: {
        num: 34,
        img: "../images/objects/fond_vert/blue_flag.png",
        side: 60,
        isExit: true,
        isObstacle: false
      }
    },
      checkEndCondition: robotEndConditions.checkPickedAllWithdrawables
    },

    exo_bonhomme: {
      backgroundColor: "#abe3f5",
      hasGravity : true,
       itemTypes: {
      robot: {
        img: "../images/robot/robot_rose.png",
        side: 70,
        nbStates: 9,
        isObstacle: true,
        offsetX: 0,
        isRobot: true,
        team: 0,
        zOrder: 3
      },
      mer: {
        num: 1,
        img: "../images/fonds/eau.png",
        side: 60,
        isObstacle: false
      },
    algue: {
        num: 2,
        img: "../images/objects/fond_mer/fishTile_032.png",
        side: 60,
        zOrder: 1
      },
    poissonGlobe: {
        num: 3,
        img: "../images/objects/fond_mer/fishTile_101.png",
        side: 60,
        zOrder: 1
      },
    poissonLongPart1: {
        num: 4,
        img: "../images/objects/fond_mer/fishTile_107.png",
        side: 60,
        zOrder: 1
      }, 
    poissonLongPart2: {
        num: 5,
        img: "../images/objects/fond_mer/fishTile_106.png",
        side: 60,
        zOrder: 1
      }, 
    star: {
        num: 6,
        img: "../images/objects/fond_mer/étoile.png",
        side: 60,
        isWithdrawable: true,
        autoWithdraw: false,
        zOrder: 1
      },
    },
      checkEndCondition: robotEndConditions.checkPickedAllWithdrawables
    },
 exo_bonhomme_hors_eau: {
      backgroundColor: "#abe3f5",
      hasGravity : true,
       itemTypes: {
      robot: {
        img: "../images/robot/robot_rose.png",
        side: 70,
        nbStates: 9,
        isObstacle: true,
        offsetX: 0,
        isRobot: true,
        team: 0,
        zOrder: 3
      },
      mer: {
        num: 1,
        img: "../images/fonds/eau.png",
        side: 60,
        isObstacle: false
      },
mer_top: {
        num: 2,
        img: "../images/fonds/eau_top.png",
        side: 60,
        isObstacle: false
      },
 ciel: {
        num: 3,
        img: "../images/fonds/ciel.png",
        side: 60,
        isObstacle: false
      },
 caisse: {
        num: 4,
        img: "../images/objects/fond_ciel/caise.png",
        side: 60,
        zOrder: 1,
    isObstacle: true
      }, 
    star: {
        num: 6,
        img: "../images/objects/fond_mer/étoile.png",
        side: 60,
        isWithdrawable: true,
        autoWithdraw: false,
        zOrder: 1
      },
star_auto_withdraw: {
        num: 0,
        img: "../images/objects/fond_mer/étoile.png",
        side: 60,
        isWithdrawable: true,
        autoWithdraw: true,
        zOrder: 1
      },
    pierre1: {
        num: 7,
        img: "../images/objects/fond_mer/mapTile_011.png",
        side: 60,
        zOrder: 1,
        isObstacle: true
      }, 
    pierre2: {
        num: 8,
        img: "../images/objects/fond_mer/mapTile_012.png",
        side: 60,
        zOrder: 1,
    isObstacle: true
      }, 
    pierre3: {
        num: 9,
        img: "../images/objects/fond_mer/mapTile_013.png",
        side: 60,
        zOrder: 1,
    isObstacle: true
      }, 
     serrure: {
        num: 10,
        img: "../images/objects/fond_ciel/serrure_jaune.png",
        side: 60,
        isLocker: true,
        isObstacle: false
      },
      cle: {
        num: 11,
        img: "../images/objects/fond_ciel/cle.png",
        side: 60,
        isKey: true,
        zOrder: 1,
        isWithdrawable: true,
        autoWithdraw: false,
      },
 
    },
      checkEndCondition: robotEndConditions.checkPickedAllWithdrawables
    },
  };
