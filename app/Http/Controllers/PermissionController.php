<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Auth;

class PermissionController extends Controller
{
    //
    //
    public function index()
    {
        // if (!Auth::user()->can('Permissions')) abort(403);
        try {
            $Permissions  =  Permission::all();
            return response($Permissions);
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }

    public function store(Request $request)
    {
        // if (!Auth::user()->can('Permissions-create')) abort(403);
        try {
            $request->validate([
                'name' => 'required|string',
                'slug' => 'required|string',
            ]);

            if (Permission::where('slug', '=', $request->slug)->exists()) {
                return response(['msg'  => 'Slug already exist'], 200);
            }
            $Permission = new Permission([
                'name' => $request->name,
                'slug' => $request->slug
            ]);
            if ($Permission->save()) {
                return response([
                    'msg' => 'Successfully created Permission!'
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
        // if (!Auth::user()->can('Permissions-show')) abort(403);
        try {
            $Permission = Permission::find($id);
            return response($Permission);
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        // if (!Auth::user()->can('Permissions-edit')) abort(403);
        try {
            $request->validate([
                'name' => 'required|string',
                'slug' => 'required|string',
            ]);

            if (Permission::where('slug', '=', $request->slug)->exists()) {
                return response(['msg'  => 'Slug already exist'], 200);
            }
            $Permission = Permission::find($id);
            $Permission->name = $request->name;
            $Permission->slug = $request->slug;
            if ($Permission->save()) {
                return response([
                    'msg' => 'Successfully updated Permission!'
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
        // if (!Auth::user()->can('Permissions-delete')) abort(403);
        try {
            $Permission = Permission::find($id);
            $Permission->delete();
            return response(
                ['msg' => 'Successfully deleted Permission!'],
                200
            );
        } catch (Exception $ex) {
            return response([
                'msg' => $ex
            ], 500);
        }
    }
}