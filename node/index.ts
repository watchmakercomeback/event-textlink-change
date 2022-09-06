import type { ServiceContext, ClientsConfig } from '@vtex/api'
import { Service } from '@vtex/api'

import { Clients } from './clients'
import { skuChange } from './events/skuChange'

const TREE_SECONDS_MS = 3 * 1000
const CONCURRENCY = 10

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    events: {
      exponentialTimeoutCoefficient: 2,
      exponentialBackoffCoefficient: 2,
      initialBackoffDelay: 50,
      retries: 1,
      timeout: TREE_SECONDS_MS,
      concurrency: CONCURRENCY,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients>
}

export default new Service({
  clients,
  events: {
    skuChange,
  },
})
