const loggingMiddleware = (req, res, next) => {
    const start = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();
  
    console.log(`[${timestamp}] ${method} ${url} - Request received`);
  
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[${timestamp}] ${method} ${url} - Request processed in ${duration}ms`);
    });
  
    next();
  };
  
  module.exports = loggingMiddleware;
  