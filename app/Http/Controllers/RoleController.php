<?php

namespace App\Http\Controllers;

use App\Models\{Role, Permission};
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    //
    public function index()
    {
        // if (!Auth::user()->can('roles')) abort(403);
        try {
            $roles  =  Role::all();
            return response($roles);
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }

    public function store(Request $request)
    {
        // if (!Auth::user()->can('roles-create')) abort(403);
        try {
            $request->validate([
                'name' => 'required|string',
                'slug' => 'required|string',
            ]);

            if (Role::where('slug', '=', $request->slug)->exists()) {
                return response(['msg'  => 'Slug already exist'], 200);
            }
            $role = new Role([
                'name' => $request->name,
                'slug' => $request->slug
            ]);
            if ($role->save()) {
                return response([
                    'msg' => 'Successfully created role!'
                ], 200);
            } else {
                return response(['error' => 'Provide proper slug & name'], 401);
            }
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }


    public function show($id)
    {
        // if (!Auth::user()->can('roles-show')) abort(403);
        try {
            $role = Role::find($id);
            return response($role);
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        // if (!Auth::user()->can('roles-edit')) abort(403);
        try {

            $request->validate([
                'name' => 'required|string',
                'slug' => 'required|string',
            ]);

            if (Role::where('slug', '=', $request->slug)->exists()) {
                return response(['msg'  => 'Slug already exist'], 200);
            }
            $role = Role::find($id);
            $role->name = $request->name;
            $role->slug = $request->slug;
            if ($role->save()) {
                return response([
                    'msg' => 'Successfully updated role!'
                ], 200);
            } else {
                return response(['msg' => 'Provide proper slug & name'], 401);
            }
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }

    public function destroy($id)
    {
        // if (!Auth::user()->can('roles-delete')) abort(403);
        try {
            $role = Role::find($id);
            $role->delete();
            return response(
                ['msg' => 'Successfully deleted role!'],
                200
            );
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }


    public function rolepermission(Request $request, $id)
    {
        // if (!Auth::user()->can('role-permission')) abort(403);
        try {
            $request->validate([
                'slug' => 'required|array'
            ]);
            $role = Role::find($id);

            $role->permissions()->detach();
            foreach ($request->slug as $slug) {
                $permission = Permission::where('slug', $slug)->first();
                $role->permissions()->attach($permission);
            }

            return response([
                'msg' => 'Successfully added permission!'
            ], 200);
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }

    public function getpermission($id)
    {
        // if (!Auth::user()->can('permissions')) abort(403);
        try {
            $role = Role::find($id);
            $permissions = $role->permissions()->get();
            return response($permissions, 200);
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }
}
