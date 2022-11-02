<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\Models\{
    User,
    Role,
    Permission
};
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::insert([
          ['id' => '1', 'name' => 'admin', 'email' => 'admin@gmail.com', 'password' => bcrypt('12345678')],
          ['id' => '2', 'name' => 'editor', 'email' => 'editor@gmail.com', 'password' => bcrypt('12345678')],
          ['id' => '3', 'name' => 'author', 'email' => 'author@gmail.com', 'password' => bcrypt('12345678')],
          ['id' => '4', 'name' => 'user', 'email' => 'user@gmail.com', 'password' => bcrypt('12345678')],
      ]);

        Role::insert([
            ['id' => '1', 'name' => 'Admin', 'slug' => 'admin'],
            ['id' => '2', 'name' => 'Editor', 'slug' => 'editor'],
            ['id' => '3', 'name' => 'Author', 'slug' => 'author'],
            ['id' => '4', 'name' => 'User', 'slug' => 'user'],
        ]);


        Permission::insert([
            ['id' => '1', 'name' => 'Add Permission', 'slug' => 'add-permission'],
            ['id' => '2', 'name' => 'Edit Permission', 'slug' => 'edit-permission'],
            ['id' => '3', 'name' => 'Delete Permission', 'slug' => 'delete-permission'],
            ['id' => '4', 'name' => 'Read Permission', 'slug' => 'read-permission'],
        ]);


        $rolesCount = Role::count();
        $permissionCount = Role::count();
        
        // Populate the pivot table
        User::all()->each(function ($user) use ($rolesCount) { 
                $user->roles()->attach(
                Role::all()->random(rand(1, $rolesCount))->pluck('id')->toArray()
            );
        });

        User::all()->each(function ($user) use ($permissionCount) { 
            $user->permissions()->attach(
                Permission::all()->random(rand(1, $permissionCount))->pluck('id')->toArray()
            );
        });

        Role::all()->each(function ($role) use ($permissionCount) { 
            $role->permissions()->attach(
                Permission::all()->random(rand(1, $permissionCount))->pluck('id')->toArray()
            );
        });



    }
}
