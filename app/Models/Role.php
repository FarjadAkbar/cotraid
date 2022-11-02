<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class Role extends Model
{
    use HasFactory, UUID;

    protected $table = 'roles';
    protected $fillable = ['name', 'slug'];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'roles_permission');
    }


    public function user()
    {
        return $this->belongsToMany(User::class, 'users_roles');
    }
}
