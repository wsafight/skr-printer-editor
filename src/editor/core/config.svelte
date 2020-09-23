<script>
  import Tweakpane from 'tweakpane'

  const PARAMS = {
    speed: 500
  }
  // // Pass the object and its key to pane
  const pane = new Tweakpane({
    title: '测试 pane',
    container: document.getElementById('config-001')
  });
  pane.addInput(PARAMS, 'speed')
</script>

<div id="config-001"></div>