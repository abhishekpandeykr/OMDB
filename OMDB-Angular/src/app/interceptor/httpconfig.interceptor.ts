import { Injectable } from '@angular/core';
// import {ErrorDialogService} from '../error-dialog/errordialog.service';
import {
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
	HttpHandler,
	HttpEvent,
	HttpErrorResponse,
} from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler) {
		const appendKey = req.clone({
			url: `${environment.baseUrl}${environment.apiKey}&${req.url}`,
		});
		return next.handle(appendKey);
	}
}
