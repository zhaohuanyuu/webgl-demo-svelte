<svelte:head>
  <title>Hello Point1</title>
  <meta name="description" content="hello point"/>
</svelte:head>

<section class="wrapper">
  <canvas id="webgl" width="400" height="400">Please use a browser that supports "canvas"</canvas>
</section>

<script>
  import { onMount } from "svelte";

  var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' + // attribute variable
    'attribute float a_PointSize;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  gl_PointSize = a_PointSize;\n' +
    '}\n';

  // Fragment shader program
  var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n' +
    '}\n';

  function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('webgl');

    // Get the rendering context for WebGL
    var gl = getWebGLContext(canvas);
    if (!gl) {
      console.log('Failed to get the rendering context for WebGL');
      return;
    }

    // Initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
      console.log('Failed to intialize shaders.');
      return;
    }

    // 获取位置存储地址变量
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
      console.log('Failed to get the storage location of a_Position');
      return;
    }

    // 获取尺寸存储地址变量
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    if (a_PointSize < 0) {
      console.log('Failed to get the size of a_PointSize');
      return;
    }

    // 设置位置存储地址变量
    gl.vertexAttrib3f(a_Position, 0.0, 0.5, 0.0)

    // 设置尺寸地址变量
    gl.vertexAttrib1f(a_PointSize, 30.0)

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw a point
    gl.drawArrays(gl.POINTS, 0, 1);
  }

  onMount(() => {
    // console.log(getWebGLContext);
    main();
  })
</script>
