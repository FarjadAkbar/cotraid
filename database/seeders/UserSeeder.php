<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            ['id'=> 1, 'name' => 'admin', 'email' => 'admin@gmail.com', 'password' => bcrypt('12345678')],
            ['id'=> 2, 'name' => 'editor', 'email' => 'editor@gmail.com', 'password' => bcrypt('12345678')],
            ['id'=> 3, 'name' => 'author', 'email' => 'author@gmail.com', 'password' => bcrypt('12345678')],
            ['id'=> 4, 'name' => 'user', 'email' => 'user@gmail.com', 'password' => bcrypt('12345678')],
        ]);

        Role::insert([
            ['name' => 'Admin', 'slug' => 'admin'],
            ['name' => 'Editor', 'slug' => 'editor'],
            ['name' => 'Author', 'slug' => 'author'],
            ['name' => 'User', 'slug' => 'user'],
        ]);

        
        Permission::insert([
            ['name' => 'Add Permission', 'slug' => 'add-permission'],
            ['name' => 'Edit Permission', 'slug' => 'edit-permission'],
            ['name' => 'Delete Permission', 'slug' => 'delete-permission'],
            ['name' => 'Read Permission', 'slug' => 'read-permission'],
        ]);
    }
}
