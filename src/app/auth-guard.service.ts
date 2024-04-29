import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, MaybeAsync, RouterStateSnapshot } from "@angular/router";

@Injectable()

export class AuthGuardService implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        
    }
}