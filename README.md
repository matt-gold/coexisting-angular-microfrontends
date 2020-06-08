# single-spa-angular bug report
This repo reproduces a single-spa-angular bug. https://github.com/single-spa/single-spa-angular/issues/218

## Description
Lazy loaded modules within Single-spa-angular applications fail to load (only in --prod mode) if another single-spa-angular application has already lazy-loaded a module.
This is caused by the ``"optimization": true`` flag which is turned on for --prod builds by default. The optimization flag enables minification (and maybe does other stuff).

## Steps to reproduce
- Run ``npm start`` from /app1, /app2, /navbar, and /root-html-file
- From the browser, go to either App1 or App2, then follow the displayed link to lazy load a module.
- Now go to whichever app wasn't loaded in the previous step and follow the displayed link which should lazy load another module.
- Result: module fails to load with "TypeError: Cannot read property 'call' of undefined"

## Other information
- The error message is not very helpful, it seems to be coming from webpack not recognizing the minified keys to the lazy loaded bundles.
- If you set optimization to false for either app1 or app2, but not both, everything works fine. The bug requires that there be two different micro-apps with optimization set to true. 
