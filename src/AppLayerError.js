export class AppLayerError extends Error {
  constructor(...args) {
    super(...args)
    this.name = 'AppLayerError'
    this.message = args[0]
    Error.captureStackTrace(this, AppLayerError)
  }
}

AppLayerError.__proto__ = undefined
