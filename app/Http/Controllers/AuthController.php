<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\{
  User,
  Role,
  Permission
};
use Exception;
use Validator;
use Symfony\Component\HttpFoundation\response;

class AuthController extends Controller
{
    /**
    * Create user
    *
    * @param  [string] name
    * @param  [string] email
    * @param  [string] password
    * @param  [string] password_confirmation
    * @return [string] message
    */
    public function register(Request $request)
    {
      $request->validate([
        'name' => 'required|string',
        'email' => 'required|string|email|unique:users',
        'password' => 'required|string|',
        'c_password' => 'required|same:password',
      ]);

      $user = new User([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password)
      ]);
      if ($user->save()) {
        return response([
          'message' => 'Successfully created user!'
        ], 201);
      } else {
        return response(['error' => 'Provide proper details'], 401);
      }
    }

      /**
  * Login user and create token
  *
  * @param  [string] email
  * @param  [string] password
  * @param  [boolean] remember_me
  * @return [string] access_token
  * @return [string] token_type
  * @return [string] expires_at
  */
  public function login(Request $request)
  {
    $request->validate([
      'email' => 'required|string|email',
      'password' => 'required|string',
      'remember_me' => 'boolean'
    ]);
    $credentials = request(['email', 'password']);
    if (!Auth::attempt($credentials))
      return response([
        'message' => 'Invalid Credentials',
        'success' => false,
      ], 401);
    $user = $request->user();

    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->token;
    if ($request->remember_me)
      $token->expires_at = Carbon::now()->addWeeks(1);
    $token->save();

    $diff_in_minutes = Carbon::now()->diffInMinutes($token->expires_at);
    $cookie = cookie('cotriadToken', $tokenResult->accessToken, $diff_in_minutes);

    return response([
      'cotriadToken' => $tokenResult->accessToken,
    ], status:201)->withcookie($cookie);

    // return response([
    //   'access_token' => $tokenResult->accessToken,
    //   'token_type' => 'Bearer',
    //   'expires_at' => Carbon::parse(
    //     $tokenResult->token->expires_at
    //   )->toDateTimeString()
    //   ], status: 201);
  }

  /**
  * Get the authenticated User
  *
  * @return [json] user object
  */
  public function user(Request $request)
  {
    return response($request->user());
  }

  /**
  * Logout user (Revoke the token)
  *
  * @return [string] message
  */
  public function logout(Request $request)
  {
    $request->user()->token()->revoke();
    $cookie = \Cookie::forget('cotriadToken');
    return response([
      'message' => 'Successfully logged out'
    ], 200)->withcookie($cookie);
  }

  public function userpermission(Request $request, $id)
  {
    // if (!Auth::user()->can('user-permission')) abort(403);
    $request->validate([
      'slug' => 'required|array'
    ]);
    $user = User::find($id);

    $user->permissions()->detach();
    foreach ($request->slug as $slug) {
      $permission = Permission::where('slug', $slug)->first();
      $user->permissions()->attach($permission);
    }

    return response(
      [
        'message' => 'Successfully added permission!'
      ],
      200
    );
  }

  public function userrole(Request $request, $id)
  {
    // if (!Auth::user()->can('user-role')) abort(403);
    $request->validate([
      'slug' => 'required|array'
    ]);
    $user = User::find($id);

    foreach ($request->slug as $slug) {
      $role = Role::where('slug', $slug)->first();
      $user->roles()->attach($role);
    }

    return response(
      [
        'message' => 'Successfully added roles!'
      ],
      200
    );
  }
}
