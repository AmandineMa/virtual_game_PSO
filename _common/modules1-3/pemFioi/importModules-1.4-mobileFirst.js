(function () {

var importedModules = {};

var importableModules = function () {
   // Wait to have modulesPath defined before executing the function
   return {
      'jquery-1.7.1': {src: modulesPath+"/ext/jquery/1.7/jquery.min.js", id: "http://code.jquery.com/jquery-1.7.1.min.js"},
      'jquery-ui-1.10.3': {src: modulesPath+"/ext/jquery-ui/1.10/jquery-ui-1.10.3.custom.min.js", id: "https://code.jquery.com/ui/1.10.3/jquery-ui.min.js"},
      'jquery-ui.touch-punch': {src: modulesPath+"/ext/jquery-ui/jquery.ui.touch-punch.min.js", id: "jquery.ui.touch-punch.min.js"},
      'JSON-js': {src: modulesPath+"/ext/json/json2.min.js", id: "https://github.com/douglascrockford/JSON-js"},
      'raphael-2.2.1': {src: modulesPath+"/ext/raphael/2.2.1/raphael.min.js", id: "http://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.1/raphael.min.js"},
      'beaver-task-2.0': {src: modulesPath+"/pemFioi/beaver-task-2.0.js", id: "http://www.france-ioi.org/modules/pemFioi/beaver-task-2.0.js"},
      'jschannel': {src: modulesPath+"/ext/jschannel/jschannel.js", id: "http://www.france-ioi.org/modules/ext/jschannel/jschannel.js"},
      'raphaelFactory-1.0': {src: modulesPath+"/pemFioi/raphaelFactory-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/raphaelFactory-1.0.js"},
      'delayFactory-1.0': {src: modulesPath+"/pemFioi/delayFactory-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/delayFactory-1.0.js"},
      'simulationFactory-1.0': {src: modulesPath+"/pemFioi/simulationFactory-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/simulationFactory-1.0.js"},
      'platform-pr': {class: "proxy module", src: modulesPath+"/integrationAPI.01/official/platform-pr.js", id: "http://www.france-ioi.org/modules/integrationAPI.01/official/platform-pr.js"},
      'buttonsAndMessages': {class: "stdButtonsAndMessages module", src: modulesPath+"/integrationAPI.01/installationAPI.01/pemFioi/buttonsAndMessages.js",  id: "http://www.france-ioi.org/modules/integrationAPI.01/installationAPI.01/pemFioi/buttonsAndMessages.js"},
      'beav-1.0': {src: modulesPath+"/pemFioi/beav-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/beav-1.0.js"},
      'installationAPI.01': {class: "remove", src: modulesPath+"/integrationAPI.01/installationAPI.01/pemFioi/installation.js"},
      'miniPlatform': {class: "remove", src: modulesPath+"/integrationAPI.01/official/miniPlatform.js"},
      'static-task': {src: modulesPath+"/pemFioi/static-task.js"},
      'acorn': {src: modulesPath+"/ext/js-interpreter/acorn.js", id: "acorn"},
      'acorn-walk': {src: modulesPath+"/ext/acorn/walk.js", id: "acorn-walk"},
      'interpreter': {src: modulesPath+"/ext/js-interpreter/interpreter.js", id: "interpreter"},
      'ace': {src: modulesPath+"/ext/ace/ace.js", id: "ace"},
      'ace_python': {src: modulesPath+"/ext/ace/mode-python.js", id: "ace_python"},
      'save-svg-as-png': {src: modulesPath+"/ext/save-svg-as-png/saveSvgAsPng.js", id: "save-svg-as-png"},
      'fonts-loader-1.0': {src: modulesPath+"/pemFioi/fontsLoader-1.0.js", id: "fonts-loader"},
      'grid-1.0': {src: modulesPath+"/pemFioi/grid-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/grid-1.0.js"},
      'drag_lib-2.0': {src: modulesPath+"/pemFioi/drag_lib-2.0.js", id: "http://www.france-ioi.org/modules/pemFioi/drag_lib-2.0.js"},
      'simulation-2.0': {src: modulesPath+"/pemFioi/simulation-2.0.js", id: "http://www.france-ioi.org/modules/pemFioi/simulation-2.0.js"},
      'raphaelButton-1.0': {src: modulesPath+"/pemFioi/raphaelButton-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/raphaelButton-1.0.js"},
      'graph-1.0': {src: modulesPath+"/pemFioi/graph-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/graph-1.0.js"},
      'randomGenerator-1.0': {src: modulesPath+"/pemFioi/randomGenerator-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/randomGenerator-1.0.js"},
      'shape-paths': {src: modulesPath+"/pemFioi/shape-paths.js", id: "shape-paths"},

      'showdown': {src: modulesPath+"/ext/showdown/showdown.min.js", id: "showdown"},
      'showdownConvert': {src: modulesPath+"/pemFioi/showdownConvert.js", id: "showdownConvert"},
      'mathjax': {src: modulesPath+"/ext/mathjax/MathJax.js?config=TeX-MML-AM_CHTML", id: "mathjax"},
      'post_processor': {src: modulesPath+"/pemFioi/post_processor.js", id: "post_processor"},

      'taskStyles-0.1': {type: "stylesheet", src: modulesPath+"/pemFioi/taskStyles-0.1.css", id: "http://www.france-ioi.org/modules/pemFioi/taskStyles-0.1.css"},
      'taskStyles-mobileFirst': {type: "stylesheet", src: modulesPath+"/pemFioi/taskStyles-mobileFirst.css", id: "http://www.france-ioi.org/modules/pemFioi/taskStyles-mobileFirst.css"},

      'conceptDisplay-1.0': {src: modulesPath+"/pemFioi/conceptDisplay-1.0.js", id: "concept_display"},
      'conceptViewer-1.0': {src: modulesPath+"/pemFioi/conceptViewer-1.0-mobileFirst.js", id: "concept_viewer"},
      'conceptViewer_css-1.0': {type: "stylesheet", src: modulesPath+"/pemFioi/conceptViewer-1.0-mobileFirst.css", id: "concept_viewer_css"},

      'blockly': {src: modulesPath+"/ext/blockly/blockly_compressed.js", id: "blockly"},
      'blockly_blocks': {src: modulesPath+"/ext/blockly/blocks_compressed.js", id: "blockly_blocks"},
      'blockly_javascript': {src: modulesPath+"/ext/blockly/javascript_compressed.js", id: "blockly_javascript"},
      'blockly_python': {src: modulesPath+"/ext/blockly/python_compressed.js", id: "blockly_python"},
      'blockly_fr': {src: modulesPath+"/ext/blockly/fr.js", id: "blockly_fr"},
      'blockly_en': {src: modulesPath+"/ext/blockly/en.js", id: "blockly_en"},
      'blockly_de': {src: modulesPath+"/ext/blockly/de.js", id: "blockly_de"},
      'blockly_es': {src: modulesPath+"/ext/blockly/es.js", id: "blockly_es"},
      'blockly_sl': {src: modulesPath+"/ext/blockly/sl.js", id: "blockly_sl"},
      'blockly_fioi': {src: modulesPath+"/ext/blockly-fioi/fioi-blockly.min.js", id: "blockly_fioi"},

      'blockly-robot-0.9': {src: modulesPath+"/pemFioi/blocklyRobot_lib-0.9.1.js", id: "blocklyRobot_lib"},
      'blockly-robot-1.0': {src: modulesPath+"/pemFioi/blocklyRobot_lib-1.0.0.js", id: "blocklyRobot_lib"},
      'blockly-robot-dev': {src: modulesPath+"/pemFioi/blocklyRobot_lib-1.0.1-dev.js", id: "blocklyRobot_lib"},
      'blockly-printer': {src: modulesPath+"/pemFioi/blocklyPrinter_lib.js", id: "blocklyPrinter_lib"},
      'blockly-turtle': {src: modulesPath+"/pemFioi/blocklyTurtle_lib.js", id: "blocklyTurtle_lib"},
      'jwinf_css': {type: "stylesheet", src: modulesPath+"/pemFioi/jwinf.css", id: "jwinf_css"}, // for BWINF

      'quickAlgo_utils': {src: modulesPath+"/pemFioi/quickAlgo/utils.js", id: "quickAlgo_utils"},
      'quickAlgo_i18n': {src: modulesPath+"/pemFioi/quickAlgo/i18n.js", id: "quickAlgo_i18n"},
      'quickAlgo_interface': {src: modulesPath+"/pemFioi/quickAlgo/interface-mobileFirst.js", id: "quickAlgo_interface"},
      'quickAlgo_blockly_blocks': {src: modulesPath+"/pemFioi/quickAlgo/blockly_blocks.js", id: "quickAlgo_blockly_blocks"},
      'quickAlgo_blockly_interface': {src: modulesPath+"/pemFioi/quickAlgo/blockly_interface.js", id: "quickAlgo_blockly_interface"},
      'quickAlgo_blockly_runner': {src: modulesPath+"/pemFioi/quickAlgo/blockly_runner.js", id: "quickAlgo_blockly_runner"},
      'quickAlgo_python_interface': {src: modulesPath+"/pemFioi/quickAlgo/python_interface.js", id: "quickAlgo_python_interface"},
      'quickAlgo_python_runner': {src: modulesPath+"/pemFioi/quickAlgo/python_runner.js", id: "quickAlgo_python_runner"},
      'quickAlgo_subtask': {src: modulesPath+"/pemFioi/quickAlgo/subtask.js", id: "quickAlgo_subtask"},
      'quickAlgo_context': {src: modulesPath+"/pemFioi/quickAlgo/context.js", id: "quickAlgo_context"},
      //'quickAlgo_css': {type: "stylesheet", src: modulesPath+"/pemFioi/quickAlgo/quickAlgo.css", id: "quickAlgo_css"},
      'quickAlgo_css': {type: "stylesheet", src: modulesPath+"/pemFioi/quickAlgo/quickAlgo-mobileFirst.css", id: "quickAlgo_css"},

      'scratch': {src: modulesPath+"/ext/scratch/blockly_compressed_vertical.js", id: "scratch"},
      'scratch_blocks_common': {src: modulesPath+"/ext/scratch/blocks_compressed.js", id: "scratch_blocks_common"},
      'scratch_blocks': {src: modulesPath+"/ext/scratch/blocks_compressed_vertical.js", id: "scratch_blocks"},
      'scratch_fixes': {src: modulesPath+"/ext/scratch/fixes.js", id: "scratch_fixes"},
      'scratch_procedures': {src: modulesPath+"/ext/scratch/procedures.js", id: "scratch_procedures"},

      'python_count': {src: modulesPath+"/pemFioi/pythonCount-1.0.js", id: "python_count"},
      'skulpt_quickAlgo': {src: modulesPath+"ext/skulpt/skulpt.quickAlgo.min.js", id: "skulpt_quickAlgo"},
      'skulpt_stdlib': {src: modulesPath+"ext/skulpt/skulpt-stdlib.js", id: "skulpt_stdlib"},
      'skulpt_debugger': {src: modulesPath+"ext/skulpt/debugger.js", id: "skulpt_debugger"},

      'blockly_database': {src: modulesPath+"/pemFioi/database/blockly_database.js", id: "blockly_database"},
      'database': {src: modulesPath+"/pemFioi/database/database.js", id: "database"},
      'database_css': {type: "stylesheet", src: modulesPath+"/pemFioi/database/styles.css", id: "database_css"},

      'files_repository': {src: modulesPath+"/pemFioi/shared/files_repository.js", id: "files_repository"},
      'blocks_helper': {src: modulesPath+"/pemFioi/shared/blocks_helper.js", id: "blocks_helper"},

      // Quiz task
      'quiz_styles': {type: "stylesheet", src: modulesPath+"/pemFioi/quiz/quizStyles-0.1.css", id: "quiz_styles"},
      'quiz': {src: modulesPath+"/pemFioi/quiz/quiz.js", id: "quiz"},
      'quiz_task': {src: modulesPath+"/pemFioi/quiz/task.js", id: "quiz_task"},
      'quiz_grader': {src: modulesPath+"/pemFioi/quiz/grader.js", id: "quiz_grader"},
      'quiz_questions_choice': {src: modulesPath+"/pemFioi/quiz/questions/choice.js", id: "quiz_questions_choice"},
      'quiz_questions_fill_gaps': {src: modulesPath+"/pemFioi/quiz/questions/fill_gaps.js", id: "quiz_questions_fill_gaps"},
      'quiz_questions_input': {src: modulesPath+"/pemFioi/quiz/questions/input.js", id: "quiz_questions_input"},

      // Video task
      'taskVideo': {src: modulesPath+"/pemFioi/taskVideo/taskVideo.js", id: "taskVideo"},
      'taskVideoPlayer': {src: modulesPath+"/pemFioi/taskVideo/player.js", id: "taskVideoPlayer"},
      'taskVideo_css': {type: "stylesheet", src: modulesPath+"/pemFioi/taskVideo/player.css", id: "taskVideo_css"},

      // Bundles
      'bebras-base': {src: modulesPath+"bundles/bebras-base.js", id: "bundle-bebras-base"},
      'bebras-interface': {src: modulesPath+"bundles/bebras-interface.js", id: "bundle-bebras-interface"},
      'js-interpreter': {src: modulesPath+"bundles/js-interpreter.js", id: "bundle-js-interpreter"},
      'blockly-base': {src: modulesPath+"bundles/blockly-base.js", id: "bundle-blockly-base"},
      'scratch-base': {src: modulesPath+"bundles/scratch-base.js", id: "bundle-scratch-base"},
      'quickAlgo-all-blockly': {src: modulesPath+"bundles/quickAlgo-all-blockly.js", id: "bundle-quickAlgo-all-blockly"},
      'quickAlgo-all-python': {src: modulesPath+"bundles/quickAlgo-all-python.js", id: "bundle-quickAlgo-all-python"},

      'blockly-quickpi': { src: modulesPath + "/pemFioi/quickpi/blocklyQuickPi_lib.js", id: "blocklyQuickPi_lib" },
      'quickpi-board': { src: modulesPath + "/pemFioi/quickpi/quickpi_board.js", id: "quickpi_board" },
   }
}

var languageScripts = function () {
   var strLang = window.stringsLanguage ? window.stringsLanguage : 'fr';
   return {
      blockly: [
         'acorn',
         'acorn-walk',
         'interpreter',
         'blockly',
         'blockly_blocks',
         'blockly_javascript',
         'blockly_python',
         'blockly_' + strLang,
         'blockly_fioi',
         'fonts-loader-1.0',
         'quickAlgo_utils',
         'quickAlgo_i18n',
         'quickAlgo_interface',
         'quickAlgo_blockly_blocks',
         'quickAlgo_blockly_interface',
         'quickAlgo_blockly_runner',
         'quickAlgo_subtask',
         'quickAlgo_context',
         'quickAlgo_css'
      ],
      scratch: [
         'acorn',
         'acorn-walk',
         'interpreter',
         'scratch',
         'scratch_blocks_common',
         'scratch_blocks',
         'blockly_javascript',
         'blockly_python',
         'blockly_' + strLang,
         'blockly_fioi',
         'scratch_fixes',
         'scratch_procedures',
         'fonts-loader-1.0',
         'quickAlgo_utils',
         'quickAlgo_i18n',
         'quickAlgo_interface',
         'quickAlgo_blockly_blocks',
         'quickAlgo_blockly_interface',
         'quickAlgo_blockly_runner',
         'quickAlgo_subtask',
         'quickAlgo_context',
         'quickAlgo_css'
      ],
      python: [
         'python_count',
         'ace',
         'ace_python',
         'skulpt_quickAlgo',
         'skulpt_stdlib',
         'skulpt_debugger',
         'fonts-loader-1.0',
         'quickAlgo_utils',
         'quickAlgo_i18n',
         'quickAlgo_interface',
         'quickAlgo_python_interface',
         'quickAlgo_python_runner',
         'quickAlgo_subtask',
         'quickAlgo_context',
         'quickAlgo_css'
      ]
   }
}

var bundledModules = function () {
   // List of bundles and which modules they include
   // How to import the bundles is defined in importableModules
   return [
      {name: 'bebras-base', included: ['jquery-1.7.1', 'JSON-js', 'raphael-2.2.1', 'beaver-task-2.0', 'jschannel', 'raphaelFactory-1.0', 'delayFactory-1.0', 'simulationFactory-1.0']},
      {name: 'bebras-interface', included: ['platform-pr', 'buttonsAndMessages', 'beav-1.0', 'installationAPI.01', 'miniPlatform']},
      {name: 'js-interpreter', included: ['acorn', 'acorn-walk', 'interpreter']},
      {name: 'blockly-base', included: ['blockly', 'blockly_blocks', 'blockly_javascript', 'blockly_python']},
      {name: 'scratch-base', included: ['scratch', 'scratch_blocks_common', 'scratch_blocks', 'blockly_javascript', 'blockly_python']}
// TODO :: bundles with mobileFirst interface
//      {name: 'quickAlgo-all-blockly', included: ['quickAlgo_utils', 'quickAlgo_i18n', 'quickAlgo_interface', 'quickAlgo_blockly_blocks','quickAlgo_blockly_interface', 'quickAlgo_blockly_runner', 'quickAlgo_subtask', 'quickAlgo_context']},
//      {name: 'quickAlgo-all-python', included: ['python_count', 'ace', 'ace_python', 'skulpt_quickAlgo', 'skulpt_stdlib', 'skulpt_debugger', 'quickAlgo_utils', 'quickAlgo_i18n', 'quickAlgo_interface', 'quickAlgo_python_interface', 'quickAlgo_python_runner', 'quickAlgo_subtask', 'quickAlgo_context']}
   ];
};

// from http://stackoverflow.com/questions/979975/
var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();


function bundlesToModules(modulesList) {
   // Check modulesList for bundles, replace them with their modules

   if(typeof bundledModules == 'function') {
      bundledModules = bundledModules();
   }

   var bundlesByName = {};
   for(var iBundle in bundledModules) {
      var curBundle = bundledModules[iBundle];
      bundlesByName[curBundle.name] = curBundle;
   }

   var newList = [];
   var includedModules = {};
   function addModule(module) {
      if(includedModules[module]) { return; }
      newList.push(module);
      includedModules[module] = true;
   }
   for(var iModule in modulesList) {
      var curModule = modulesList[iModule];
      if(bundlesByName[curModule]) {
         for(var iSub in bundlesByName[curModule].included) {
            addModule(bundlesByName[curModule].included[iSub]);
         }
      } else {
         addModule(curModule);
      }
   }
   return newList;
}

function modulesToBundles(modulesList) {
   // Check modulesList for modules that can be replaced with bundles

   if(typeof bundledModules == 'function') {
      bundledModules = bundledModules();
   }
   for(var iBundle in bundledModules) {
      var bundleIncludes = bundledModules[iBundle].included;
      var newModulesList = modulesList.slice();
      var isFirst = true;
      var ok = true;
      for(var iMod in bundleIncludes) {
         var idx = newModulesList.indexOf(bundleIncludes[iMod]);
         if(idx == -1) {
            ok = false;
            break;
         }
         if(isFirst) {
            // Include the name of the bundle to include instead
            newModulesList.splice(idx, 1, bundledModules[iBundle].name);
            isFirst = false;
         } else {
            newModulesList.splice(idx, 1);
         }
      }
      if(ok) {
         modulesList = newModulesList;
      }
   }
   return modulesList;
}


function importModules(modulesList) {
   if(typeof importableModules == 'function') {
      importableModules = importableModules();
   };

   // If useBundles is True, we'll try to use bundles instead of the
   // corresponding modules. Otherwise, we do the opposite and translate
   // bundles into a list of modules.
   if(window.useBundles) {
      modulesList = modulesToBundles(modulesList);
   } else {
      modulesList = bundlesToModules(modulesList);
   }

   var modulesStr = '';
   for(var iMod in modulesList) {
      var moduleName = modulesList[iMod];
      var curModule = importableModules[moduleName];
      if(curModule) {
         // Avoid importing the same module twice
         if(importedModules[moduleName] === true) {
            continue;
         } else {
            importedModules[moduleName] = true;
         }

         var modClass = curModule.class ? curModule.class : 'module';
         var modSrc = curModule.src;
         if(QueryString.v) {
            // Add v= parameters to the URLs
            modSrc += (modSrc.indexOf('?') > -1 ? '&' : '?') + 'v=' + QueryString.v;
         }
         var modId = curModule.id ? curModule.id : moduleName;
         if(curModule.type == 'stylesheet') {
            modulesStr += '<link class="'+modClass+'" rel="stylesheet" type="text/css" href="'+modSrc+'" id="'+modId+'">';
         } else {
            modulesStr += '<script class="'+modClass+'" type="text/javascript" src="'+modSrc+'" id="'+modId+'"></script>';
         }
      } else {
         console.error("Module '"+moduleName+"' unknown.");
      }
   }
   document.write(modulesStr);
}


function conditionalLanguageElements(lang) {
   var elemList = document.querySelectorAll('[data-lang]');

   for(var iElem=0; iElem< elemList.length; iElem++) {
      elem = elemList[iElem];
      var elemLangs = elem.getAttribute('data-lang').split(' ');
      var elemOk = false;
      for (var i=0; i<elemLangs.length; i++) {
         if(elemLangs[i] == lang) {
            elemOk = true;
            break;
         }
      }
      if(!elemOk) {
         if(typeof elem.remove === 'function') {
            elem.remove();
         } else {
            elem.outerHTML = ''; // IE11 support
         }
      }
   }
}


function importLanguageModules(defaultLang) {
   // Default language
   var lang = QueryString.language ? QueryString.language : defaultLang;
   window.modulesLanguage = lang;

   if(typeof languageScripts == 'function') {
      languageScripts = languageScripts();
   };

   if(!languageScripts[lang]) {
      console.error("Language "+lang+" unknown, couldn't load scripts.");
   }

   importModules(languageScripts[lang]);

   if(!window.preprocessingFunctions) { window.preprocessingFunctions = []; }
   var fct = function () { conditionalLanguageElements(lang); };
   window.preprocessingFunctions.push(fct);
   window.addEventListener('DOMContentLoaded', fct);
}


// make sure mobile devices don't scale things
function addMetaViewport() {
   var metaViewport = document.createElement('meta');
   metaViewport.name = "viewport";
   metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
   document.getElementsByTagName('head')[0].appendChild(metaViewport);
}

addMetaViewport();
window.importModules = importModules;
window.conditionalLanguageElements = conditionalLanguageElements;
window.importLanguageModules = importLanguageModules;

})();
