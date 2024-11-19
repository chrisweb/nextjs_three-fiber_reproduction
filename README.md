# next.js react three fiber prototype

## Update Nov. 4 2024: 

* fixed missing dependency in package.json
* updated **@react-three/fiber** to version [9.0.0-rc.0](https://github.com/pmndrs/react-three-fiber/issues/2338#issuecomment-2453589271)

Note to self: [related R3F v9 issue](https://github.com/pmndrs/react-three-fiber/issues/2338) (the v9 roadmap)

## Dependencies overview

version of the main packages involved:

@react-three/fiber: 9.0.0-rc.1
@react-three/postprocessing: 2.16.3
next: 15.0.4-canary.19
react & react-dom: 19.0.0-rc-380f5d67-20241113

for more check out the [package.json](./package.json)

## Effectcomposer error

install the dependencies use: `npm i`

then to start the next.js dev server use the following command: `npm run dev`

next open this URL in your browser: `http://localhost:3000/v9_effectcomposer_error`

you should see the following message in the browser console:

> TypeError: Cannot read properties of undefined (reading 'length')

<details>
<summary>open to see the full error stack</summary>

```shell
at eval (webpack-internal:///(app-pages-browser)/./node_modules/@react-three/postprocessing/dist/EffectComposer.js:92:41)
at commitHookEffectListMount (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:14992:39)
at commitHookLayoutEffects (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:15081:21)
at commitLayoutEffectOnFiber (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:15246:29)
at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:829:28)
at recursivelyTraverseLayoutEffects (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:16564:25)
at commitLayoutEffectOnFiber (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:15378:25)
at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:829:28)
at recursivelyTraverseLayoutEffects (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:16564:25)
at commitLayoutEffectOnFiber (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:15358:37)
at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:829:28)
at recursivelyTraverseLayoutEffects (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:16564:25)
at commitLayoutEffectOnFiber (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:15329:25)
at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/react-reconciler/cjs/react-reconciler.development.js:829:28)
(...)
```

</details>

The error is in /node_modules/@react-three/postprocessing/dist/EffectComposer.js at line 81:

```js
for (let i = 0; i < children2.length; i++) {
```

which corresponds to line 139 https://github.com/pmndrs/react-postprocessing/blob/master/src/EffectComposer.tsx#L139 in the typescript source file

But only react and react three fiber are the packages that got updated, postprocessing is still the stable version, so I assume the error is due to a change somewhere inside of @react-three/fiber

The ticket for this problem: [react-postprocessing issue #301](https://github.com/pmndrs/react-postprocessing/issues/301)
There is now a PR in the works: [PR #302](https://github.com/pmndrs/react-postprocessing/pull/302)

### no problem in v8

the same test page when using the latest stable versions instead has no error(s):

@react-three/fiber: 8.17.10
@react-three/postprocessing: 2.16.3
next: 14.2.15
react: 18.3.1
react-dom: 18.3.1

to do the same test using R3F v8 and React 18, you can rename the package.json to v9_package.json and then rename the v8_package.json to package.json and do a new installation using `npm i --force`

If you prefer to do it manually, first downgrade **eslint** to version **8.57.1**, then change the version based on the list above, and finally you can remove the two **overrides** block from the package.json, then install everything using `npm i --force`

then you need to rename the next.config.ts file to a next.config.mjs file and remove the type so that it ends up having this content:

```js
const nextConfig = {
  /* config options here */
};

export default nextConfig;
```

## leva error

install the dependencies use: `npm i`

If you use r3f v9 **beta 1**, then you also need to fix the R3F **types** manually, as there the `/node_modules/@react-three/fiber/dist/declarations` directory missing in the latest **9.0.0-beta.1** release, you can solve it by installing the [9.0.0-beta.0](https://www.npmjs.com/package/@react-three/fiber/v/9.0.0-beta.0) in a separate directory, and then copy the declarations directory over to your v9 beta 1 directory

then to start the next.js dev server use the following command: `npm run dev`

next open this URL in your browser: `http://localhost:3000/v9_leva_error`

you should see the following message in the browser console:

> TypeError: react_dom__WEBPACK_IMPORTED_MODULE_0__.render is not a function

<details>
<summary>open to see the full error stack</summary>

```shell
at render (webpack-internal:///(app-pages-browser)/./node_modules/leva/dist/vector-plugin-6f82aee9.esm.js:556:42)
at eval (webpack-internal:///(app-pages-browser)/./node_modules/leva/dist/leva.esm.js:2202:77)
at react-stack-bottom-frame (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:22407:20)
at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:540:16)
at commitHookEffectListMount (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:10727:29)
at commitHookPassiveMountEffects (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:10847:11)
at reconnectPassiveEffects (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:12766:11)
at recursivelyTraverseReconnectPassiveEffects (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:12738:9)
at commitPassiveMountOnFiber (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:12695:17)
at recursivelyTraversePassiveMountEffects (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:12591:11)
at commitPassiveMountOnFiber (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:12719:11)
(...)
```

</details>

The error is in the vector-plugin file (in the render function):

```js
ReactDOM.render(element, container);
```

EDIT: I added the [`<Leva />` component](https://github.com/pmndrs/leva/blob/main/docs/configuration.md) (based on [this suggestion](https://github.com/pmndrs/leva/issues/521#issuecomment-2465654716)), but it made no difference

I found the source for this example is the [react-postprocessing documentation for hue/sat](https://react-postprocessing.docs.pmnd.rs/effects/hue-saturation), and the original code is in their [codesandbox example](https://codesandbox.io/p/sandbox/m9min)

The ticket for this problem: [leva issue #521](https://github.com/pmndrs/leva/issues/521)

## Suspense problem

install the dependencies use: `npm i`

then to start the next.js dev server use the following command: `npm run dev`

I added a page (`http://localhost:3000/suspense_or_no_suspense`) that leads to 4 examples:

* a first R3F Canvas is in a Next.js page on its own and everything works
* the second example is a copy of the first but I added a React Suspense component around the R3F canvas, now when I visit the page (Next.js client navigation) by clicking on the link then the example works fine, however if I reload the page than I get a message in the console saying "THREE.WebGLRenderer: Context Lost."
* the third example uses the same canvas again but instead of having a Suspense outside I moved the Suspense inside of the canvas, the example has no errors
* the fourth example again uses the same canvas, this time there is a Suspense inside and outside of the canvas and again this example works (even after reloading the page, which is where the second example failed)

So the only example that does not work is the second with one Suspense outside of the canvas and only when reloading the page

As of now I have not opened a ticket as I'm not sure what dependency causes the problem, I assume it is either nextjs 15 or three fiber 9 rc 0 or react 19

## steps (that got used to create this project):

command to use create next app:

`npx create-next-app@canary ./ --use-npm --typescript`

add the react three fiber (R3F) package:

When attempting to install R3F, npm could not resolve the dependency and was somehow stuck in a look attempting to do solve the problem:

```shell
npm warn Could not resolve dependency:
npm warn peer react@">=19.0" from @react-three/fiber@9.0.0-beta.1
npm warn node_modules/@react-three/fiber
npm warn   @react-three/fiber@"9.0.0-beta.1" from the root project
npm warn ERESOLVE overriding peer dependency
npm warn While resolving: @react-three/fiber@9.0.0-beta.1
npm warn Found: react@undefined
npm warn node_modules/react
npm warn   react@"19.0.0-rc-77b637d6-20241016" from the root project
```

This is why I used the `--force` flag as there are resolve issues as I use the canary version of react and react dom (same version that next.js canary uses)

I however, still had dependency resolution errors, so I added the following overrides to the **package.json**:

```json
    "overrides": {
        "react": "19.0.0-rc-77b637d6-20241016",
        "react-dom": "19.0.0-rc-77b637d6-20241016"
    }
```

I then used this command to install the R3F package:

`npm i @react-three/fiber@9.0.0-beta.1 --save-exact --force`

If you use r3f v9 **beta 1**, then you also need to fix the R3F **types** manually, as there the `/node_modules/@react-three/fiber/dist/declarations` directory missing in the latest **9.0.0-beta.1** release, you can solve it by installing the [9.0.0-beta.0](https://www.npmjs.com/package/@react-three/fiber/v/9.0.0-beta.0) in a separate directory, and then copy the declarations directory over to your v9 beta 1 directory

then I added three.js:

```shell
npm i three@latest --save-exact --force
npm i @types/three@latest --save-exact --save-dev --force
```

and finally I added react three postprocessing:

`npm i @react-three/postprocessing@latest postprocessing@latest --save-exact --force`

and for the second error example we add leva:

`npm i leva@latest --save-exact --force`