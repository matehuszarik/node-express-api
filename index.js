if (process.env.PROCESS_TYPE === "web") {
  require('./src/server')
} else {
  console.info("Invalid value for PROCESS_TYPE")
  process.exit(0)
}

// TODO: graceful shutdown
// process.on('SIGINT', () => {
//   process.exit(0)
// })

// TODO: ?
process.on('unhandledRejection', (err) => {
  console.error(err)
})