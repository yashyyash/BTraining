import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('Token Interceptor called');
  if (!req.url.includes('/users')) {
    let headers = req.headers
      .set('Content-Type', 'Applcation/json')
      .set('bajaj-authorization-token',  `${localStorage.getItem('token')}`)
      const modifiedReq = req.clone({ headers });
      return next(modifiedReq);
  }
  return next(req);
}
