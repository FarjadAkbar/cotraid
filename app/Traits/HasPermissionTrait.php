<?php
namespace App\Traits;

use App\Models\Permission;
use App\Models\Role;

trait HasPermissionTrait{
    // give permission 
    public function getAllPermission($permission){
        return Permission::where('slug', $permission)->get();
    }

    // check has permission
    public function hasPermission($permission){
        return (bool) $this->permissions->where('slug', $permission->slug)->count();
    }

    // check user role
    public function hasRole(...$roles){
        foreach($roles as $role){
            if($this->roles->contains('slug', $role)){
                return true;
            }
        }
        return false;
    }

    public function hasPermissionTo($permission){
        return $this->hasPermissionThroughRole($permission) || $this->hasPermission($permission);
    }

    public function hasPermissionThroughRole($permissions){
        foreach($permissions->roles as $role){
            if($this->roles->contains($role)){
                return true;
            }
        }
        return false;
    }

    // give permission to user
    public function giverPermissionTo(...$permissions){
        $permissions = $this->getAllPermission($permissions);

        if($permissions  == null){
            return false;
        }
        $this->permissions()->saveMany($permissions);

        return $this;
    }


    public function permissions(){
        return $this->belongsToMany(Permission::class, 'users_permission');
    }
    
    public function roles(){
        return $this->belongsToMany(Role::class, 'users_roles');
    }
}
?>