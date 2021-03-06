import config from 'config'

export default {
  index
}

/**
 * @param {*obj} ctx
 * @param {*obj} next
 */
async function index (ctx, next) {
  ctx.body = {
    code: 0,
    msg: 'ok',
    data: {
      port: parseInt(config.server.port),
      info: ctx.state.verify
    }
  }
  next()
}
