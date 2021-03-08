var robotEndConditions = {
  checkReachExit: function(context, lastTurn) {
    var robot = context.getRobot();
    if (
      context.isOn(function(obj) {
        return obj.isExit === true;
      })
    ) {
      context.success = true;
      throw window.languageStrings.messages.successReachExit;
    }
    if (lastTurn) {
      context.success = false;
      throw window.languageStrings.messages.failureReachExit;
    }
  },
  checkAllLocksOpened: function(context, lastTurn) {
    var solved = true;
    for (var row = 0; row < context.nbRows; row++) {
      for (var col = 0; col < context.nbCols; col++) {
        if (
          context.hasOn(row, col, function(obj) {
            return obj.isLocker === true;
          })
        ) {
          solved = false;
        }
      }
    }

    if (solved) {
      context.success = true;
      throw window.languageStrings.messages.successOpenAllLockers;
    }
    if (lastTurn) {
      context.success = false;
      throw window.languageStrings.messages.failureOpenAllLockers;
    }
    },
  checkPickedAllWithdrawables: function(context, lastTurn) {

    var solved = true;
    for (var row = 0; row < context.nbRows; row++) {
      for (var col = 0; col < context.nbCols; col++) {
        if (
          context.hasOn(row, col, function(obj) {
            return obj.isWithdrawable === true;
          })
        ) {
          solved = false;
        }
      }
    }

    if (solved) {
      context.success = true;
      throw window.languageStrings.messages.successPickedAllWithdrawables;
    }
    if (lastTurn) {
      context.success = false;
      throw window.languageStrings.messages.failurePickedAllWithdrawables;
    }
  },
  checkPlugsWired: function(context, lastTurn) {
    var solved = true;
    for (var row = 0; row < context.nbRows; row++) {
      for (var col = 0; col < context.nbCols; col++) {
        if (
          context.hasOn(row, col, function(obj) {
            return obj.plugType !== undefined;
          }) &&
          !context.hasOn(row, col, function(obj) {
            return obj.isWire === true;
          })
        ) {
          solved = false;
        }
      }
    }

    if (solved) {
      context.success = true;
      throw window.languageStrings.messages.successPlugsWired;
    }
    if (lastTurn) {
      context.success = false;
      throw window.languageStrings.messages.failurePlugsWired;
    }
  },
  checkContainersFilled: function(context, lastTurn) {
    var solved = true;

    var messages = [
      window.languageStrings.messages.failureContainersFilled,
      window.languageStrings.messages.failureContainersFilledLess,
      window.languageStrings.messages.failureContainersFilledBag
    ];
    var message = 2;
    if (context.infos.maxMoves != undefined) {
      if (context.nbMoves > context.infos.maxMoves) {
        context.success = false;
        throw window.languageStrings.messages.failureTooManyMoves +
          " : " +
          context.nbMoves;
      }
    }
    for (var row = 0; row < context.nbRows; row++) {
      for (var col = 0; col < context.nbCols; col++) {
        var containers = context.getItemsOn(row, col, function(obj) {
          return obj.isContainer === true && !obj.isFake;
        });
        if (containers.length != 0) {
          var container = containers[0];
          if (
            container.containerSize == undefined &&
            container.containerFilter == undefined
          ) {
            container.containerSize = 1;
          }
          var filter;
          if (container.containerFilter == undefined)
            filter = function(obj) {
              return obj.isWithdrawable === true;
            };
          else
            filter = function(obj) {
              return (
                obj.isWithdrawable === true && container.containerFilter(obj)
              );
            };

          if (
            container.containerSize != undefined &&
            context.getItemsOn(row, col, filter).length !=
              container.containerSize
          ) {
            solved = false;
            message = Math.min(message, 1);
          } else if (context.getItemsOn(row, col, filter).length == 0) {
            solved = false;
            message = Math.min(message, 0);
          }

          if (container.containerFilter != undefined) {
            if (
              context.hasOn(row, col, function(obj) {
                return (
                  obj.isWithdrawable === true && !container.containerFilter(obj)
                );
              })
            ) {
              solved = false;
              message = Math.min(message, 0);
            }
            for (var item in context.bag) {
              if (
                filter(context.bag[item]) &&
                context.infos.ignoreBag === undefined
              ) {
                solved = false;
                message = Math.min(message, 2);
              }
            }
          }
        } else {
          if (
            context.getItemsOn(row, col, function(obj) {
              return obj.isWithdrawable === true && obj.canBeOutside !== true;
            }).length > 0
          ) {
            solved = false;
            message = Math.min(message, 0);
          }
        }
      }
    }

    if (solved) {
      context.success = true;
      throw window.languageStrings.messages.successContainersFilled;
    }
    if (lastTurn) {
      context.success = false;
      throw messages[message];
    }
  },
  checkBothReachAndCollect: function(context, lastTurn) {
    var robot = context.getRobot();
    if (
      context.isOn(function(obj) {
        return obj.isExit === true;
      })
    ) {
      var solved = true;
      for (var row = 0; row < context.nbRows; row++) {
        for (var col = 0; col < context.nbCols; col++) {
          if (
            context.hasOn(row, col, function(obj) {
              return obj.isWithdrawable === true;
            })
          ) {
            solved = false;
            throw window.languageStrings.messages.failurePickedAllWithdrawables;
          }
        }
      }

      if (solved) {
        context.success = true;
        throw window.languageStrings.messages.successPickedAllWithdrawables;
      }
    }
    if (lastTurn) {
      context.success = false;
      throw window.languageStrings.messages.failureReachExit;
    }
  },
  checkLights: function(context, lastTurn) {
    var solved = true;
    for (var row = 0; row < context.nbRows; row++) {
      for (var col = 0; col < context.nbCols; col++) {
        if (
          context.hasOn(row, col, function(obj) {
            return obj.isLight === true && obj.state === 0;
          })
        ) {
          solved = false;
        }
      }
    }

    if (solved) {
      context.success = true;
      throw window.languageStrings.messages.successLights;
    }
    if (lastTurn) {
      context.success = false;
      throw window.languageStrings.messages.failureLights;
    }
  }
};
