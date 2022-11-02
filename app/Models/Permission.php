<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class Permission extends Model
{
    use HasFactory, UUID;

    protected $table = 'permissions';
    protected $fillable = ['name', 'slug'];

    public function roles(){
        return $this->belongsToMany(Role::class, 'roles_permission');
    }


    public function user(){
        return $this->belongsToMany(User::class, 'users_permission');
    }
}
