// Before:
// Here, we’ll add a parallel call to fs.stat during the read

db.fetchFilePath(fileId, (err, path) => {
  if (err) {
    log.error({ err: err }, err.message)
    return cb(err)
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      log.error({ err: err }, err.message)
      return cb(err)
    }
    // ...
    console.log(data)
  })
})

// After:
// Here, we’ll add a parallel call to fs.stat during the read

db.fetchFilePath(fileId, (err, path) => {
  if (err) {
    log.error({ err: err }, err.message)
    return cb(err)
  }
  async
    .parallel({
      data: fs.readFile.bind(fs, path),
      stats: fs.stat.bind(fs, path)
    }, (err, results) => {
      if (err) {
        log.error({ err: err }, err.message)
        return cb(err)
      }
      console.log('stats: ', results.stats, 'data: ', results.data)
      return cb(null, results)
    })
}
)   
//Here is the same logic using promises:
Before:
// Here, we’ll add a parallel call to fs.stat during the read

return db.fetchFilePathAsync(fileId)
  .then((path) => {
    return fs.readFileAsync(path)
  })
  .then(console.log.bind(this))
  .catch((err) => {
    log.error({ err: err }, err.message)
    throw err
  })
//   ...

// After:
// Here, we’ll add a parallel call to fs.stat during the read

return db.fetchFilePathAsync(fileId)
  .then((path) => {
    return Promise.props({
      data: fs.readFileAsync(path),
      stats: fs.statAsync(path)
    })
  })
  .tap((results) => {
    console.log('stats: ', results.stats, 'data: ', results.data)
  })
  .catch((err) => {
    log.error({ err: err }, err.message)
    throw err
  })
