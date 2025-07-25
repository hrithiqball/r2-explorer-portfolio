import { R2Explorer } from 'r2-explorer'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return R2Explorer({
      readonly: false,
      basicAuth: [
        {
          username: 'mishu',
          // @ts-expect-error
          password: env.EXP_PW
        }
      ]
      // @ts-expect-error
    }).fetch(request, env, ctx)
  }
}
