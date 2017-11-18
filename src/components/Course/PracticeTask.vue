<template>
  <div v-if="taskData" class="task-container">
    <div class="praticeTask row">
      <div class="col-12 col-lg-6">
        <div class="taskDetail">
          <div class="row">
            <div class="col text-left" style="background: #ccc">
              Back
            </div>
          </div>
          <div class="row">
            <div class="col">
              {{ taskData }}
            </div>
          </div> 
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="taskCode text-left">
          <codemirror v-model="code" :options="editorOption"></codemirror>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  // require active-line.js
  require('codemirror/addon/selection/active-line.js')
  // styleSelectedText
  require('codemirror/addon/selection/mark-selection.js')
  require('codemirror/addon/search/searchcursor.js')
  // hint
  require('codemirror/addon/hint/show-hint.js')
  require('codemirror/addon/hint/show-hint.css')
  require('codemirror/addon/hint/javascript-hint.js')
  require('codemirror/addon/selection/active-line.js')
  // highlightSelectionMatches
  require('codemirror/addon/scroll/annotatescrollbar.js')
  require('codemirror/addon/search/matchesonscrollbar.js')
  require('codemirror/addon/search/searchcursor.js')
  require('codemirror/addon/search/match-highlighter.js')
  // keyMap
  require('codemirror/mode/clike/clike.js')
  require('codemirror/addon/edit/matchbrackets.js')
  require('codemirror/addon/comment/comment.js')
  require('codemirror/addon/dialog/dialog.js')
  require('codemirror/addon/dialog/dialog.css')
  require('codemirror/addon/search/searchcursor.js')
  require('codemirror/addon/search/search.js')
  require('codemirror/keymap/sublime.js')
  // foldGutter
  require('codemirror/addon/fold/foldgutter.css')
  require('codemirror/addon/fold/brace-fold.js')
  require('codemirror/addon/fold/comment-fold.js')
  require('codemirror/addon/fold/foldcode.js')
  require('codemirror/addon/fold/foldgutter.js')
  require('codemirror/addon/fold/indent-fold.js')
  require('codemirror/addon/fold/markdown-fold.js')
  require('codemirror/addon/fold/xml-fold.js')

  require('codemirror/mode/clike/clike.js')
  require('codemirror/addon/edit/matchbrackets.js')
  require('codemirror/addon/comment/comment.js')
  require('codemirror/addon/dialog/dialog.js')
  require('codemirror/addon/dialog/dialog.css')
  require('codemirror/addon/search/searchcursor.js')
  require('codemirror/addon/search/search.js')
  require('codemirror/keymap/emacs.js')


import { mapState } from 'vuex'
import firebase from 'firebase'
// import someResource from 'codemirror/some-resource'
export default {
  name: 'practiceTask',
  data() {
    return {
      taskId: this.$route.params.taskId,
      taskData: null,
      code: 'hi',
      editorOption: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: false,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        mode: 'text/x-python',
        hintOptions:{
          completeSingle: false
        },
        keyMap: "emacs",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "hopscotch",
        autoCloseBrackets: true,
        readOnlyLines: [0, 4],
        
        extraKeys: { "Ctrl": "autocomplete" }
      }
    }
  },
  computed: {
    ...mapState(['practiceList'])
  },
  mounted() {
    setTimeout(() => {
      this.editorOption.lineNumbers = true
      this.editorOption.styleActiveLine = true
    }, 3000)
    // this.code = 'hello'
  },
  created() {
    this.taskLoad()
  },
  updated() {

  },
  methods: {
    taskLoad() {
      const this_ = this
      firebase.database().ref('/tasks').orderByChild('createdAt').equalTo(parseInt(this.taskId)).once('value').then( function(snapshot) {
        for (var i in snapshot.val()) {
          this_.taskData = snapshot.val()[i]
          var testcase = this_.taskData.testcase[0].input
          var func = []
          for (var i in testcase) {
            var funcName = ""
            for (var x in testcase[i]) {
              funcName = x
              var arg = []
              var count = 1
              for (var y in testcase[i][x]) {
                arg.push("arg" + count)
                count += 1
              }
              func.push("def " + funcName + " (" + arg.join(', ') + "): \n # your code here")
            }
          }
          this_.code = func.join("\n\n\n")
        }
      })
    }
  }
}
</script>

<style>
  .CodeMirror-focused .cm-matchhighlight {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
    background-position: bottom;
    background-repeat: repeat-x;
  }
  /* .cm-matchhighlight {background-color: lightgreen} */
  .CodeMirror-selection-highlight-scrollbar {background-color: green}
  .praticeTask {
    position: absolute;
    top: 0; bottom: 0; 
    left: 0; right: 0;
    margin: 0;
    margin-top: 74px;
    
  }
    .praticeTask > div {
      padding: 0 !important;
    }

  .taskDetail {
    background: #DFDCE3;
    height: 100%;
  }
  .taskCode {
    height: 100%;
    background: #444;
  }
  .CodeMirror {
    height: 100%;
  }
  .task-container {
  }
</style>
