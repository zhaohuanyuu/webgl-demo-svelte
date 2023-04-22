import { browser } from "$app/environment"

const logTitlteStyle = `
  color:hotpink;
  font-size: 13px;
  font-weight: bold;
`;

if (browser) {
  Promise.all([
    import("$lib/webgl-utils.js"),
    import("$lib/webgl-debug.js"),
    import("$lib/cuon-utils.js"),
    import("$lib/cuon-matrix.js"),
  ]).then(loaded => {
    console.log('%c [client hooks]:', logTitlteStyle, 'webgl utils loaded~')
  })
}