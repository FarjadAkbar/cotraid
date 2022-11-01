<?php
namespace App\Http\Controllers\Users\Authentication;

use App\DTO\Users\CreateUserData;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Actions\Users\CreateNewUserAction;
use App\Requests\Users\RegisterUserRequest;
use Illuminate\Contracts\Auth\StatefulGuard;

class RegisterUserController extends Controller
{
    public function __construct(
        protected CreateNewUserAction $createNewUser,
        protected StatefulGuard $guard,
    ) {
    }

    public function __invoke(
        RegisterUserRequest $request
    ): JsonResponse {
        // Check if account registration is enabled
        if (! intval(get_settings('registration'))) {
            return response()->json([
                'type'    => 'error',
                'message' => 'User registration is not allowed',
            ], 401);
        }

        // Map registration data
        $data = CreateUserData::fromArray([
            'name'     => $request->input('name'),
            'email'    => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        // Register user
        try {
            $user = ($this->createNewUser)($data);
        } catch (Throwable $e) {
            return response()->json([
                'type'    => 'error',
                'message' => 'User registrations are temporarily disabled',
            ], 409);
        }

        event(new Registered($user));

        // Log in if verification is disabled
        if (! $user->password || ! intval(get_settings('user_verification'))) {
            $this->guard->login($user);
        }

        return response()->json([
            'type'    => 'success',
            'message' => 'User successfully registered.',
        ], 201);
    }
}
