import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request i son its way');
    return next.handle(req);
  }
}