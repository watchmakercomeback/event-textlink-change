import type { EventContext, IOClients } from '@vtex/api'

export async function skuChange(ctx: EventContext<IOClients>) {
  const responseSku = ctx.body.IdSku

  console.log('RECEIVED EVENT', ctx.body)

  return responseSku
}
