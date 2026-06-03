import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export function proxy(request: Request) {
  return createMiddleware(routing)(request as never);
}

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
