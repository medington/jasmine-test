const context = require.context('./src', true, /\.spec\.[j|t]sx?$/);
context.keys().forEach(context);
