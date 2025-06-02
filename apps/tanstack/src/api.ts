/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { createStartAPIHandler, defaultAPIFileRouteHandler } from '@tanstack/react-start/api'

export default createStartAPIHandler(defaultAPIFileRouteHandler) as ReturnType<typeof createStartAPIHandler>
