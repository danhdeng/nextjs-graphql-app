# Error 
./pages/api/graphql.ts
Module parse failed: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)
File was processed with these loaders:
 * ./node_modules/.pnpm/next@12.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/webpack/loaders/next-swc-loader.js
You may need an additional loader to handle the result of these loaders.
Error: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)

# Solution add the following configuration to next.config.js
``` json
webpack: (config)=>{
    if(!config.experiments){
        config.experiments={};
    }
    config.experiments.topLevelAwait=true;
    return config;
}

```