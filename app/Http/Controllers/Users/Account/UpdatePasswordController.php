<?php
namespace App\Http\Controllers\Users\Account;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Requests\Users\UpdateUserPasswordRequest;

class UpdatePasswordController extends Controller
{
    public function __invoke(
        UpdateUserPasswordRequest $request
    ): JsonResponse {
        $successMessage = [
            'type'    => 'success',
            'message' => 'The password was successfully changed.',
        ];

        if (isDemoAccount()) {
            return response()->json($successMessage);
        }

        // Store new password
        auth()->user()->update([
            'password' => bcrypt($request->input('password')),
        ]);

        return response()->json($successMessage);
    }
}
