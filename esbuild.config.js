// esbuild.config.js
import esbuild from 'esbuild';
import glsl from 'esbuild-plugin-glsl';

esbuild.build({
    // ...your config,
    plugins: [glsl()]
});