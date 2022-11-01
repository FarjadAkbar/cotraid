<?php
namespace App\Http\Controllers\Users\Account;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Resources\Users\UserResource;

class AccountDetailsController extends Controller
{
    /**
     * Get all user data for frontend
     */
    public function __invoke(): JsonResponse
    {
        return response()->json(new UserResource(auth()->user()));
    }
}
