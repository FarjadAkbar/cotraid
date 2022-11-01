<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    AuthController,
    PermissionController,
    RoleController
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
    });
    // Permissions
    Route::post('userpermission/{id}', [AuthController::class, 'userpermission']);
    Route::post('userrole/{id}', [AuthController::class, 'userrole']);
    Route::post('rolepermission/{id}', [RoleController::class, 'rolepermission']);


    // Get Permission
    Route::get('getpermission/{id}', [RoleController::class, 'getpermission']);

    // Crud
    Route::resource('permission', PermissionController::class);
    Route::resource('role', RoleController::class);
});
// Route::get('abilities', function(Request $request){
//     return $request->user()->roles()->with('permission')
//             ->get()
//             ->pluck('permission')
//             ->flattern()
//             ->pluck('slug')
//             ->unique()
//             ->values()
//             ->toArray();
// });