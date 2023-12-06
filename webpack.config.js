module.exports = {
    // Other webpack configurations...
  
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/")
      }
    }
  };