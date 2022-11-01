<?php
namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        // $user = \Auth::user();
        // $userRoles = $user->roles->get();
        // foreach($userRoles as $role){
        //     $rolePermission = $role->permissions->get();
        // }
        // if($user){
        //     $roles = Role::with('permissions')->get();
        //     $permissionArray = [];

        //     foreach($roles as $role){
        //         foreach($role->permissions as $permission){
        //             $permissionArray[$permission->name][] = $role->name;
        //         }
        //     }
        //     foreach($permissionArray as $name => $roles){
        //         Gate::define($name, function(\App\User $user) use ($roles){
        //             return count(array_intersect($user->roles->pluck()))
        //         });
        //     }
        // }
        
                return $next($request);
    }
}
?>