<svelte:head>
  <title>Hello Point1</title>
  <meta name="description" content="hello point"/>
</svelte:head>

<section class="wrapper">
  <canvas id="webgl" width="400" height="400">Please use a browser that supports "canvas"</canvas>
</section>

<script>
  import { onMount } from "svelte";

  // Vertex shader program
  const VSHADER_SOURCE =
    'void main() {\n' +
    '  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' + // Set the vertex coordinates of the point
    '  gl_PointSize = 15.0;\n' +                    // Set the point size
    '}\n';

  // Fragment shader program
  const FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // Set the point color
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
