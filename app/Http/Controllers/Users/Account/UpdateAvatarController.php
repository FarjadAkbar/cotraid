<?php
namespace App\Http\Controllers\Users\Account;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Requests\Users\UpdateAvatarRequest;

class UpdateAvatarController extends Controller
{
    /**
     * Update user settings
     */
    public function __invoke(
        UpdateAvatarRequest $request
    ): JsonResponse {
        $successMessage = [
            'type'    => 'success',
            'message' => 'The avatar was successfully updated.',
        ];

        // Check if is demo
        if (isDemoAccount()) {
            return response()->json($successMessage);
        }

        $request
            ->user()
            ->settings()
            ->update([
                'avatar' => store_avatar($request, 'avatar'),
            ]);

        return response()->json($successMessage);
    }
}
